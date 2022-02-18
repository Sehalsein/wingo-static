import NextLink from "next/link";
import NextImage from "next/image";
import { Transition } from "@headlessui/react";
import React, { ReactElement, useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

import { db } from "@/src/lib/firebase";
import AppLayout from "@/src/components/layout/AppLayout";
import { NextPageWithLayout } from "@/src/types/app/next";

const StoreItemCard = dynamic(() => import("@/src/view/home/StoreItemCard"));

type UserFireStoreDoc = {
  id: string;
  name: string;
  bio: string;
  avatar?: string;
  social: {
    instagram: string;
    [key: string]: string;
  };
};

type StoreFireStoreDoc = {
  id: string;
  description: string;
  name: string;
  price: string;
  image: string;
  currency: string;
  productLink: string;
};

const UserProfilePage: NextPageWithLayout = () => {
  const router = useRouter();
  const [userDetail, setUserDetail] = useState<UserFireStoreDoc | null>(null);
  const [storeList, setStoreList] = useState<StoreFireStoreDoc[]>([]);

  useEffect(() => {
    const { id } = router.query;

    if (id) {
      const publicStoreRef = doc(db, "public", id.toString());
      const userStoreRef = collection(db, "public", id.toString(), "store");

      getDoc(publicStoreRef).then((docSnap) => {
        if (docSnap.exists()) {
          setUserDetail({
            ...(docSnap.data() as UserFireStoreDoc),
            id: docSnap.id,
          });
        }
      });

      getDocs(userStoreRef).then((docSnap) => {
        const storeItem: StoreFireStoreDoc[] = [];
        docSnap.forEach((res) => {
          storeItem.push({ ...(res.data() as StoreFireStoreDoc), id: res.id });
        });
        setStoreList(storeItem);
      });
    }
  }, [router]);

  if (!userDetail) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      <div className="flex flex-1 flex-col items-center gap-2">
        <div className="relative h-24 w-24 overflow-hidden rounded-full bg-slate-300 md:h-32 md:w-32">
          {userDetail.avatar && (
            <NextImage
              alt="profile-pic"
              src={userDetail.avatar}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          )}
        </div>
        <div className="flex flex-col items-center">
          <span className="text-primary text-2xl font-bold">
            {userDetail.name}
          </span>
          <p>{userDetail.bio}</p>
        </div>

        <div className="mt-4 flex gap-6">
          {userDetail.social.website && (
            <NextLink href={userDetail.social.website}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="hover:text-primary h-8 w-8 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </NextLink>
          )}
          {userDetail.social.facebook && (
            <NextLink href={userDetail.social.facebook}>
              <svg
                className="hover:text-primary h-8 w-8 cursor-pointer"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z" />
              </svg>
            </NextLink>
          )}
          {userDetail.social.instagram && (
            <NextLink href={userDetail.social.instagram}>
              <svg
                className="hover:text-primary h-8 w-8 cursor-pointer"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z" />
              </svg>
            </NextLink>
          )}
          {userDetail.social.tiktok && (
            <NextLink href={userDetail.social.tiktok}>
              <svg
                className="hover:text-primary h-8 w-8 cursor-pointer"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M 3.5 2 C 2.6774686 2 2 2.6774686 2 3.5 L 2 12.5 C 2 13.322531 2.6774686 14 3.5 14 L 12.5 14 C 13.322531 14 14 13.322531 14 12.5 L 14 3.5 C 14 2.6774686 13.322531 2 12.5 2 L 3.5 2 z M 3.5 3 L 12.5 3 C 12.781469 3 13 3.2185314 13 3.5 L 13 12.5 C 13 12.781469 12.781469 13 12.5 13 L 3.5 13 C 3.2185314 13 3 12.781469 3 12.5 L 3 3.5 C 3 3.2185314 3.2185314 3 3.5 3 z M 8 4 L 8 9.5 C 8 10.33 7.33 11 6.5 11 C 5.67 11 5 10.33 5 9.5 C 5 8.67 5.67 8 6.5 8 C 6.68 8 6.84 8.0298438 7 8.0898438 L 7 7.0507812 C 6.84 7.0207812 6.67 7 6.5 7 C 5.12 7 4 8.12 4 9.5 C 4 10.88 5.12 12 6.5 12 C 7.88 12 9 10.88 9 9.5 L 9 6.2109375 C 9.165316 6.3496799 9.2903403 6.5561561 9.4804688 6.6425781 C 10.313461 7.021211 11.25 7 12 7 L 12 6 C 11.25 6 10.436539 5.978789 9.8945312 5.7324219 C 9.3525237 5.4860548 9 5.1166667 9 4 L 8 4 z" />
              </svg>
            </NextLink>
          )}
          {userDetail.social.twitter && (
            <NextLink href={userDetail.social.twitter}>
              <svg
                className="hover:text-primary h-8 w-8 cursor-pointer"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M 15 3.296875 C 14.476563 3.523438 13.949219 3.691406 13.367188 3.746094 C 13.949219 3.410156 14.417969 2.84375 14.648438 2.226563 C 14.066406 2.5625 13.484375 2.789063 12.84375 2.902344 C 12.257813 2.339844 11.5 2 10.683594 2 C 9.109375 2 7.824219 3.242188 7.824219 4.765625 C 7.824219 4.988281 7.824219 5.214844 7.882813 5.386719 C 4.875 5.386719 2.8125 3.691406 1.414063 2 C 1.121094 2.394531 1.003906 2.902344 1.003906 3.410156 C 1.003906 4.367188 1.53125 5.214844 2.289063 5.722656 C 1.820313 5.667969 1.355469 5.554688 1.003906 5.386719 C 1.003906 5.386719 1.003906 5.386719 1.003906 5.441406 C 1.003906 6.796875 1.996094 7.921875 3.28125 8.148438 C 3.046875 8.203125 2.8125 8.261719 2.519531 8.261719 C 2.347656 8.261719 2.171875 8.261719 1.996094 8.207031 C 2.347656 9.335938 3.976563 10.632813 5.257813 10.632813 C 4.265625 11.363281 3.34375 12 1.5 12 C 1.265625 12 1.453125 12 1 12 C 2.28125 12.789063 3.800781 13 5.375 13 C 10.683594 13 13.542969 8.769531 13.542969 5.101563 C 13.542969 4.988281 13.542969 4.878906 13.542969 4.765625 C 14.125 4.367188 14.59375 3.863281 15 3.296875" />
              </svg>
            </NextLink>
          )}
          {userDetail.social.youtube && (
            <NextLink href={userDetail.social.youtube}>
              <svg
                className="hover:text-primary h-8 w-8 cursor-pointer"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
              >
                <path d="M 2.488281 3.011719 C 1.664063 3.011719 0.988281 3.6875 0.988281 4.511719 L 0.988281 11.511719 C 0.988281 12.335938 1.664063 13.011719 2.488281 13.011719 L 13.488281 13.011719 C 14.308594 13.011719 14.988281 12.335938 14.988281 11.511719 L 14.988281 4.511719 C 14.988281 3.6875 14.3125 3.011719 13.488281 3.011719 Z M 2.488281 4.011719 L 13.488281 4.011719 C 13.769531 4.011719 13.988281 4.230469 13.988281 4.511719 L 13.988281 11.511719 C 13.988281 11.792969 13.769531 12.011719 13.488281 12.011719 L 2.488281 12.011719 C 2.207031 12.011719 1.988281 11.792969 1.988281 11.511719 L 1.988281 4.511719 C 1.988281 4.230469 2.207031 4.011719 2.488281 4.011719 Z M 6 4.992188 L 6 11.011719 L 11 8 Z M 7 6.757813 L 9.0625 8 L 7 9.242188 Z" />
              </svg>
            </NextLink>
          )}
        </div>
      </div>

      <div className="mt-8 md:mt-16">
        {storeList && storeList.length > 0 && (
          <>
            {/* <Disclosure as="div" className="mt-2" defaultOpen={true}>
              {({ open }) => (
                <> */}
            {/* <Disclosure.Button
                    className={`flex items-center justify-between h-16 w-full px-4 py-2 text-sm font-medium text-left text-orange-900 ${
                      !open
                        ? "bg-orange-100 hover:bg-orange-200 focus-visible:ring-orange-500"
                        : ""
                    } rounded-lg focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75`}
                  >
                    <span className="text-xl font-semibold">My Store</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-6 h-6 text-orange-500`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Disclosure.Button> */}
            <Transition
              show={true}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                {storeList.map(
                  ({ name, id, image, currency, price, productLink }) => (
                    <StoreItemCard
                      key={id}
                      name={name}
                      id={id}
                      image={image}
                      currency={currency}
                      price={price}
                      userId={userDetail.id}
                      productLink={productLink}
                    />
                  )
                )}
              </div>
            </Transition>
            {/* </>
              )}
            </Disclosure> */}
          </>
        )}
      </div>
    </>
  );
};

UserProfilePage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default UserProfilePage;
