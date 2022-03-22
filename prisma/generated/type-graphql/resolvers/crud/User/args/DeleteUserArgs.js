"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let DeleteUserArgs = class DeleteUserArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], DeleteUserArgs.prototype, "where", void 0);
DeleteUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteUserArgs);
exports.DeleteUserArgs = DeleteUserArgs;
