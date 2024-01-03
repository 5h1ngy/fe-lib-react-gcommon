"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initGroups = exports.initItems = exports.move = exports.reorder = void 0;
/**
 * Reorders items within a list.
 *
 * @param {Object} list - The list to be reordered.
 * @param {number} startIndex - The starting index of the item.
 * @param {number} endIndex - The ending index of the item.
 * @returns {Object} - The reordered list.
 */
const reorder = (list, startIndex, endIndex) => {
    // Create a shallow copy of the list to avoid mutation
    const result = { ...list };
    // Remove the item from the original position
    const [removed] = result.content.splice(startIndex, 1);
    // Insert the item at the new position
    result.content.splice(endIndex, 0, removed);
    return result;
};
exports.reorder = reorder;
/**
 * Moves an item from one list to another list.
 *
 * @param {Object} source - The source list.
 * @param {Object} destination - The destination list.
 * @param {Object} droppableSource - Information about the source droppable.
 * @param {Object} droppableDestination - Information about the destination droppable.
 * @returns {Object} - Object containing the updated lists and the removed item.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    // Create shallow copies of source and destination to avoid mutation
    const sourceClone = { ...source };
    const destClone = { ...destination };
    // Remove the item from the source list
    const [removed] = sourceClone.content.splice(droppableSource.index, 1);
    // Insert the item into the destination list at the specified index
    destClone.content.splice(droppableDestination.index, 0, removed);
    // Create an object representing the result with updated lists
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return { result, removed };
};
exports.move = move;
/**
 * Initializes items with unique IDs based on the provided occurrences.
 *
 * @param {Array} items - The array of items to initialize.
 * @returns {Array} - The array of initialized items with unique IDs.
 */
const initItems = (items) => items.map((occurrence, index) => ({
    id: `item-${index}-${new Date().getTime()}`,
    content: occurrence
}));
exports.initItems = initItems;
/**
 * Initializes groups with unique IDs based on the provided groups.
 *
 * @param {Array} groups - The array of groups to initialize.
 * @returns {Array} - The array of initialized groups with unique IDs and empty content arrays.
 */
const initGroups = (groups) => groups.map((group, index) => ({
    ...group,
    id: `group-${index}-${new Date().getTime()}`,
    content: []
}));
exports.initGroups = initGroups;
