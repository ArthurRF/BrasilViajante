import { BigIntNullableWithAggregatesFilter } from "../inputs/BigIntNullableWithAggregatesFilter";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    legal_registry_number?: StringNullableWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    email?: StringNullableWithAggregatesFilter | undefined;
    password?: StringNullableWithAggregatesFilter | undefined;
    phone?: StringNullableWithAggregatesFilter | undefined;
    active?: BoolWithAggregatesFilter | undefined;
    created_at?: DateTimeWithAggregatesFilter | undefined;
    updated_at?: DateTimeWithAggregatesFilter | undefined;
    has_social_login?: BoolWithAggregatesFilter | undefined;
    facebook_id?: BigIntNullableWithAggregatesFilter | undefined;
    google_id?: StringNullableWithAggregatesFilter | undefined;
}
