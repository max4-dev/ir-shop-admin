export interface IUpdateRequest {
  phone: string;
  password?: string;
  name?: string;
}

export enum Roles {
  ADMIN = "ADMIN",
}
