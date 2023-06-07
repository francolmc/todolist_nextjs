import TodoEntity from '@core/entities/todo.entity';
import TodoService from '@core/services/todo.service';
import AddTodoDTO from '../dtos/add-todo.dto';
import TodoDTO from '../dtos/todo.dto';

export default class AddTodoUseCase {
    constructor(private readonly _todoService: TodoService) {}

    public async execute(todo: AddTodoDTO): Promise<TodoDTO> {
        const createdTodo = await this._todoService.createTodo(
            new TodoEntity(
                undefined,
                todo.taskName,
                todo.completed,
                todo.userId,
                undefined,
                undefined
            )
        );

        return {
            id: createdTodo?.id,
            taskName: createdTodo?.taskName || '',
            completed: createdTodo?.completed || false,
            userId: createdTodo?.userId || '',
            createdAt: createdTodo?.createdAt,
            updatedAt: createdTodo?.updatedAt,
        };
    }
}
