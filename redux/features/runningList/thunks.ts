import { RUNNING_URL } from "@env";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { Running } from "./slice";

export const fetchRunningListThunk = createAsyncThunk(
  "runningList/listRunningList",
  async (accessToken?: string) => {
    let response;
    try {
      const opts = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
      response = await fetch(`${RUNNING_URL}/runnings`, opts);
    } catch (error) {
      return { response: null, error: true };
    }
    if (!response.ok) {
      return { response: null, error: true };
    }
    const res = (await response.json()) as Running[];
    return { response: res, error: false };
  }
);
