import { Entity } from '@loopback/repository';
import { UserCredentials } from './user-credentials.model';
export declare class User extends Entity {
    id: string;
    win_stop: string;
    loss_stop: string;
    email: string;
    role: string;
    userCredentials: UserCredentials;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
