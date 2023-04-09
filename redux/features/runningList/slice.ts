import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "redux/reducers";

import { fetchRunningListThunk } from "./thunks";

export interface Running {
  id: string;
  name: string;
  distance: number;
  time: number;
  location: string;
}

type RunningListState = {
  runningList: Running[];
  loading: boolean;
};

const initialState: RunningListState = {
  runningList: [],
  loading: false,
};

const slice = createSlice({
  name: "runningList",
  initialState,
  reducers: {
    clearRunningList: (state: RunningListState) => {
      state.runningList = [];
    },
    setMockRunningList: (state: RunningListState) => {
      state.runningList = [
        {
          distance: 10,
          id: "1",
          location: "Helsinki",
          name: "Running 1",
          time: 100,
        },
        {
          distance: 20,
          id: "2",
          location: "Helsinki",
          name: "Running 2",
          time: 200,
        },
        {
          distance: 30,
          id: "3",
          location: "Helsinki",
          name: "Running 3",
          time: 300,
        },
      ];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRunningListThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRunningListThunk.fulfilled, (state, action) => {
        const { payload } = action;
        const { response, error } = payload;
        if (!error) {
          state.runningList = response || [];
          state.loading = false;
        }
        state.loading = false;
      });
  },
});

export const { clearRunningList, setMockRunningList } = slice.actions;

export const selectRunningListSlice = (state: RootState) => state.runningList;

export default slice.reducer;
