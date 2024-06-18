import { object, string } from 'superstruct';


export const DomainUser = object({
    id    : string(),
    login : string(),
    avatar: string(),
});