import { Credentials, UserRepository } from '../repositories';
import { User } from '../models';
import { UserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { PasswordHasher } from './hash-password.service';
export declare class MyUserService implements UserService<User, Credentials> {
    userRepository: UserRepository;
    passwordHasher: PasswordHasher;
    constructor(userRepository: UserRepository, passwordHasher: PasswordHasher);
    verifyCredentials(credentials: Credentials): Promise<User>;
    convertToUserProfile(user: User): UserProfile;
}
