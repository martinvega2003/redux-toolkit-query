import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api', //Name, can be anything
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000', //Base url of the server
  }),
  endpoints: (builder) => ({ // Need to pass builder
    getTasks: builder.query({ 
      query: () => '/tasks' //baseUrl + /tasks = endpoint to get all tasks
    }),
  }),
});

// from the endpoints rtk query creates hooks that contains the data, isError, isLoading, error, and other values.
// from getTasks endpoint it created a useGetTasksQuery hook
export const { useGetTasksQuery } = apiSlice