import { createAsyncThunk } from "@reduxjs/toolkit";
import { authenticateUser } from "@utils/authentication";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async ({ username, password }: { username: string; password: string }) => {
    // Call your authentication API

    const response = await authenticateUser(username, password);

    // Return the user object if authentication is successful
    return { username: response.username, accessToken: response.accessToken };
  }
);
