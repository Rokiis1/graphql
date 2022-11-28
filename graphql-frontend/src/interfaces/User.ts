import { GetUsersQuery } from "../graphql/generated";

export type User = GetUsersQuery["users"][0];
