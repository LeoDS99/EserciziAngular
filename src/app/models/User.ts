export type Role = 'staff' | 'student' | 'manager' | 'admin';

export type Gender = 'male' | 'female' | 'other';

export interface Address {
  city: string;
  street: string;
  postalCode: string;
}
export interface Companies {
  id: number;
  name: string;
  description: string;
  location: Address;
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
  profilPhotoUrl: string;
  companies: Companies[];
  gender: Gender;
}
