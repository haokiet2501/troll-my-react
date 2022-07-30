import { useState } from "react"

const Toggle = () => {
    const [on, setOn] = useState

    return (
        <div className="toggle">
            Nhấn dô nút này nè {on ? "On" : "Off"}
        </div>
    )
}

export default Toggle
