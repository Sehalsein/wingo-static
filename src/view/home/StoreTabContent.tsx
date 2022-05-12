import { DEFAULT_CURRENCY } from "@/src/constants/misc";
import { IApiStoreItem } from "@/src/types/api/customer";
import { renderCollection } from "@/src/utils/renderCollection";
import dynamic from "next/dynamic";

const StoreItemCard = dynamic(() => import("@/src/view/home/StoreItemCard"));

interface StoreTabContentProps {
  store: IApiStoreItem[];
  customerId: string;
}
const StoreTabContent: React.FC<StoreTabContentProps> = ({
  store = [],
  customerId,
}) => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
        {renderCollection(
          store,
          false,
          ({
            name,
            id,
            image,
            currency = DEFAULT_CURRENCY,
            price,
            productLink,
          }) => (
            <StoreItemCard
              key={id}
              name={name}
              id={id}
              image={image}
              currency={currency}
              price={price}
              userId={customerId}
              productLink={productLink}
            />
          ),
          () => {
            <span>Empty</span>;
          }
        )}
      </div>
    </>
  );
};

export default StoreTabContent;
