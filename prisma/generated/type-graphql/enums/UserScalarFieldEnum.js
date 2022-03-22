"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var UserScalarFieldEnum;
(function (UserScalarFieldEnum) {
    UserScalarFieldEnum["id"] = "id";
    UserScalarFieldEnum["legal_registry_number"] = "legal_registry_number";
    UserScalarFieldEnum["name"] = "name";
    UserScalarFieldEnum["email"] = "email";
    UserScalarFieldEnum["password"] = "password";
    UserScalarFieldEnum["phone"] = "phone";
    UserScalarFieldEnum["active"] = "active";
    UserScalarFieldEnum["created_at"] = "created_at";
    UserScalarFieldEnum["updated_at"] = "updated_at";
    UserScalarFieldEnum["has_social_login"] = "has_social_login";
    UserScalarFieldEnum["facebook_id"] = "facebook_id";
    UserScalarFieldEnum["google_id"] = "google_id";
})(UserScalarFieldEnum = exports.UserScalarFieldEnum || (exports.UserScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
    name: "UserScalarFieldEnum",
    description: undefined,
});
