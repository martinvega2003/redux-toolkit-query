import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'api', //Name, can be anything
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000', //Base url of the server
  }),
  endpoints: (builder) => ({ // Need to pass builder
    getTasks: builder.query({ 
      query: () => '/tasks', //baseUrl + /tasks = endpoint to get all tasks
      providesTags: ["tasks"] // Name as 'tasks' to execute in other functions
    }),
    createTask: builder.mutation({ // query is used to get data, mutation is used to mutate data (In this case, create)
      query: (newTask) => ({ // Pass as an argument the new task we want to create
        url: "/tasks",
        method: "POST", // Need to specify the method
        body: newTask, // Need to pass a body
      }),
      invalidatesTags: ["tasks"] // Execute 'tasks' function
    })
  }),
});

// from the endpoints rtk query creates hooks that contains the data, isError, isLoading, error, and other values.
// from getTasks endpoint it created a useGetTasksQuery hook
export const { useGetTasksQuery, useCreateTaskMutation } = apiSlice