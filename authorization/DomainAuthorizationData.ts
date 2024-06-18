import { array, object } from 'superstruct';
import { DomainUser } from '../user/DomainUser';
import { DomainTodo } from '../todo/DomainTodo';


export const DomainAuthorizationData = object({
    user : DomainUser,
    todos: array(DomainTodo),
});