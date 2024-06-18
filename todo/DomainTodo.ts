import { enums, object, string } from 'superstruct';


export const DomainTodo = object({
    id         : string(),
    title      : string(),
    description: string(),
    createdDate: string(),
    updatedDate: string(),
    status     : enums([ 'done', 'inProgress', 'waiting' ]),
});