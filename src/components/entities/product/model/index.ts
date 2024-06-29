import { SortPayload } from "react-admin";
import { IProduct, ISort, SORT_ACTIONS } from "../types";

export const filterProductsByTitle = ({
  products,
  title,
}: {
  products: IProduct[];
  title: string;
}) => {
  if (!title) {
    return products;
  }
  return products.filter((product: { title: string }) => product.title.includes(title));
};

export const filterProductsByCategories = ({
  products,
  category,
}: {
  products: IProduct[];
  category: string;
}) => {
  if (!category) {
    return products;
  }
  return products.filter(
    (product: IProduct) =>
      product.categories &&
      product.categories.some((productCategory) => productCategory === category)
  );
};

export const sortProducts = ({ products, sort }: { products: IProduct[]; sort: SortPayload }) => {
  switch (sort.field) {
    case SORT_ACTIONS.id:
      return products.sort((a, b) => (Date.parse(a.updatedAt) < Date.parse(b.updatedAt) ? 1 : -1));

    case SORT_ACTIONS.title:
      return products.sort((a, b) => (a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1));

    case SORT_ACTIONS.salePercent:
      return products.sort((a, b) => (a.salePercent < b.salePercent ? 1 : -1));

    case SORT_ACTIONS.price:
      return products.sort((a, b) => (a.price < b.price ? 1 : -1));

    case SORT_ACTIONS.inStock:
      return products.sort((a, b) => (a.inStock < b.inStock ? 1 : -1));

    case SORT_ACTIONS.priceWithSale:
      return products.sort((a, b) => (a.priceWithSale < b.priceWithSale ? 1 : -1));

    default:
      return products;
  }
};
