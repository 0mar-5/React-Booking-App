import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../network/interceptor";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async ({ query, country }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/hotels`);

      const filtered = response.data.filter((hotel) => {
        const nameMatch = hotel.name
          ?.toLowerCase()
          .includes(query.toLowerCase());

        const countryMatch = hotel.address?.country
          ?.toLowerCase()
          .includes(country.toLowerCase());

        const isoMatch =
          hotel.address?.countryIsoCode?.toLowerCase() ===
          country.toLowerCase();

        const queryExists = query.trim() !== "";
        const countryExists = country.trim() !== "";

        if (queryExists && countryExists) {
          return (nameMatch || countryMatch) && (countryMatch || isoMatch);
        } else if (queryExists) {
          return nameMatch || countryMatch || isoMatch;
        } else if (countryExists) {
          return countryMatch || isoMatch;
        }

        return true;
      });

      return filtered;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Search failed");
    }
  }
);

// Slice
const searchSlice = createSlice({
  name: "search",
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearResults: (state) => {
      state.results = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSearchResults.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { clearResults } = searchSlice.actions;
export default searchSlice.reducer;
