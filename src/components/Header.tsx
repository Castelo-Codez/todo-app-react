import {useDispatch, useSelector} from "react-redux";
import {$changeTheme} from "../features/themeSlice";
import { RootState } from "../store/store";
export default function Header() {
    const isDark = useSelector((state: RootState) => state.theme.isDark);
    const dispatch = useDispatch();
    function $run() {
        dispatch($changeTheme());
        let $clickEffect = new Audio();
        $clickEffect.src = "/effects/mixkit-modern-technology-select-3124.wav";
        $clickEffect.play();
    }

    return (
        <header
            aria-label="header section"
            className=" w-full max-w-mainSecWidth px-3 absolute left-2/4 -translate-x-2/4 top-16 flex justify-between items-center"
        >
            <h1 className="text-[calc(1rem+2vw)] tracking-[calc(5px+2vw)] font-[800]    text-l-Very-Light-Gray uppercase ">
                Todo
            </h1>
            <button
                aria-label="theme switcher"
                role="button"
                type="button"
                onClick={() => $run()}
            >
                {isDark ? (
                    <svg
                        
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        id="moon-icon"
                    >
                        <path
                            fill="#FFF"
                            fillRule="evenodd"
                            d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                            height="26"
                            id="sun-icon"
                    >
                        <path
                            fill="#FFF"
                            fillRule="evenodd"
                            d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
                        />
                    </svg>
                )}
            </button>
        </header>
    );
}
