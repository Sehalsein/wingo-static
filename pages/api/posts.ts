import type { NextApiRequest, NextApiResponse } from "next";

export type IApiPost = {
  id: string;
  title: string;
  price: string;
  currency: string;
  image: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IApiPost[]>
) {
  res.status(200).json([
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
  ]);
}
