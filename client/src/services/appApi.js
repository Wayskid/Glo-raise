import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = `https://glo-raise.onrender.com/api`;

export const appApi = createApi({
  reducerPath: "AppAPI",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  refetchOnReconnect: true,
  keepUnusedDataFor: 5,
  endpoints: (builder) => ({
    //PRODUCTS---------------------------------------
    //---  GET PRODUCTS  ---//
    getProducts: builder.query({
      query: ({ filter, sort, search }) => ({
        url: `/product?filter_by=${filter}&sort_by=${sort}&search=${search}`,
        method: "get",
      }),
      async onCacheEntryAdded(
        arg,
        { cacheDataLoaded, cacheEntryRemoved, updateCachedData }
      ) {
        try {
          await cacheDataLoaded;

          socket.on("update_products", (arg) => {
            updateCachedData((draft) => {
              draft.push(arg);
            });
          });

          await cacheEntryRemoved;
        } catch {}
      },
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetOneProductQuery,
  useEditProductMutation,
  useAddProductsMutation,
  useDeleteProductMutation,
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserInfoQuery,
  useSubscribeUserMutation,
  useGetSubscribersQuery,
  useCheckoutMutation,
  useSessionQuery,
  useGetOrdersQuery,
  useGetOrderDetailsQuery,
  useEditOrderMutation,
  useGetUserOrdersQuery,
  useGetProductReviewsQuery,
  useGetUserReviewsQuery,
  useAddReviewMutation,
  useDeleteReviewMutation,
  useFilterReviewMutation,
} = appApi;
