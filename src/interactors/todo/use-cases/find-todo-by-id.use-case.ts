import TodoService from '@core/services/todo.service';
import FindByIDDTO from '../dtos/find-by-id.dto';
import TodoDTO from '../dtos/todo.dto';

export default class FindTodoByIdUseCase {
    constructor(private readonly _tpdoService: TodoService) {}

    public async execute(todo: FindByIDDTO): Promise<TodoDTO> {
        return this._tpdoService.findTodoById(todo.id, todo.userId);
    }
}
