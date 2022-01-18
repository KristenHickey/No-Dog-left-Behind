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
  cats: boolean,
  children: string,
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
  dogs: boolean,
  cats: boolean,
  smallAnimals: boolean,
  children: string,
  exercise: string,
  specialNeeds: boolean,
  maxAlone: number,
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  password: string,
  favouritesList?: string[],
  dontShow?: string[]
}

export interface IUserContext {
  userId: string | null;
  login: (newUser: string) => void;
  logout: () => void;
}