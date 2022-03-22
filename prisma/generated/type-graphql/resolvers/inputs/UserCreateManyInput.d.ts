export declare class UserCreateManyInput {
    id?: string | undefined;
    legal_registry_number?: string | undefined;
    name: string;
    email?: string | undefined;
    password?: string | undefined;
    phone?: string | undefined;
    active?: boolean | undefined;
    created_at?: Date | undefined;
    updated_at?: Date | undefined;
    has_social_login?: boolean | undefined;
    facebook_id?: bigint | undefined;
    google_id?: string | undefined;
}
