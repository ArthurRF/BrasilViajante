import { BigIntNullableFilter } from "../inputs/BigIntNullableFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class UserWhereInput {
    AND?: UserWhereInput[] | undefined;
    OR?: UserWhereInput[] | undefined;
    NOT?: UserWhereInput[] | undefined;
    id?: StringFilter | undefined;
    legal_registry_number?: StringNullableFilter | undefined;
    name?: StringFilter | undefined;
    email?: StringNullableFilter | undefined;
    password?: StringNullableFilter | undefined;
    phone?: StringNullableFilter | undefined;
    active?: BoolFilter | undefined;
    created_at?: DateTimeFilter | undefined;
    updated_at?: DateTimeFilter | undefined;
    has_social_login?: BoolFilter | undefined;
    facebook_id?: BigIntNullableFilter | undefined;
    google_id?: StringNullableFilter | undefined;
}
