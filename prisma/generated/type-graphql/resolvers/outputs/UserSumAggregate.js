"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GraphQLScalars = tslib_1.__importStar(require("graphql-scalars"));
let UserSumAggregate = class UserSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => GraphQLScalars.BigIntResolver, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], UserSumAggregate.prototype, "facebook_id", void 0);
UserSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserSumAggregate", {
        isAbstract: true
    })
], UserSumAggregate);
exports.UserSumAggregate = UserSumAggregate;
