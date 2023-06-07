import ChangePasswordDTO from '../dtos/change-password.dto';
import RegisterDTO from '../dtos/register.dto';
import UserDTO from '../dtos/user.dto';

export default interface UserController {
    register(user: RegisterDTO): Promise<UserDTO>;
    ChangePassword(user: ChangePasswordDTO): Promise<UserDTO>;
}
