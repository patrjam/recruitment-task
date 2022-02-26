import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchSample } from './sampleApi';

export type SampleSubState = {
  data: string | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

export type SampleState = SampleSubState[];

export const initialSubState: SampleSubState = {
  data: null,
  status: 'idle',
  error: null,
}

const initialState: SampleState = [];

export const getSampleData = createAsyncThunk<string, number, { rejectValue: string }>(
  'sample/fetchSample',
  async (id: number, { rejectWithValue }) => {
    try {
      return await fetchSample(id);
    } catch (err) {
      if (typeof err !== 'string') {
        throw err;
      }
      return rejectWithValue(err);
    }
  }
);

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSampleData.pending, (state, action) => {
        state[action.meta.arg] = { ...initialSubState, status: 'loading' }
      })
      .addCase(getSampleData.fulfilled, (state, action) => {
        state[action.meta.arg] = {
          ...initialSubState,
          status: 'succeeded',
          data: action.payload,
        }
      })
      .addCase(getSampleData.rejected, (state, action) => {
        state[action.meta.arg] = {
          ...initialSubState,
          status: 'failed',
          error: action.payload || 'Tak tohle nechceš vidět',
        }
      })
  },
});

export default sampleSlice.reducer;
