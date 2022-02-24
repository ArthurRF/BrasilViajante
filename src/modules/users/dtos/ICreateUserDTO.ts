interface ICreateUserDTO {
  name: string;
  legal_registry_number?: string;
  email?: string;
  password?: string;
  phone?: string;
  facebook_id?: number;
  google_id?: string;
}

export { ICreateUserDTO };