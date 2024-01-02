// src/dragging.test.js
import { initGroups, initItems, move, reorder } from './dragging';

describe('Dragging functions', () => {
    test('reorder should reorder items within a list', () => {
        const list = { content: ['item1', 'item2', 'item3'] };
        const startIndex = 0;
        const endIndex = 2;

        const result = reorder(list, startIndex, endIndex);

        expect(result.content).toEqual(['item2', 'item3', 'item1']);
    });

    test('move should move an item from one list to another', () => {
        const source = { content: ['item1', 'item2', 'item3'] };
        const destination = { content: ['destinationItem1', 'destinationItem2'] };
        const droppableSource = { index: 0, droppableId: 'sourceId' };
        const droppableDestination = { index: 1, droppableId: 'destinationId' };

        const { result, removed } = move(source, destination, droppableSource, droppableDestination);

        expect(result.sourceId.content).toEqual(['item2', 'item3']);
        expect(result.destinationId.content).toEqual(['destinationItem1', 'item1', 'destinationItem2']);
        expect(removed).toBe('item1');
    });

    test('initItems should initialize items with unique IDs', () => {
        const items = ['occurrence1', 'occurrence2', 'occurrence3'];
        const initializedItems = initItems(items);

        initializedItems.forEach(item => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('content');
        });
    });

    test('initGroups should initialize groups with unique IDs and empty content arrays', () => {
        const groups = [{}, {}, {}];
        const initializedGroups = initGroups(groups);

        initializedGroups.forEach(group => {
            expect(group).toHaveProperty('id');
            expect(group).toHaveProperty('content');
            expect(group.content).toEqual([]);
        });
    });
});
