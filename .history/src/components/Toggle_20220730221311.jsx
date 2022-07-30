import { useState } from "react"

const Toggle = () => {
    const [on, setOn] = useState(false);
    console.log(on);

    return (
        <div className="toggle-center">
            <div className="toggle" on>
                Toggle {on ? "On" : "Off"}
            </div>
        </div>
    )
}

export default Toggle
