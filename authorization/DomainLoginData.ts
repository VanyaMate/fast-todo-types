import { object, string } from 'superstruct';


export const DomainLoginData = object({
    login   : string(),
    password: string(),
});