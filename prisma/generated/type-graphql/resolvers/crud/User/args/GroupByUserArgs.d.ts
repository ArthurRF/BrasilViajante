import { UserOrderByWithAggregationInput } from "../../../inputs/UserOrderByWithAggregationInput";
import { UserScalarWhereWithAggregatesInput } from "../../../inputs/UserScalarWhereWithAggregatesInput";
import { UserWhereInput } from "../../../inputs/UserWhereInput";
export declare class GroupByUserArgs {
    where?: UserWhereInput | undefined;
    orderBy?: UserOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "legal_registry_number" | "name" | "email" | "password" | "phone" | "active" | "created_at" | "updated_at" | "has_social_login" | "facebook_id" | "google_id">;
    having?: UserScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
