// Define action types
export const ADD_ITEM = 'ADD_ITEM';

// Define action creators
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});
