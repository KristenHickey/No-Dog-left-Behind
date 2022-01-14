export interface Dog {
  _id: string,
  name: string,
  breed: string,
  size: string,
  age: number,
  gender: string,
  exercise: string,
  imgs: string[],
  outdoorSpace: string,
  cats: Boolean,
  children: Boolean | string,
  maxAlone: number,
  onlyDog: boolean,
  smallAnimals: boolean,
  specialNeeds: string
}

export interface Adopter {
  _id: string,
  genderPref: string,
  agePref: string[],
  sizePref: string[],
  breedPref: string[],
  outdoorSpace: string,
  dogs: string,
  cats: string,
  smallAnimals: string,
  children: string,
  exercise: string,
  specialNeeds: string,
  maxAlone: string,
  firstName: string,
  lastName: string,
  phone: string
  email: string
  password: string
}

export interface IUserContext {
  userId: string | null;
  login: (newUser: string) => void;
}