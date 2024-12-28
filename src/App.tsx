import Background from "./components/BackgroundImage.tsx";
import Header from "./components/Header.js";
import Form from "./components/Form.js";
import TodosList from "./components/TodosList.tsx";
export default function App() {
    if (window.localStorage.getItem("theme")) {
        document.documentElement.classList.add(
            window.localStorage.getItem("theme") as string
        );
    }
    return (
        <>
            <Background />
            <Header />
            <Form />
            <TodosList />
        </>
    );
}
