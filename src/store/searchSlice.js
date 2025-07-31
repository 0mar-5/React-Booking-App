import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../network/interceptor";

export const fetchSearchResults = createAsyncThunk(
  "search/fetchSearchResults",
  async ({ query, country }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/hotels`);

      const filtered = response.data.filter((hotel) => {
        const hotelName = hotel.name?.toLowerCase() || "";
        const hotelCountry = hotel.address?.country?.toLowerCase() || "";
        const hotelIso = hotel.address?.countryIsoCode?.toLowerCase() || "";

        const nameMatch = hotelName.includes(query.toLowerCase());
        const countryMatch = hotelCountry.includes(country.toLowerCase());
        const isoMatch = hotelIso === country.toLowerCase();

        const queryExists = query.trim() !== "";
        const countryExists = country.trim() !== "";

        if (queryExists && countryExists) {
          return nameMatch && (countryMatch || isoMatch);
        }

        if (queryExists) {
          return nameMatch;
        }

        if (countryExists) {
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

// Search slice
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
