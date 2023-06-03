import UserEntity from '@core/entities/user.entity';

export default interface IUserRepository {
    create(user: UserEntity): Promise<UserEntity>;
    update(id: string, user: UserEntity): Promise<UserEntity>;
    delete(id: string): Promise<UserEntity>;
    findById(id: string): Promise<UserEntity | null>;
    findByEmail(email: string): Promise<UserEntity | null>;
}
