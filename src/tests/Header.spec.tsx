import {test, expect} from "vitest";
import {render} from "vitest-browser-react";
import Header from "../components/Header.js";
import {Provider} from "react-redux";
import {store} from "../store/store.js";

test("testing Header component", async () => {
    const {getByRole, getByText} = render(
        <Provider store={store}>
            <Header />
        </Provider>
    );
    let button = getByRole("button"); //@ts-expect-error
    await expect.element(getByText("Todo")).toBeInTheDocument(); //@ts-expect-error
    await expect.element(button).toBeInTheDocument();
    await button.click();
    //@ts-expect-error
    expect(button.elements("svg").length).toBe(1);
});
