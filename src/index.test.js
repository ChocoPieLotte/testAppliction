import reducer, { addItem, getId } from './store/itemsSlice';

jest.mock('uuid', () => {
  return { v4: () => '11111' };
});

const testItem = { name: 'TestItem', description: 'Test Description', photo: 'PhotoUri', value: 100 }
const testItem2 = { name: 'TestItem 2', description: 'Test Description 2', photo: 'PhotoUri', value: 400 }

test('should add new item', () => {
  const previousState = {
    items: [],
    totalSum: 0,
  }
  expect(reducer(previousState, addItem(testItem))).toEqual({
    items: [{
      ...testItem,
      id: getId(),
    }],
    totalSum: 100,
  })
})

test('should add new item and increment totalSum', () => {
  const previousState = {
    items: [testItem],
    totalSum: testItem.value,
  }
  expect(reducer(previousState, addItem(testItem2))).toEqual({
    items: [testItem, {
      ...testItem2,
      id: getId(),
    }],
    totalSum: testItem.value + testItem2.value,
  })
})
