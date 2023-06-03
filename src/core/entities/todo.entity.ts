export default class TodoEntity {
    constructor(
        id: string | undefined,
        taskName: string,
        completed: boolean,
        userId: string,
        createdAt: Date | undefined,
        updatedAt: Date | undefined
    ) {
        this.id = id;
        this.taskName = taskName;
        this.completed = completed;
        this.userId = userId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public id: string | undefined;
    public taskName: string;
    public completed: boolean;
    public userId: string;
    public readonly createdAt: Date | undefined;
    public readonly updatedAt: Date | undefined;
}
