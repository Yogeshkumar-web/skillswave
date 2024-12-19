import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your API slice
export const apiSlice = createApi({
    reducerPath: 'api', // Unique key for the slice in the Redux store
    baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }), // Base URL for API calls
    endpoints: (builder) => ({
      getPosts: builder.query({
        query: () => '/posts', 
      }),
    }),
  });
  
  // Export hooks for usage in components
  export const { useGetPostsQuery } = apiSlice;