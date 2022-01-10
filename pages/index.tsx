import type { NextPage, GetStaticProps } from "next";
import NextImage from "next/image";
import { usePostList } from "../src/api/post";
import fetcher from "../src/lib/swr";
import logo from "../public/logo.png";
import { IAPIResponseData } from "./api/users";
import { IApiPost } from "./api/posts";

const Home: NextPage<IAPIResponseData> = ({ menu, user, fallback }) => {
  const { data, error, loading } = usePostList({
    fallback,
  });

  return (
    <>
      <header className="flex bg-primary text-white h-20 items-center">
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
          {/* <nav className="flex gap-12">
            {menu.map(({ title, link }) => (
              <a className="font-medium" key={link}>
                {title}
              </a>
            ))}
          </nav> */}
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-10 ">
          <div className="bg-slate-300 h-32 w-32 rounded-full relative">
            <NextImage
              alt="profile-pic"
              src={user.avatar}
              layout="fill"
              objectFit="contain"
              objectPosition="left"
            />
          </div>
          <div className="flex flex-1 flex-col gap-2">
            <span className="font-bold text-primary text-2xl">
              {user.handle}
            </span>
            <div className="flex gap-4">
              <span>
                <span className="font-bold ">{user.followers}</span>
                &nbsp;followers
              </span>
              <span>
                <span className="font-bold ">{user.posts}</span>
                &nbsp;posts
              </span>
            </div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              nemo similique nostrum maiores nisi! Quasi repudiandae, ipsa
              numquam impedit minus eaque sapiente voluptatem sequi sunt amet
              molestiae natus ratione? Perferendis.
            </span>
            <a className="cursor-pointer text-blue-600">https://wingo.in</a>
          </div>
        </div>

        <div className="mt-8 md:mt-16">
          {!data && !loading && error && <span>Error</span>}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
              <div className="h-64 bg-slate-300 rounded-md"></div>
            </div>
          )}
          {!loading && data && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ">
              {data.map(({ title, id, image }) => (
                <div
                  key={id}
                  className="h-64 bg-slate-300 rounded-md group relative overflow-hidden"
                >
                  <NextImage
                    alt={title}
                    src={image}
                    className="object-cover object-center h-64 w-full overflow-hidden rounded-md"
                    layout="fill"
                  />
                  <div className="opacity-0 group-hover:opacity-100 duration-300 absolute left-0 top-0 right-0 z-10 h-64 flex justify-center items-center text-xl bg-black/50 text-black font-semibold">
                    <div className="flex gap-2 items-center cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-white "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      <span className="text-white">Shop</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
      name: "Sehal Sein",
      handle: "@hello",
      posts: "2",
      followers: "100",
      avatar:
        "data:image/png;base64,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",
    },
  };
  const posts = [
    {
      id: "1",
      title: "POST 1",
      image:
        "https://images.unsplash.com/photo-1593642633279-1796119d5482?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    },
    {
      id: "2",
      title: "POST 2",
      image:
        "https://images.unsplash.com/photo-1641724370938-9bb229a69c47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
    },
    {
      id: "3",
      title: "POST 3",
      image:
        "https://images.unsplash.com/photo-1641671032779-002c9f37c038?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: "4",
      title: "POST 4",
      image:
        "https://images.unsplash.com/photo-1641663322175-0e2344656622?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    },
    {
      id: "5",
      title: "POST 5",
      image:
        "https://images.unsplash.com/photo-1641611605871-ae20d4514b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    },
    {
      id: "6",
      title: "POST 6",
      image:
        "https://images.unsplash.com/photo-1641599988873-88139e16581b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    },
    {
      id: "7",
      title: "POST 7",
      image:
        "https://images.unsplash.com/photo-1641621393945-881745ee9978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
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
