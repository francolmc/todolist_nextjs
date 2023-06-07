import TodoService from '@core/services/todo.service';
import ChangeStatusDTO from '../dtos/change-status.dto';
import TodoDTO from '../dtos/todo.dto';

export default class ChangeStatusUseCase {
    constructor(private readonly _todoService: TodoService) {}

    public async execute(todo: ChangeStatusDTO): Promise<TodoDTO> {
        const todoFinded = await this._todoService.findTodoById(
            todo.id,
            todo.userId
        );
        todoFinded.completed = todo.completed;
        const todoUpdated = await this._todoService.updateTodo(
            todoFinded.id || '',
            todoFinded,
            todo.userId
        );

        return {
            id: todoUpdated.id,
            taskName: todoUpdated.taskName,
            completed: todoUpdated.completed,
            userId: todoUpdated.userId,
            createdAt: todoUpdated.createdAt,
            updatedAt: todoUpdated.updatedAt,
        };
    }
}
