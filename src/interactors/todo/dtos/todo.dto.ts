export default interface TodoDTO {
    id: string | undefined;
    taskName: string;
    completed: boolean;
    userId: string;
    createdAt: Date | undefined;
    updatedAt: Date | undefined;
}
