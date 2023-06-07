import UserEntity from '@core/entities/user.entity';
import UserService from '@core/services/user.service';
import RegisterDTO from '../dtos/register.dto';
import UserDTO from '../dtos/user.dto';

export default class UserRegistrationUseCase {
    constructor(private readonly _userService: UserService) {}

    public async execute(user: RegisterDTO): Promise<UserDTO> {
        const userRegistered = await this._userService.createUser(
            new UserEntity(
                undefined,
                user.firstName,
                user.lastName,
                user.email,
                user.password,
                undefined,
                undefined
            )
        );

        return {
            id: userRegistered.id,
            firstName: userRegistered.firstName,
            lastName: userRegistered.lastName,
            email: userRegistered.email,
            createdAt: userRegistered.createdAt,
            updatedAt: userRegistered.updatedAt,
        };
    }
}
