import { UserOrderByWithRelationInput } from "../../../inputs/UserOrderByWithRelationInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../../../inputs/UserWhereUniqueInput";
export declare class FindManyUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithRelationInput[] | undefined;
    cursor?: UserWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "legal_registry_number" | "name" | "email" | "password" | "phone" | "active" | "created_at" | "updated_at" | "has_social_login" | "facebook_id" | "google_id"> | undefined;
}
