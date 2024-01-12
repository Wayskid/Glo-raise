import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = `https://localhost:3000/api`;

export const appApi = createApi({
  reducerPath: "AppAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  refetchOnReconnect: true,
  keepUnusedDataFor: 5,
  endpoints: (builder) => ({
    //PRODUCTS---------------------------------------
    //---  GET PRODUCTS  ---//
    createFunder: builder.mutation({
      query: ({ body }) => ({
        url: `/funders/funder_create`,
        method: "post",
        body,
      }),
    }),
  }),
});

export const { useCreateFunderMutation } = appApi;
