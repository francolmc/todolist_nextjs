export default interface UserDTO {
    id: string | undefined;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
