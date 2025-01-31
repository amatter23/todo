import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const tasksApi = createApi({
  reducerPath: 'tasks',
  baseQuery: fetchBaseQuery({ 
    baseUrl: import.meta.env.PROD 
      ? 'https://todo-list-api-production-1907.up.railway.app/api/v1'
      : '/api'
  }),
  endpoints: builder => ({
    getTasks: builder.query({
      query: () => 'tasks',
      providesTags: ['task'],
      invalidatesTags: ['task'],
    }),
    createTask: builder.mutation({
      query: newTask => ({
        url: 'tasks',
        method: 'POST',
        body: newTask,
      }),
      invalidatesTags: ['task'],
    }),
    updateTask: builder.mutation({
      query: task => ({
        url: `tasks/${task.uuid}`,
        method: 'PATCH',
        body: task,
      }),
      invalidatesTags: ['task'],
    }),
  }),
});
export const {
  useGetTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
} = tasksApi;
