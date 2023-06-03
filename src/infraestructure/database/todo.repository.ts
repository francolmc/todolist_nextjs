import TodoEntity from '@core/entities/todo.entity';
import ITodoRepository from '@core/repositories/itodo.repository';
import { Prisma } from '@prisma/client';
import { prisma } from './prisma';

export default class TodoRepository implements ITodoRepository {
    constructor() {}

    public async create(todo: TodoEntity): Promise<TodoEntity | undefined> {
        const todoInput: Prisma.TodoCreateInput = {
            taskName: todo.taskName,
            user: { connect: { id: todo.userId } },
        };

        return prisma.todo.create({
            data: todoInput,
        });
    }

    public async update(id: string, todo: TodoEntity): Promise<TodoEntity> {
        return prisma.todo.update({
            where: { id },
            data: {
                taskName: todo.taskName,
                completed: todo.completed,
            },
        });
    }

    public async delete(id: string): Promise<TodoEntity> {
        return prisma.todo.delete({ where: { id } });
    }

    public async findByName(
        name: string,
        userId: string
    ): Promise<TodoEntity[]> {
        return prisma.todo.findMany({
            where: { AND: [{ taskName: { contains: name } }, { userId }] },
        });
    }

    public async findById(id: string): Promise<TodoEntity | null> {
        return prisma.todo.findUnique({ where: { id } });
    }
}
