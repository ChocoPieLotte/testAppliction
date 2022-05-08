import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from 'uuid';

import { InventoryItem, Items } from "../navigation/types"

export const getId = () => uuidv4();
export interface InventoryState {
  totalSum: number,
  items: Items,
}

const initialState: InventoryState = {
  totalSum: 0,
  items: [],
}

export const itemSlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, { payload }: PayloadAction<InventoryItem>) => {
      state.items.push({ id: getId(), ...payload });
      state.totalSum += payload.value;
  },
}})

export const { addItem } = itemSlice.actions

export default itemSlice.reducer