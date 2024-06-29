import { useEffect } from "react";
import { Card, CardContent } from "@mui/material";
import { FilterList, FilterListItem } from "react-admin";
import CategoryIcon from "@mui/icons-material/LocalOffer";

import { useActions } from "../../../../hooks/useActions";
import { useAppSelector } from "../../../../redux/store";

import styles from "./FilterList.module.scss";

export const ProductFilter = ({ className }: { className: string }) => {
  const { getGategories } = useActions();
  const { categories } = useAppSelector((state) => state.category);

  useEffect(() => {
    const fetchCategories = async () => {
      getGategories();
    };

    fetchCategories();
  }, [getGategories]);

  const buildSecondLevel = (parentSlug: string) =>
    categories &&
    categories.map((category) => {
      if (parentSlug !== category.parent) {
        return null;
      }

      return (
        <FilterListItem
          key={category.id}
          label={category.name}
          value={{ category: category.name }}
        ></FilterListItem>
      );
    });

  const buildFirstLevel = () =>
    categories &&
    categories.map((category) => {
      if (category.parent) {
        return null;
      }
      return (
        <div className={styles.firstLevel} key={category.id}>
          <span className={styles.firstTitle}>{category.name}</span>
          {buildSecondLevel(category.slug)}
        </div>
      );
    });

  if (!categories) {
    return <div>loading</div>;
  }

  return (
    <Card>
      <CardContent className={className}>
        <FilterList label="Категории" icon={<CategoryIcon />}>
          {buildFirstLevel()}
        </FilterList>
      </CardContent>
    </Card>
  );
};
