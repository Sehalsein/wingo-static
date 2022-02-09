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
        "user",
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
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
      >
        <div className="h-96 bg-slate-300 rounded-md relative overflow-hidden cursor-pointer col-span-1 sm:col-span-2">
          <NextImage
            alt={itemDetail.name}
            src={itemDetail.image}
            className="object-cover object-center h-96 w-full overflow-hidden rounded-md"
            layout="fill"
          />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg">{itemDetail.name}</span>
          <span className="font-bold">
            {itemDetail.currency}
            {itemDetail.price}
          </span>
          <p className="">{itemDetail.description}</p>
          <button className="font-bold mt-4 bg-primary py-2 text-white rounded-xl">
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};

StoreItemDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default StoreItemDetailPage;
