import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'jrvceschini@gmail.com',
    password: "1234",
    techs: [
      'Nodejs', 
      'Reactjs',
      { title: 'Javascript', experience: 100 },
      { title: 'Typescript', experience: 100 }
    ],
  })

  return response.json({ message: 'Hello World' });
}