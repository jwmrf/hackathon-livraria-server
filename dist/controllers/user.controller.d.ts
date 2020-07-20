import { TokenService, UserService } from '@loopback/authentication';
import { UserProfile } from '@loopback/security';
import { User } from '../models';
import { ClienteGeneroRepository, ClienteRepository, Credentials, GeneroRepository, LivrariaLivroRepository, LivrariaRepository, LivroGeneroRepository, LivroRepository, UserRepository } from '../repositories';
import { PasswordHasher } from '../services';
export declare class NewUserRequest extends User {
    password: string;
}
export declare class UserController {
    userRepository: UserRepository;
    generoRepository: GeneroRepository;
    clienteRepository: ClienteRepository;
    clienteGeneroRepository: ClienteGeneroRepository;
    livroGeneroRepository: LivroGeneroRepository;
    livroRepository: LivroRepository;
    livrariaLivroRepository: LivrariaLivroRepository;
    livrariaRepository: LivrariaRepository;
    passwordHasher: PasswordHasher;
    jwtService: TokenService;
    userService: UserService<User, Credentials>;
    constructor(userRepository: UserRepository, generoRepository: GeneroRepository, clienteRepository: ClienteRepository, clienteGeneroRepository: ClienteGeneroRepository, livroGeneroRepository: LivroGeneroRepository, livroRepository: LivroRepository, livrariaLivroRepository: LivrariaLivroRepository, livrariaRepository: LivrariaRepository, passwordHasher: PasswordHasher, jwtService: TokenService, userService: UserService<User, Credentials>);
    create(newUserRequest: Credentials): Promise<User>;
    findById(userId: string): Promise<User>;
    printCurrentUser(currentUserProfile: UserProfile): Promise<User>;
    login(credentials: Credentials): Promise<{
        token: string;
    }>;
    getAll(): Promise<any>;
    deleteById(id: string): Promise<void>;
    whastsapp(whatsapp: any): Promise<any>;
}
