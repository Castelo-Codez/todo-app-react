import {useState} from "react";
import TextInput from "./TextInput";
import Trigger from "./Trigger";
import {addTodo} from "../features/todosSlice";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store/store";

export default function Form() {
    const [todoText, setNewTodoText] = useState("");
    const [isChecked, setNewChecked] = useState(false);
    const dispatch: AppDispatch = useDispatch();
    async function $addTodo() {
        if (todoText) {
            setNewChecked(!isChecked);
            dispatch(addTodo(todoText));
            setNewTodoText("");
        }
    }
    setTimeout(() => {
        setNewChecked(false);
    },150);
    return (
        <div
            aria-label="parent container"
            className="parent max-w-mainSecWidth  w-full px-3 absolute left-2/4 -translate-x-2/4 top-44"
        >
            <form>
                <TextInput text={todoText} setNewText={setNewTodoText}>
                    <Trigger
                        runCustomTriggerFuc={$addTodo}
                        isChecked={isChecked}
                    />
                </TextInput>
            </form>
        </div>
    );
}
