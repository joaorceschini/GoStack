interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string; // O ponto de interrogação significa que o "nome" é opicional
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function createUser({name, email, password}: CreateUserData) {
  const user = {
    name, 
    email,
    password,
  }

  return user;
}