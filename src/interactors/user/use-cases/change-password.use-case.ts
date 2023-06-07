import UserService from '@core/services/user.service';
import ChangePasswordDTO from '../dtos/change-password.dto';
import UserDTO from '../dtos/user.dto';

export default class ChangePasswordUseCase {
    constructor(private readonly _userService: UserService) {}

    public async execute(user: ChangePasswordDTO): Promise<UserDTO> {
        const userFinded = await this._userService.findUserByEmail(user.email);
        userFinded.password = user.password;
        const userUpdated = await this._userService.updateTodo(
            userFinded.id || '',
            userFinded
        );
        return {
            id: userUpdated.id,
            firstName: userUpdated.firstName,
            lastName: userUpdated.lastName,
            email: userFinded.email,
            createdAt: userFinded.createdAt,
            updatedAt: userFinded.updatedAt,
        };
    }
}
