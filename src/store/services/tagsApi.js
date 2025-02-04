import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const tagsApi = createApi({
  reducerPath: 'tags',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: builder => ({
    getTags: builder.query({
      query: () => 'tags',
      providesTags: ['tags'],
    }),
    createTag: builder.mutation({
      query: newTag => ({
        url: 'tags',
        method: 'POST',
        body: newTag,
      }),
      invalidatesTags: ['tags'],
    }),
  }),
});
export const { useGetTagsQuery, useCreateTagMutation } = tagsApi;
