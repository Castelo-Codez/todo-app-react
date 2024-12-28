import {idNumberType, removeTodo, toggleTodo} from "../features/todosSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";
import Trigger from "./Trigger";
export default function TodoItem({
    id,
    title,
    isCompleted,
}: {
    id: idNumberType;
    title: string;
    isCompleted: boolean;
}) {
    const dispatch: AppDispatch = useDispatch();
    function toggle() {
        dispatch(toggleTodo(id));
    }
    const classBasedOnIsCompletedStatus = isCompleted
        ? "text-l-Light-Grayish-Blue dark:text-d-Very-Dark-Grayish-Blue line-through"
        : " text-d-Very-Dark-Blue dark:text-l-Very-Light-Gray";
    return (
        <li
            role="listitem"
            aria-label={`${title} todo`}
            className=" grid grid-cols-[50px_1fr_50px] gap-x-3 px-3 py-4 bg-l-Very-Light-Gray dark:bg-d-Very-Dark-Desaturated-Blue group border-b border-b-d-Very-Dark-Grayish-Blue last:border-b-transparent"
        >
            <Trigger
                isChecked={isCompleted}
                runCustomTriggerFuc={toggle}
                id={id}
            />
            <span
                className={
                    `text-[1.3rem] capitalize` + classBasedOnIsCompletedStatus
                }
            >
                {title}
            </span>

            <button
                aria-label={`remove ${title} from list`}
                title={`remove ${title} from list`}
                className=" flex justify-center items-center"
                onClick={() => dispatch(removeTodo(id))}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path
                        fill="#494C6B"
                        fillRule="evenodd"
                        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
                    />
                </svg>
            </button>
        </li>
    );
}
