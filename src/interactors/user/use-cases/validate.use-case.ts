import UserService from '@core/services/user.service';
import ValidateDTO from '../dtos/validate.dto';

export default class ValidateUseCase {
    constructor(private readonly _userService: UserService) {}

    public async execute(validateUser: ValidateDTO): Promise<boolean> {
        const user = await this._userService.findUserByEmail(
            validateUser.email
        );

        return (
            user.password ===
            this._userService.encryptPassword(validateUser.password)
        );
    }
}
