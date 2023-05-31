import UserEntity from "@core/entities/user.entity";
import RecordNotFoundException from "@core/exceptions/record-not-found.exception";
import RequiredFieldException from "@core/exceptions/required-field.exception";
import IUserRepository from "@core/repositories/iuser.repository";

export default class UserService {
    constructor(private readonly _userRepository: IUserRepository) {}

    public async createUser(user: UserEntity): Promise<UserEntity> {
        if (!user.firstName) throw new RequiredFieldException('El campo "first_name" es requerido');
        if (!user.lastName) throw new RequiredFieldException('El campo "last_name" es requerido');
        if (!user.email) throw new RequiredFieldException('El campo "email" es requerido');
        if (!user.password) throw new RequiredFieldException('El campo "password" es requerido');

        return this._userRepository.create(user);
    }

    public async updateTodo(id: number, user: UserEntity): Promise<UserEntity> {
        if (!user.firstName) throw new RequiredFieldException('El campo "first_name" es requerido');
        if (!user.lastName) throw new RequiredFieldException('El campo "last_name" es requerido');
        if (!user.email) throw new RequiredFieldException('El campo "email" es requerido');

        const userFinded = await this._userRepository.findById(id);

        if (!userFinded) throw new RecordNotFoundException(`El usuario con id "${id}" no existe`);

        return this._userRepository.update(id, user)
    }

    public async deleteTodo(id: number): Promise<UserEntity> {
        const userFinded = await this._userRepository.findById(id);

        if (!userFinded) throw new RecordNotFoundException(`El usuario con id "${id}" no existe`);

        return this._userRepository.delete(id)
    }

    public async findUserById(id: number): Promise<UserEntity> {
        const userFinded = await this._userRepository.findById(id);

        if (!userFinded) throw new RecordNotFoundException(`El usuario con id "${id}" no existe.`);

        return userFinded;
    }

    public async findUserByEmail(email: string): Promise<UserEntity> {
        const userFinded = await this._userRepository.findByEmail(email);

        if (!userFinded) throw new RecordNotFoundException(`El usuario con email "${email}" no existe`);

        return userFinded;
    }
}