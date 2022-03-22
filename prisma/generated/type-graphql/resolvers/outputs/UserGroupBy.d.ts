import { UserAvgAggregate } from "../outputs/UserAvgAggregate";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";
import { UserSumAggregate } from "../outputs/UserSumAggregate";
export declare class UserGroupBy {
    id: string;
    legal_registry_number: string | null;
    name: string;
    email: string | null;
    password: string | null;
    phone: string | null;
    active: boolean;
    created_at: Date;
    updated_at: Date;
    has_social_login: boolean;
    facebook_id: bigint | null;
    google_id: string | null;
    _count: UserCountAggregate | null;
    _avg: UserAvgAggregate | null;
    _sum: UserSumAggregate | null;
    _min: UserMinAggregate | null;
    _max: UserMaxAggregate | null;
}
