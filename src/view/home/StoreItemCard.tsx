import NextImage from "next/image";
import NextLink from "next/link";
import React from "react";

type StoreItemCardProps = {
  id: string;
  name: string;
  price?: number;
  image?: string;
  currency: string;
  userId: string;
  productLink?: string;
};

const StoreItemCard: React.FC<StoreItemCardProps> = ({
  name,
  id,
  image,
  currency,
  price = 0,
  userId,
  productLink = "",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <NextLink href={`${productLink}`}>
        <div className="relative h-56 cursor-pointer overflow-hidden rounded-md bg-slate-300">
          {productLink && (
            <NextLink href={productLink}>
              <div className="absolute right-2 top-2 z-10 rounded-full bg-black/30 p-1 backdrop-blur-sm">
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
            </NextLink>
          )}
          {image && (
            <NextImage
              alt={name}
              src={image}
              className="h-64 w-full overflow-hidden rounded-md object-cover object-center"
              layout="fill"
            />
          )}
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
