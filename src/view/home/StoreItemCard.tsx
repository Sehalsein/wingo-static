import React from "react";
import NextLink from "next/link";
import NextImage from "next/image";

type StoreItemCardProps = {
  id: string;
  name: string;
  price: string;
  image: string;
  currency: string;
  userId: string;
};

const StoreItemCard: React.FC<StoreItemCardProps> = ({
  name,
  id,
  image,
  currency,
  price,
  userId,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <NextLink href={`/${userId}/${id}`}>
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
            alt={name}
            src={image}
            className="object-cover object-center h-64 w-full overflow-hidden rounded-md"
            layout="fill"
          />
        </div>
      </NextLink>
      <div className="flex flex-col">
        <span className="text-lg">{name}</span>
        <span className="font-bold">
          {currency}
          {price}
        </span>
      </div>
    </div>
  );
};

export default StoreItemCard;
