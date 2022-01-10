import type { NextApiRequest, NextApiResponse } from "next";

export type IApiPost = {
  id: string;
  title: string;
  image: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IApiPost[]>
) {
  res.status(200).json([
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
  ]);
}
