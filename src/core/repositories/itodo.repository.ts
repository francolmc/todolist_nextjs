import TodoEntity from '@core/entities/todo.entity';

export default interface ITodoRepository {
    create(todo: TodoEntity): Promise<TodoEntity | undefined>;
    update(id: string, todo: TodoEntity): Promise<TodoEntity>;
    delete(id: string): Promise<TodoEntity>;
    findByName(name: string, userId: string): Promise<TodoEntity[]>;
    findById(id: string): Promise<TodoEntity | null>;
    findAll(userId: string): Promise<TodoEntity[]>;
}
