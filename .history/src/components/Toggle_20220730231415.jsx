import { useState } from "react"
import Todo from "./Todo";

const Toggle = () => {
    const [on, setOn] = useState(false);

    const handleClick = () => {
        setOn((on) => !on);
    }

    return (
        <>
            {on && <Todo />}
            <div className="toggle-center" onClick={handleClick}>
                .tog
                <div className={`toggle ${on ? 'active' : ''}`}>
                    <div className={`spinner ${on ? 'active' : ''}`}></div>
                </div>
            </div>
        </>
    )
}

export default Toggle