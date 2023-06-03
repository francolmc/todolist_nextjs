import UserEntity from '@core/entities/user.entity';

export default interface IUserRepository {
    create(user: UserEntity): Promise<UserEntity>;
    update(id: number, user: UserEntity): Promise<UserEntity>;
    delete(id: number): Promise<UserEntity>;
    findById(id: number): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity>;
}
