import { IApiStoreItem } from "@/src/types/api/customer";
import { Disclosure, Transition } from "@headlessui/react";
import dynamic from "next/dynamic";

const StoreItemCard = dynamic(() => import("@/src/view/home/StoreItemCard"));

interface LinkTabContentProps {
  links: {
    [key: string]: IApiStoreItem[];
  };
  customerId: string;
}
const LinkTabContent: React.FC<LinkTabContentProps> = ({
  links = {},
  customerId,
}) => {
  return (
    <>
      {Object.keys(links).map((link) => {
        return (
          <Disclosure as="div" className="mt-2" key={link}>
            {({ open }) => (
              <>
                <Disclosure.Button
                  className={`flex h-16 w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-orange-900 ${
                    !open
                      ? "bg-orange-100 hover:bg-orange-200 focus-visible:ring-orange-500"
                      : ""
                  } rounded-lg focus:outline-none focus-visible:ring  focus-visible:ring-opacity-75`}
                >
                  <span className="text-xl font-semibold">{link}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-6 w-6 text-orange-500`}
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
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
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
                      {links[link].map(
                        ({ name, id, image, currency, price, productLink }) => (
                          <StoreItemCard
                            key={id}
                            name={name}
                            id={id}
                            image={image}
                            currency={currency || "USD"}
                            price={price}
                            userId={customerId}
                            productLink={productLink}
                          />
                        )
                      )}
                    </div>
                  </Transition>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        );
      })}
    </>
  );
};

export default LinkTabContent;
