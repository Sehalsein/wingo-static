import type { NextPage, GetStaticProps } from "next";
import NextImage from "next/image";
import NextLink from "next/link";
import { usePostList } from "../src/api/post";
import fetcher from "../src/lib/swr";
import logo from "../public/logo.png";
import { IAPIResponseData } from "./api/users";
import { IApiPost } from "./api/posts";
import { Disclosure, Transition } from "@headlessui/react";

const Home: NextPage<IAPIResponseData> = ({ menu, user, fallback }) => {
  const { data, error, loading } = usePostList({
    fallback,
  });

  return (
    <>
      <header className="flex bg-primary text-white h-14 md:h-20 items-center">
        <div className="max-w-7xl mx-auto flex gap-4 justify-between w-full px-4">
          <div className="h-10 w-1/6 relative">
            <NextImage
              src={logo}
              alt="logo"
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 md:py-16 px-4">
        <div className="flex flex-1 flex-col gap-2 items-center">
          <div className="bg-slate-300 h-24 w-24 md:h-32 md:w-32 rounded-full relative overflow-hidden">
            <NextImage
              alt="profile-pic"
              src={user.avatar}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-primary text-2xl">{user.name}</span>
            <p>Designer, Vlogger, Teacher</p>
          </div>
          {/* <div className="flex gap-4">
            <span>
              <span className="font-bold ">{user.followers}</span>
              &nbsp;followers
            </span>
            <span>
              <span className="font-bold ">{user.posts}</span>
              &nbsp;posts
            </span>
          </div> */}
          <div className="flex gap-6 mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 hover:text-primary cursor-pointer"
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
            <svg
              className="h-8 w-8 hover:text-primary cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M 7.5 1 C 3.9160714 1 1 3.9160714 1 7.5 C 1 11.083929 3.9160714 14 7.5 14 C 11.083929 14 14 11.083929 14 7.5 C 14 3.9160714 11.083929 1 7.5 1 z M 7.5 2 C 10.543488 2 13 4.4565116 13 7.5 C 13 10.266333 10.967571 12.541024 8.3125 12.933594 L 8.3125 9.0898438 L 9.8652344 9.0898438 L 10.109375 7.5136719 L 8.3125 7.5136719 L 8.3125 6.6503906 C 8.3125 5.9953906 8.5256719 5.4140625 9.1386719 5.4140625 L 10.123047 5.4140625 L 10.123047 4.0371094 C 9.9500469 4.0141094 9.5845781 3.9628906 8.8925781 3.9628906 C 7.4485781 3.9628906 6.6015625 4.7258906 6.6015625 6.4628906 L 6.6015625 7.5117188 L 5.1171875 7.5117188 L 5.1171875 9.0898438 L 6.6035156 9.0898438 L 6.6035156 12.919922 C 3.9897868 12.492118 2 10.237066 2 7.5 C 2 4.4565116 4.4565116 2 7.5 2 z" />
            </svg>
            <svg
              className="h-8 w-8 hover:text-primary cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M 4.773438 1 C 2.695313 1 1 2.695313 1 4.773438 L 1 10.230469 C 1 12.304688 2.695313 14 4.773438 14 L 10.230469 14 C 12.304688 14 14 12.304688 14 10.226563 L 14 4.773438 C 14 2.695313 12.304688 1 10.226563 1 Z M 4.773438 2 L 10.226563 2 C 11.765625 2 13 3.234375 13 4.773438 L 13 10.226563 C 13 11.765625 11.765625 13 10.230469 13 L 4.773438 13 C 3.234375 13 2 11.765625 2 10.230469 L 2 4.773438 C 2 3.234375 3.234375 2 4.773438 2 Z M 11.5 3 C 11.222656 3 11 3.222656 11 3.5 C 11 3.777344 11.222656 4 11.5 4 C 11.777344 4 12 3.777344 12 3.5 C 12 3.222656 11.777344 3 11.5 3 Z M 7.5 4 C 5.574219 4 4 5.574219 4 7.5 C 4 9.425781 5.574219 11 7.5 11 C 9.425781 11 11 9.425781 11 7.5 C 11 5.574219 9.425781 4 7.5 4 Z M 7.5 5 C 8.886719 5 10 6.113281 10 7.5 C 10 8.886719 8.886719 10 7.5 10 C 6.113281 10 5 8.886719 5 7.5 C 5 6.113281 6.113281 5 7.5 5 Z" />
            </svg>
            <svg
              className="h-8 w-8 hover:text-primary cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M 3.5 2 C 2.6774686 2 2 2.6774686 2 3.5 L 2 12.5 C 2 13.322531 2.6774686 14 3.5 14 L 12.5 14 C 13.322531 14 14 13.322531 14 12.5 L 14 3.5 C 14 2.6774686 13.322531 2 12.5 2 L 3.5 2 z M 3.5 3 L 12.5 3 C 12.781469 3 13 3.2185314 13 3.5 L 13 12.5 C 13 12.781469 12.781469 13 12.5 13 L 3.5 13 C 3.2185314 13 3 12.781469 3 12.5 L 3 3.5 C 3 3.2185314 3.2185314 3 3.5 3 z M 8 4 L 8 9.5 C 8 10.33 7.33 11 6.5 11 C 5.67 11 5 10.33 5 9.5 C 5 8.67 5.67 8 6.5 8 C 6.68 8 6.84 8.0298438 7 8.0898438 L 7 7.0507812 C 6.84 7.0207812 6.67 7 6.5 7 C 5.12 7 4 8.12 4 9.5 C 4 10.88 5.12 12 6.5 12 C 7.88 12 9 10.88 9 9.5 L 9 6.2109375 C 9.165316 6.3496799 9.2903403 6.5561561 9.4804688 6.6425781 C 10.313461 7.021211 11.25 7 12 7 L 12 6 C 11.25 6 10.436539 5.978789 9.8945312 5.7324219 C 9.3525237 5.4860548 9 5.1166667 9 4 L 8 4 z" />
            </svg>
            <svg
              className="h-8 w-8 hover:text-primary cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M 15 3.296875 C 14.476563 3.523438 13.949219 3.691406 13.367188 3.746094 C 13.949219 3.410156 14.417969 2.84375 14.648438 2.226563 C 14.066406 2.5625 13.484375 2.789063 12.84375 2.902344 C 12.257813 2.339844 11.5 2 10.683594 2 C 9.109375 2 7.824219 3.242188 7.824219 4.765625 C 7.824219 4.988281 7.824219 5.214844 7.882813 5.386719 C 4.875 5.386719 2.8125 3.691406 1.414063 2 C 1.121094 2.394531 1.003906 2.902344 1.003906 3.410156 C 1.003906 4.367188 1.53125 5.214844 2.289063 5.722656 C 1.820313 5.667969 1.355469 5.554688 1.003906 5.386719 C 1.003906 5.386719 1.003906 5.386719 1.003906 5.441406 C 1.003906 6.796875 1.996094 7.921875 3.28125 8.148438 C 3.046875 8.203125 2.8125 8.261719 2.519531 8.261719 C 2.347656 8.261719 2.171875 8.261719 1.996094 8.207031 C 2.347656 9.335938 3.976563 10.632813 5.257813 10.632813 C 4.265625 11.363281 3.34375 12 1.5 12 C 1.265625 12 1.453125 12 1 12 C 2.28125 12.789063 3.800781 13 5.375 13 C 10.683594 13 13.542969 8.769531 13.542969 5.101563 C 13.542969 4.988281 13.542969 4.878906 13.542969 4.765625 C 14.125 4.367188 14.59375 3.863281 15 3.296875" />
            </svg>
            <svg
              className="h-8 w-8 hover:text-primary cursor-pointer"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <path d="M 2.488281 3.011719 C 1.664063 3.011719 0.988281 3.6875 0.988281 4.511719 L 0.988281 11.511719 C 0.988281 12.335938 1.664063 13.011719 2.488281 13.011719 L 13.488281 13.011719 C 14.308594 13.011719 14.988281 12.335938 14.988281 11.511719 L 14.988281 4.511719 C 14.988281 3.6875 14.3125 3.011719 13.488281 3.011719 Z M 2.488281 4.011719 L 13.488281 4.011719 C 13.769531 4.011719 13.988281 4.230469 13.988281 4.511719 L 13.988281 11.511719 C 13.988281 11.792969 13.769531 12.011719 13.488281 12.011719 L 2.488281 12.011719 C 2.207031 12.011719 1.988281 11.792969 1.988281 11.511719 L 1.988281 4.511719 C 1.988281 4.230469 2.207031 4.011719 2.488281 4.011719 Z M 6 4.992188 L 6 11.011719 L 11 8 Z M 7 6.757813 L 9.0625 8 L 7 9.242188 Z" />
            </svg>
          </div>
        </div>

        <div className="mt-8 md:mt-16">
          {!data && !loading && error && <span>Error</span>}
          {loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 animate-pulse">
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
            </div>
          )}

          {!loading && data && (
            <>
              <Disclosure as="div" className="mt-2" defaultOpen={true}>
                {({ open }) => (
                  <>
                    <Disclosure.Button
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
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="pt-4 pb-2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {data.map(({ title, id, image, currency, price }) => (
                            <div key={id} className="flex flex-col gap-2">
                              <NextLink href={`/${id}`}>
                                <div className="h-56 bg-slate-300 rounded-md relative overflow-hidden cursor-pointer">
                                  <div className="absolute z-10 right-2 top-2 p-1 rounded-full backdrop-blur-sm bg-black/30">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-6 w-6 text-white"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                      />
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      />
                                    </svg>
                                  </div>
                                  <NextImage
                                    alt={title}
                                    src={image}
                                    className="object-cover object-center h-64 w-full overflow-hidden rounded-md"
                                    layout="fill"
                                  />
                                </div>
                              </NextLink>
                              <div className="flex flex-col">
                                <span className="text-lg font-bold ">
                                  {title}
                                </span>
                                <span className="text-gray-400 font-medium">
                                  {currency}
                                  {price}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure as="div" className="mt-2">
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`flex items-center justify-between h-16 w-full px-4 py-2 text-sm font-medium text-left text-orange-900 ${
                        !open
                          ? "bg-orange-100 hover:bg-orange-200 focus-visible:ring-orange-500"
                          : ""
                      } rounded-lg focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75`}
                    >
                      <span className="text-xl font-semibold">Sound Cloud</span>
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
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="pt-4 pb-2">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
                          {data.map(({ title, id, image, currency, price }) => (
                            <div key={id} className="flex flex-col gap-2">
                              <div className="h-56 bg-slate-300 rounded-md relative overflow-hidden cursor-pointer">
                                <div className="absolute z-10 right-2 top-2 p-1 rounded-full backdrop-blur-sm bg-black/30">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-white"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </div>
                                <NextImage
                                  alt={title}
                                  src={image}
                                  className="object-cover object-center h-64 w-full overflow-hidden rounded-md"
                                  layout="fill"
                                />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-lg font-bold ">
                                  {title}
                                </span>
                                <span className="text-gray-400 font-medium">
                                  {currency}
                                  {price}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps<IAPIResponseData> = async (
  context
) => {
  console.log("BUILDING HOME PAGE");
  const res = {
    menu: [
      {
        title: "Home",
        link: "/home",
      },
      {
        title: "About Us",
        link: "/about",
      },
      {
        title: "Blog",
        link: "/blog",
      },
    ],
    user: {
      name: "Roger Wingo",
      handle: "rogerwingo",
      posts: "2",
      followers: "100",
      avatar:
        "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
  };
  const posts = [
    {
      id: "1",
      title: "Item 1",
      price: "12.00",
      currency: "$",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80",
    },
    {
      id: "2",
      title: "Item 2",
      price: "12.00",
      currency: "$",
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    },
    {
      id: "3",
      title: "Item 3",
      price: "12.00",
      currency: "$",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    },
    {
      id: "4",
      title: "Item 4",
      price: "12.00",
      currency: "$",
      image:
        "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    },
    {
      id: "5",
      title: "Item 5",
      price: "12.00",
      currency: "$",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: "6",
      title: "Item 6",
      price: "12.00",
      currency: "$",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    },
    {
      id: "7",
      title: "Item 7",
      price: "12.00",
      currency: "$",
      image:
        "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80",
    },
  ];

  return {
    props: {
      ...res,
      fallback: {
        "/posts": posts,
      },
    },
    revalidate: 10,
  };
};

export default Home;
