import {useSelector} from "react-redux";
import {filterTodos, TodoType} from "../features/todosSlice";
import TodoItem from "./TodoItem";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import {clearCompleted, updateFilter} from "../features/todosSlice";
export default function TodosList() {
    const todos = useSelector(filterTodos);
    const dispatch: AppDispatch = useDispatch();
    return (
        <ul
            role="listitems"
            aria-label="todos list"
            className=" absolute w-full max-w-mainSecWidth px-3 left-2/4 top-[17rem] -translate-x-2/4"
        >
            {todos?.map((todo: TodoType) => {
                return <TodoItem key={todo.id} {...todo} />;
            })}
            {
                <li
                    aria-label="info about todos list and filter buttons"
                    className=" relative grid justify-between items-center grid-cols-[auto_auto] md:grid-cols-[auto_1fr_auto] md:gap-x-3 capitalize text-l-Light-Grayish-Blue dark:text-d-Very-Dark-Grayish-Blue text-[0.98rem] sm:text-[1rem] px-7 py-4  bg-l-Very-Light-Gray dark:bg-d-Very-Dark-Desaturated-Blue group border-b-d-Very-Dark-Grayish-Blue"
                >
                    <span aria-label="todos length">
                        {todos && todos.length} items
                    </span>
                    <ul
                        aria-label="filters buttons list"
                        className=" absolute md:static w-full -bottom-14  left-0 p-3 md:p-0 bg-l-Very-Light-Gray dark:bg-d-Very-Dark-Desaturated-Blue flex justify-center items-center gap-x-4 "
                    >
                        <li aria-label="all todos holder">
                            <button
                                aria-label="show all todos"
                                className="hover:text-l-Dark-Grayish-Blue dark:hover:text-d-Light-Grayish-Blue-hover"
                                onClick={() => dispatch(updateFilter("all"))}
                            >
                                All
                            </button>
                        </li>
                        <li aria-label="active todos holder">
                            <button
                                aria-label="show active todos"
                                className="hover:text-l-Dark-Grayish-Blue dark:hover:text-d-Light-Grayish-Blue-hover"
                                onClick={() => dispatch(updateFilter("active"))}
                            >
                                Active
                            </button>
                        </li>
                        <li aria-label="completed todos holder">
                            <button
                                aria-label="show completed todos"
                                className="hover:text-l-Dark-Grayish-Blue dark:hover:text-d-Light-Grayish-Blue-hover"
                                onClick={() =>
                                    dispatch(updateFilter("completed"))
                                }
                            >
                                Completed
                            </button>
                        </li>
                    </ul>
                    <button
                        aria-label="clear completed todos"
                        onClick={() => dispatch(clearCompleted())}
                        className="    hover:text-l-Dark-Grayish-Blue dark:hover:text-d-Light-Grayish-Blue-hover"
                    >
                        Clear Completed
                    </button>
                </li>
            }
        </ul>
    );
}
