import {nanoid} from "nanoid";

export default function Trigger({
    isChecked = false,
    runCustomTriggerFuc,
}: {
    isChecked: boolean;
    runCustomTriggerFuc: CallableFunction;
}) {
    const generatedId = nanoid();
    return (
        <>
            <input
                type="checkbox"
                role="checkbox"
                id={generatedId}
                aria-label="trigger checkbox"
                onChange={(e) => runCustomTriggerFuc(e)}
                className="hidden"
            />
            <label
                htmlFor={generatedId}
                className=" flex justify-center items-center cursor-pointer"
            >
                <div
                    aria-hidden="true"
                    className={`pattern relative w-6 h-6  bg-l-Light-Grayish-Blue dark:bg-d-Very-Dark-Desaturated-Grayish-Blue  group-hover:bg-gradient-to-br group-hover:from-sky-300 group-hover:to-purple-400 ${
                        isChecked &&
                        "bg-gradient-to-br w-6 h-6  from-sky-300 to-purple-400"
                    } p-[1.5px] rounded-full flex justify-center items-center`}
                >
                    <div
                        className={`w-5 h-5 rounded-full flex justify-center items-center bg-l-Very-Light-Gray dark:bg-d-Very-Dark-Desaturated-Blue ${
                            isChecked &&
                            "bg-gradient-to-br w-6 h-6  from-sky-300 to-purple-400"
                        }`}
                    >
                        {isChecked && (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="9"
                            >
                                <path
                                    fill="none"
                                    stroke="#FFF"
                                    strokeWidth="2"
                                    d="M1 4.304L3.696 7l6-6"
                                />
                            </svg>
                        )}
                    </div>
                </div>
            </label>
        </>
    );
}
