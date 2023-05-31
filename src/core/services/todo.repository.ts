import TodoEntity from '@core/entities/todo.entity';
import ExistingRecordException from '@core/exceptions/existing-record.exception';
import RecordCannotBeDeletedException from '@core/exceptions/record-not-be-deleted.exception';
import RecordNotFoundException from '@core/exceptions/record-not-found.exception';
import RequiredFieldException from '@core/exceptions/required-field.exception';
import ITodoRepository from '@core/repositories/itodo.repository';

export default class TodoService {
    constructor(private readonly _todoRepository: ITodoRepository) {}

    public async createTodo(todo: TodoEntity): Promise<TodoEntity> {
        if (!todo.taskName)
            throw new RequiredFieldException(
                'El campo "task_name" es requerido'
            );

        return this._todoRepository.create(todo);
    }

    public async updateTodo(id: number, todo: TodoEntity): Promise<TodoEntity> {
        if (!todo.taskName) throw new RequiredFieldException('El campo "task_name" es requerido');

        const findedTodo = await this._todoRepository.findById(id);

        if (findedTodo) {
            throw new ExistingRecordException(
                `La tarea con id "${id}" ya existe.`
            );
        }

        return this._todoRepository.update(id, todo);
    }

    public async deleteTodo(id: number): Promise<TodoEntity> {
        const findedTodo = await this._todoRepository.findById(id);

        if (!findedTodo) {
            throw new RecordCannotBeDeletedException(
                `El registro con id "${id}" no existe.`
            );
        }

        return this._todoRepository.delete(id);
    }

    public async findTodoById(id: number): Promise<TodoEntity> {
        const findedTodo = await this._todoRepository.findById(id);

        if (!findedTodo) {
            throw new RecordNotFoundException(
                `El registro con id "${id}" no existe.`
            );
        }

        return findedTodo;
    }

    public async findTodoByName(name: string): Promise<TodoEntity[]> {
        const findedTodo = await this._todoRepository.findByName(name);

        if (!findedTodo) {
            throw new RecordNotFoundException(
                `No existen registro que contengan el nombre ${name}.`
            );
        }

        return findedTodo;
    }
}