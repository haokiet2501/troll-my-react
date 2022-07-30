import { useState } from "react"

const Toggle = () => {
    const [on, setOn] = useState(false);

    const handleClick = () => {
        setOn
    }

    return (
        <>
            <div className="toggle-center" onClick={handleClick}>
                <div className={`toggle ${on ? 'active' : ''}`}>
                    <div className={`spinner ${on ? 'active' : ''}`}></div>
                </div>
                {/* <div className="toggle-control">
                    <div className="toggle-on" onClick={() => setOn(true)}>On</div>
                    <div className="toggle-off" onClick={() => setOn(false)}>Off</div>
                </div> */}
            </div>
        </>
    )
}

export default Toggle
