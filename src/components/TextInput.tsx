import {ReactNode} from "react";

export default function TextInput({
    text,
    setNewText,
    children,
}: {
    text: string;
    setNewText: CallableFunction;
    children: ReactNode;
}) {
    return (
        <div
            aria-label="input container"
            className="input-container grid grid-cols-[50px_1fr] bg-l-Very-Light-Gray px-3 dark:bg-d-Very-Dark-Desaturated-Blue rounded-lg group"
        >
            {children}
            <input
                type="text"
                value={text}
                onChange={(e) => setNewText(e.target.value)}
                placeholder="Create a new todo.."
                className=" b block bg-transparent px-3 py-4 text-[0.98rem] sm:text-[1.3rem] focus-within:outline-none text-d-Very-Dark-Blue dark:text-l-Light-Grayish-Blue"
            />
        </div>
    );
}
