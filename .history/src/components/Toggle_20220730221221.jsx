import { useState } from "react"

const Toggle = () => {
    const [on, setOn] = useState(false);
    console.log(on);

    return (
        <div >
            Nhấn dô nút này nè {on ? "On" : "Off"}
        </div>
    )
}

export default Toggle
