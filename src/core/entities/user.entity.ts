export default class UserEntity {
    constructor(
        id: string | undefined,
        firstName: string,
        lastName: string,
        email: string,
        password: string | null,
        createdAt: Date | undefined,
        updatedAt: Date | undefined
    ) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public id: string | undefined;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password?: string | null;
    public createdAt: Date | undefined;
    public updatedAt: Date | undefined;
}
