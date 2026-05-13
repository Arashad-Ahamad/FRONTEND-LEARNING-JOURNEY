import { useState } from "react"
import "./ToggleSwitch.css"

function ToggleSwitch() {
    const [isOn, setIsOn] = useState(false)
    const handleClick = () => setIsOn(!isOn)
    const checkIsOn = isOn ? 'ON' : 'OFF'
    const toggleBgColor = { backgroundColor: isOn ? '#4caf50' : '#f44336' }

    return (
        <>
            <div className="toggle-switch" onClick={handleClick} style={toggleBgColor}>
                <div className={`switch ${isOn ? 'on' : 'off'} `}>
                    <span className="switch-state ">{checkIsOn}</span>

                </div>

            </div>
        </>
    )
}

export default ToggleSwitch