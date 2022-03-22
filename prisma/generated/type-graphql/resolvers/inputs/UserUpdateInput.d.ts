import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableBigIntFieldUpdateOperationsInput } from "../inputs/NullableBigIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class UserUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    legal_registry_number?: NullableStringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    email?: NullableStringFieldUpdateOperationsInput | undefined;
    password?: NullableStringFieldUpdateOperationsInput | undefined;
    phone?: NullableStringFieldUpdateOperationsInput | undefined;
    active?: BoolFieldUpdateOperationsInput | undefined;
    created_at?: DateTimeFieldUpdateOperationsInput | undefined;
    updated_at?: DateTimeFieldUpdateOperationsInput | undefined;
    has_social_login?: BoolFieldUpdateOperationsInput | undefined;
    facebook_id?: NullableBigIntFieldUpdateOperationsInput | undefined;
    google_id?: NullableStringFieldUpdateOperationsInput | undefined;
}
