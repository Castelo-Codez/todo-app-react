import {useState} from "react";
import TextInput from "./TextInput";
import Trigger from "./Trigger";
export default function Form() {
    const [todoText, setNewTodoText] = useState("");
    const [isChecked, setNewChecked] = useState(false);
    async function addTodo() {
        if (todoText) {
            setNewChecked(!isChecked);
        }
    }
    setTimeout(() => {
        setNewChecked(false);
    }, 250);
    return (
        <div
            aria-label="parent container"
            className="parent max-w-mainSecWidth w-full px-3 absolute left-2/4 -translate-x-2/4 top-44"
        >
            <form>
                <TextInput text={todoText} setNewText={setNewTodoText}>
                    <Trigger
                        runCustomTriggerFuc={addTodo}
                        isChecked={isChecked}
                    />
                </TextInput>
            </form>
        </div>
    );
}
