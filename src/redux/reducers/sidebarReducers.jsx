import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  minimize: false,
};

export const sideBarSlice = createSlice({
  name: "minimize",
  initialState,
  reducers: {
    handleSideBarMinimization: (state, action) => {
      return {
        ...state,
        minimize: action.payload,
      };
    },
  },
});

export const { handleSideBarMinimization } = sideBarSlice.actions;
export default sideBarSlice.reducer;