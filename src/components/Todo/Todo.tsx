import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { delTodo, updateTodo } from '../../slices/todoListSlice';
import { TodoType } from '../../slices/todoListSlice'
import { useTodoListStore } from '../../hooks/useTodoListStore';

export type TodoProps = {
    todo: TodoType;
};

export const Todo: FC<TodoProps> = ({ todo }) => {
    const { delTodo, updateTodo } = useTodoListStore();

    const onDelete = () => {
        delTodo(todo.id);
    }
    const onUpdate = () => {
        updateTodo({ id: todo.id, message: '変更！！！' });
    }
    return (
        <li>
            <div>{todo.message}</div>
            <button onClick={onUpdate}>更新</button>
            <button onClick={onDelete}>削除</button>
        </li>
    )
}
