import * as categoryActions from "./category/asyncActions";
import * as orderActions from "./order/asyncActions";

export const rootActions = {
  ...categoryActions,
  ...orderActions,
};
