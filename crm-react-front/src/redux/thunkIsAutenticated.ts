import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIsAutenticated = createAsyncThunk('/userData', async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_URL}/user/userData`,
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
