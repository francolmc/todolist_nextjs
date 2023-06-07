import TodoService from '@core/services/todo.service';
import FindByNameDTO from '../dtos/find-by-name.dto';
import TodoDTO from '../dtos/todo.dto';

export default class FindTodoByNameUseCase {
    constructor(private readonly _todoService: TodoService) {}

    public async execute(todo: FindByNameDTO): Promise<TodoDTO[]> {
        return this._todoService.findTodoByName(todo.taskName, todo.userId);
    }
}
