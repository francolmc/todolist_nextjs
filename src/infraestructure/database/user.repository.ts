import UserEntity from '@core/entities/user.entity';
import IUserRepository from '@core/repositories/iuser.repository';
import { Prisma } from '@prisma/client';
import { prisma } from './prisma';

export default class UserRepository implements IUserRepository {
    constructor() {}

    public update(id: string, user: UserEntity): Promise<UserEntity> {
        return prisma.user.update({
            where: { id },
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
            },
        });
    }

    public delete(id: string): Promise<UserEntity> {
        return prisma.user.delete({ where: { id } });
    }

    public findById(id: string): Promise<UserEntity | null> {
        return prisma.user.findUnique({ where: { id } });
    }

    public findByEmail(email: string): Promise<UserEntity | null> {
        return prisma.user.findUnique({ where: { email } });
    }

    public async create(user: UserEntity): Promise<UserEntity> {
        const userInput: Prisma.UserCreateInput = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password,
        };

        return prisma.user.create({ data: userInput });
    }
}
