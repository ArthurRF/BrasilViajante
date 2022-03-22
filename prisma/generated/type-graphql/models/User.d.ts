export declare class User {
    id: string;
    legal_registry_number?: string | null;
    name: string;
    email?: string | null;
    password?: string | null;
    phone?: string | null;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    has_social_login: boolean;
    facebook_id?: bigint | null;
    google_id?: string | null;
}
