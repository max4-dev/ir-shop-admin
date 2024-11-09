import { useEffect, useState } from "react";
import { useGetList } from "react-admin";

import { defaultDataValues, formatDataOne } from "../helpers/formatDataOne";

export const useParentCategories = () => {
  const [formattedParentCategories, setFormattedCategories] = useState<unknown[]>([]);
  const { data } = useGetList("category");

  useEffect(() => {
    const formatted = data
      ? data
          .map((category) => {
            if (category.parent) {
              return null;
            }
            return formatDataOne(category, ...defaultDataValues);
          })
          .filter(Boolean)
      : [];
    setFormattedCategories(formatted);
  }, [data]);

  return { formattedParentCategories };
};
