"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib_1 = require("tslib");
const tslib = tslib_1.__importStar(require("tslib"));
const crudResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = tslib_1.__importStar(require("./resolvers/crud/args.index"));
const actionResolvers = tslib_1.__importStar(require("./resolvers/crud/resolvers-actions.index"));
const models = tslib_1.__importStar(require("./models"));
const outputTypes = tslib_1.__importStar(require("./resolvers/outputs"));
const inputTypes = tslib_1.__importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver
};
const actionResolversMap = {
    User: {
        user: actionResolvers.FindUniqueUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        users: actionResolvers.FindManyUserResolver,
        createUser: actionResolvers.CreateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        deleteUser: actionResolvers.DeleteUserResolver,
        updateUser: actionResolvers.UpdateUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        upsertUser: actionResolvers.UpsertUserResolver,
        aggregateUser: actionResolvers.AggregateUserResolver,
        groupByUser: actionResolvers.GroupByUserResolver
    }
};
const crudResolversInfo = {
    User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const argsInfo = {
    FindUniqueUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    CreateUserArgs: ["data"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    DeleteUserArgs: ["where"],
    UpdateUserArgs: ["data", "where"],
    DeleteManyUserArgs: ["where"],
    UpdateManyUserArgs: ["data", "where"],
    UpsertUserArgs: ["where", "create", "update"],
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        if (resolverActionsConfig._all) {
            const allActionsDecorators = resolverActionsConfig._all;
            const resolverActionNames = crudResolversInfo[modelName];
            for (const resolverActionName of resolverActionNames) {
                const actionTarget = actionResolversConfig[resolverActionName].prototype;
                tslib.__decorate(allActionsDecorators, crudTarget, resolverActionName, null);
                tslib.__decorate(allActionsDecorators, actionTarget, resolverActionName, null);
            }
        }
        const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(it => it !== "_all");
        for (const resolverActionName of resolverActionsToApply) {
            const decorators = resolverActionsConfig[resolverActionName];
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        if (enhanceConfig.fields._all) {
            const allFieldsDecorators = enhanceConfig.fields._all;
            for (const typeFieldName of typeFieldNames) {
                tslib.__decorate(allFieldsDecorators, typePrototype, typeFieldName, void 0);
            }
        }
        const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(it => it !== "_all");
        for (const typeFieldName of configFieldsToApply) {
            const fieldDecorators = enhanceConfig.fields[typeFieldName];
            tslib.__decorate(fieldDecorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCountAggregate: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id", "_all"],
    UserAvgAggregate: ["facebook_id"],
    UserSumAggregate: ["facebook_id"],
    UserMinAggregate: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserMaxAggregate: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserOrderByWithRelationInput: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserWhereUniqueInput: ["id", "email"],
    UserOrderByWithAggregationInput: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserCreateInput: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserUpdateInput: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserCreateManyInput: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserUpdateManyMutationInput: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    BoolFilter: ["equals", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    BigIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    UserCountOrderByAggregateInput: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserAvgOrderByAggregateInput: ["facebook_id"],
    UserMaxOrderByAggregateInput: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserMinOrderByAggregateInput: ["id", "legal_registry_number", "name", "email", "password", "phone", "active", "created_at", "updated_at", "has_social_login", "facebook_id", "google_id"],
    UserSumOrderByAggregateInput: ["facebook_id"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    BigIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    BoolFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    NullableBigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedBoolFilter: ["equals", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBigIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBigIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
