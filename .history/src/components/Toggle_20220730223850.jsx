import { useState } from "react"

const Toggle = () => {
    const [on, setOn] = useState(false);

    return (
        <>
            <div className="toggle-center">
                <div className="toggle">
                    <div className="spinner"></div>
                </div>
                <div className="toggle-control">
                    <div className="toggle-on">On</div>
                    <div className="toggle-off">Off</div>
                </div>
            </div>
        </>
    )
}

export default Toggle
