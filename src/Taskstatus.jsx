import { useState } from 'react';
export function Taskstatus() {
    const [completed, setCompleted] = useState(75);
    return (
        <>
            <div className="flex justify-between ">
                <div className="pie-container">
                    <div className="margin-bottom-12 pie " style={{ '--percent': completed }}>
                        <div className="pie-value">{completed}%</div>
                    </div>

                    <p>Completed</p>
                </div>
                <div className="pie-container">
                    <div className="margin-bottom-12 pie incompleted" style={{ '--percent': completed }}>
                        <div className="pie-value">{completed}%</div>
                    </div>

                    <p>In completed</p>
                </div>
                <div className="pie-container">
                    <div className="margin-bottom-12 pie totaltask" style={{ '--percent': completed }}>
                        <div className="pie-value">{completed}%</div>
                    </div>
                    <p>Total Task</p>
                </div>
            </div>
        </>
    )
}