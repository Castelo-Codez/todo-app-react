import {useSelector} from "react-redux";
import { RootState } from "../store/store";
export default function BackgroundImage() {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    return (
        <>
            {isDark ? (
                <section key={"dark"}>
                    <div className="image-desktop-Container hidden sm:block">
                        <img
                            src="/images/bg-desktop-dark.jpg"
                            alt="bg-desktop-dark"
                            className=" max-w-none w-full"
                        />
                    </div>
                    <div className="image-mobile-Container sm:hidden">
                        <img
                            src="/images/bg-mobile-dark.jpg"
                            alt="bg-mobile-dark"
                            className=" max-w-none w-full"
                        />
                    </div>
                </section>
            ) : (
                <section key={"light"}>
                    <div className="image-desktop-Container hidden sm:block">
                        <img
                            src="/images/bg-desktop-light.jpg"
                            alt="bg-desktop-light"
                            className=" max-w-none w-full"
                        />
                    </div>
                    <div className="image-mobile-Container sm:hidden">
                        <img
                            src="/images/bg-mobile-light.jpg"
                            alt="bg-mobile-light"
                            className=" max-w-none w-full"
                        />
                    </div>
                </section>
            )}
        </>
    );
}
