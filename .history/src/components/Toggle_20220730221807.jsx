import { useState } from "react"

const Toggle = () => {
    const [on, setOn] = useState(false);

    return (
        <div className="toggle-center">
            <div className="toggle" onClick={() => setOn(true)}>
                
            </div>
        </div>
    )
}

export default Toggle
