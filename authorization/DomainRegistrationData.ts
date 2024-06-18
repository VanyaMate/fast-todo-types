import { object, string } from 'superstruct';


export const DomainRegistrationData = object({
    login   : string(),
    password: string(),
});