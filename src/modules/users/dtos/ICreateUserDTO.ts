interface ICreateUserDTO {
  name: string;
  legal_registry_number?: string;
  email?: string;
  password: string;
  phone?: string;
}

export { ICreateUserDTO };