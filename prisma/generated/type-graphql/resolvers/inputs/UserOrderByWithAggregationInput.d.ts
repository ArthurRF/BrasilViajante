import { UserAvgOrderByAggregateInput } from "../inputs/UserAvgOrderByAggregateInput";
import { UserCountOrderByAggregateInput } from "../inputs/UserCountOrderByAggregateInput";
import { UserMaxOrderByAggregateInput } from "../inputs/UserMaxOrderByAggregateInput";
import { UserMinOrderByAggregateInput } from "../inputs/UserMinOrderByAggregateInput";
import { UserSumOrderByAggregateInput } from "../inputs/UserSumOrderByAggregateInput";
export declare class UserOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    legal_registry_number?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    email?: "asc" | "desc" | undefined;
    password?: "asc" | "desc" | undefined;
    phone?: "asc" | "desc" | undefined;
    active?: "asc" | "desc" | undefined;
    created_at?: "asc" | "desc" | undefined;
    updated_at?: "asc" | "desc" | undefined;
    has_social_login?: "asc" | "desc" | undefined;
    facebook_id?: "asc" | "desc" | undefined;
    google_id?: "asc" | "desc" | undefined;
    _count?: UserCountOrderByAggregateInput | undefined;
    _avg?: UserAvgOrderByAggregateInput | undefined;
    _max?: UserMaxOrderByAggregateInput | undefined;
    _min?: UserMinOrderByAggregateInput | undefined;
    _sum?: UserSumOrderByAggregateInput | undefined;
}
