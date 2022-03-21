export enum Role {
  STAFF,
  STUDENT,
  MANAGER,
  ADMIN,
}

export enum Gender {
  MALE,
  FEMALE,
  OTHER,
}

export interface Address {
  city: string;
  street: string;
  postalCode: string;
}

export interface Person {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
  role: Role;
  username: string;
  profilePhotoUrl: string;
  gender: Gender;
}
