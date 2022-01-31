import React from "react";
import NextImage from "next/image";
import logo from "../../public/logo.png";
import { usePostDetail } from "../../src/api/post";
import { NextPage } from "next";
import { IAPIResponseData } from "../api/users";
import { useRouter } from "next/router";

const DetailPage: NextPage<IAPIResponseData> = ({ menu, user, fallback }) => {
  const router = useRouter();

  const { id } = router.query;

  const { data, error, loading } = usePostDetail(id, {
    fallback,
  });

  console.log(data);

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
        <div>
          {!data && !loading && error && <span>Error</span>}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-pulse">
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
            </div>
          )}

          {!loading && data && (
            <div
              key={data.id}
              className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
            >
              <div className="h-96 bg-slate-300 rounded-md relative overflow-hidden cursor-pointer col-span-1 sm:col-span-2">
                <NextImage
                  alt={data.title}
                  src={data.image}
                  className="object-cover object-center h-96 w-full overflow-hidden rounded-md"
                  layout="fill"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-bold">{data.title}</span>
                <span className="font-bold">
                  {data.currency}
                  {data.price}
                </span>
                <p className="">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  inventore explicabo eveniet eligendi ea harum ad velit cumque
                  in veniam. Dignissimos placeat laudantium excepturi qui,
                  deleniti incidunt cumque ad similique.
                </p>
                <button className="font-bold mt-4 bg-primary py-2 text-white rounded-xl">
                  Buy Now
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export async function getStaticPaths() {
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
    paths: posts.map(({ id }) => ({
      params: {
        id: id,
      },
    })),
    fallback: false, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
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

  const post = posts.find(({ id }) => params.id === id);
  return {
    props: {
      ...res,
      fallback: {
        [`/posts/${params.id}`]: post,
      },
    },
    revalidate: 10,
  };
}

export default DetailPage;
