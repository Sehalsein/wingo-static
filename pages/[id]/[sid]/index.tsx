import React, { ReactElement, useEffect, useState } from "react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";

import { db } from "@/src/lib/firebase";
import AppLayout from "@/src/components/layout/AppLayout";
import { NextPageWithLayout } from "@/src/types/app/next";

// type UserFireStoreDoc = {
//   id: string;
//   name: string;
//   bio: string;
//   avatar: string;
//   social: {
//     instagram: string;
//     [key: string]: string;
//   };
// };

type StoreFireStoreDoc = {
  id: string;
  description: string;
  name: string;
  price: string;
  image: string;
  currency: string;
  productLink: string;
};

const StoreItemDetailPage: NextPageWithLayout = () => {
  const router = useRouter();
  //   const [userDetail, setUserDetail] = useState<UserFireStoreDoc | null>(null);
  const [itemDetail, setItemDetail] = useState<StoreFireStoreDoc | null>(null);

  useEffect(() => {
    const { id, sid } = router.query;

    if (id && sid) {
      //   const userRef = doc(db, "user", id.toString());
      const storeItemRef = doc(
        db,
        "public",
        id.toString(),
        "store",
        sid.toString()
      );

      //   getDoc(userRef).then((docSnap) => {
      //     console.log("data", docSnap.data());
      //     if (docSnap.exists()) {
      //       setUserDetail({
      //         ...(docSnap.data() as UserFireStoreDoc),
      //         id: docSnap.id,
      //       });
      //     }
      //   });

      getDoc(storeItemRef).then((docSnap) => {
        console.log("store", docSnap.data());
        if (docSnap.exists()) {
          setItemDetail({
            ...(docSnap.data() as StoreFireStoreDoc),
            id: docSnap.id,
          });
        }
      });
    }
  }, [router]);

  if (!itemDetail) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div
        key={itemDetail.id}
        className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-12"
      >
        <div className="relative col-span-1 h-96 cursor-pointer overflow-hidden rounded-md bg-slate-300 sm:col-span-2">
          {itemDetail.image && (
            <NextImage
              alt={itemDetail.name}
              src={itemDetail.image}
              className="h-96 w-full overflow-hidden rounded-md object-cover object-center"
              layout="fill"
            />
          )}
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg">{itemDetail.name}</span>
          <span className="font-bold">
            {itemDetail.currency}
            {itemDetail.price}
          </span>
          {itemDetail.productLink && (
            <button
              className="bg-primary mt-4 rounded-xl py-2 font-bold text-white"
              onClick={() => {
                router.push(itemDetail.productLink);
              }}
            >
              Buy Now
            </button>
          )}
          <p className="">{itemDetail.description}</p>
        </div>
      </div>
    </>
  );
};

StoreItemDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default StoreItemDetailPage;
