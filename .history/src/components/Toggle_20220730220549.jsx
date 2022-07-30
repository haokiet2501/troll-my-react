import { useState } from "react"

const Toggle = () => {
    const [on, setOn] = useState(false)

    return (
        <div className="toggle" onClick={}>
            Nhấn dô nút này nè {on ? "On" : "Off"}
        </div>
    )
}

export default Toggle
