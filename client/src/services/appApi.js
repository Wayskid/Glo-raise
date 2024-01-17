import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = `http://localhost:3000/api`;

export const appApi = createApi({
  reducerPath: "AppAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  refetchOnReconnect: true,
  keepUnusedDataFor: 5,
  endpoints: (builder) => ({
    //Funders---------------------------------------
    createFunder: builder.mutation({
      query: ({ body }) => ({
        url: `/funders/funder_create`,
        method: "post",
        body,
      }),
    }),
    //Founders---------------------------------------
    createFounder: builder.mutation({
      query: ({ body }) => ({
        url: `/founders/founder_create`,
        method: "post",
        body,
      }),
    }),
    checkout: builder.mutation({
      query: ({ body }) => ({
        url: "/stripe/create-checkout-session",
        method: "post",
        body,
      }),
    }),
  }),
});

export const {
  useCreateFunderMutation,
  useCreateFounderMutation,
  useCheckoutMutation,
} = appApi;
