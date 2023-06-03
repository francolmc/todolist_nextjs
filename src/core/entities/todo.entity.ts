export default class TodoEntity {
    constructor(
        id: number | undefined,
        taskName: string,
        completed: boolean,
        userId: number,
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

    public id: number | undefined;
    public taskName: string;
    public completed: boolean;
    public userId: number;
    public readonly createdAt: Date | undefined;
    public readonly updatedAt: Date | undefined;
}
