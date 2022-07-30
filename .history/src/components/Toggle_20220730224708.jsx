import { useState } from "react"

const Toggle = () => {
    const [on, setOn] = useState(false);

    return (
        <>
            <div className="toggle-center">
                <div className=`toggle ${on ? 'active' : ''}`>
                    <div className="spinner"></div>
                </div>
                <div className="toggle-control">
                    <div className="toggle-on" onClick={() => setOn(true)}>On</div>
                    <div className="toggle-off" onClick={() => setOn(false)}>Off</div>
                </div>
            </div>
        </>
    )
}

export default Toggle
