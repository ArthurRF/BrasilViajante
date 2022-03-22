"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserUpdateInput_1 = require("../../../inputs/UserUpdateInput");
const UserWhereUniqueInput_1 = require("../../../inputs/UserWhereUniqueInput");
let UpdateUserArgs = class UpdateUserArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserUpdateInput_1.UserUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserUpdateInput_1.UserUpdateInput)
], UpdateUserArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereUniqueInput_1.UserWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserWhereUniqueInput_1.UserWhereUniqueInput)
], UpdateUserArgs.prototype, "where", void 0);
UpdateUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateUserArgs);
exports.UpdateUserArgs = UpdateUserArgs;
