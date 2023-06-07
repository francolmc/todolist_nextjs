import AddTodoDTO from '../dtos/add-todo.dto';
import ChangeStatusDTO from '../dtos/change-status.dto';
import FindByIDDTO from '../dtos/find-by-id.dto';
import FindByNameDTO from '../dtos/find-by-name.dto';
import TodoDTO from '../dtos/todo.dto';

export default interface TodoController {
    addTodo(todo: AddTodoDTO): Promise<TodoDTO>;
    changeStatusTodo(todo: ChangeStatusDTO): Promise<TodoDTO>;
    findTodoById(todo: FindByIDDTO): Promise<TodoDTO>;
    findTodoByName(todo: FindByNameDTO): Promise<TodoDTO[]>;
}
