import TodoEntity from '@core/entities/todo.entity';

export default interface IRolRepository {
    create(todo: TodoEntity): Promise<TodoEntity>;
    update(id: number, todo: TodoEntity): Promise<TodoEntity>;
    delete(id: number): Promise<TodoEntity>;
    findByName(name: string): Promise<TodoEntity[]>;
    findById(id: number): Promise<TodoEntity>;
}
