import { useCustomerProductDetail } from "@/src/api/customer";
import AppLayout from "@/src/components/layout/AppLayout";
import { NextPageWithLayout } from "@/src/types/app/next";
import ErrorPage from "next/error";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";

const StoreItemDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  const { id, sid } = router.query;

  const { data, loading } = useCustomerProductDetail(
    id as string,
    sid as string
  );

  if (loading) {
    return <h1>Loading</h1>;
  }

  if (!data || !data.result) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      <div
        className="mb-6 flex items-center gap-2"
        onClick={() => {
          router.back();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
        <span className="text-xl">Product List</span>
      </div>
      <div
        key={data.result.id}
        className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12"
      >
        <div className="relative col-span-1 h-96 cursor-pointer overflow-hidden rounded-md bg-slate-300 sm:col-span-2">
          {data.result.image && (
            <NextImage
              alt={data.result.name}
              src={data.result.image}
              className="h-96 w-full overflow-hidden rounded-md object-contain object-center"
              layout="fill"
            />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg">{data.result.name}</span>
          <span className="font-bold">
            {data.result.currency}
            {data.result.price}
          </span>
          {data.result.productLink && (
            <button
              className="mt-4 rounded-xl bg-primary py-2 font-bold text-white"
              onClick={() => {
                if (data.result.productLink)
                  router.push(data.result.productLink);
              }}
            >
              Buy Now
            </button>
          )}
          <p className="">{data.result.description}</p>
        </div>
      </div>
    </>
  );
};

StoreItemDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default StoreItemDetailPage;
