"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const DeleteUserArgs_1 = require("./args/DeleteUserArgs");
const User_1 = require("../../../models/User");
const helpers_1 = require("../../../helpers");
let DeleteUserResolver = class DeleteUserResolver {
    async deleteUser(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).user.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => User_1.User, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, DeleteUserArgs_1.DeleteUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], DeleteUserResolver.prototype, "deleteUser", null);
DeleteUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], DeleteUserResolver);
exports.DeleteUserResolver = DeleteUserResolver;
