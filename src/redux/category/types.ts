import { IData } from "../../providers/types";

export interface ICategory extends IData {
  id: string;
  name: string;
  parent: string;
}

export interface ICategoryInitialState {
  categories: ICategory[] | null;
  isLoading: boolean;
}
