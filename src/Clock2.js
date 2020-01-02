import React, { useState, useEffect } from 'react'

const Clock2 = (props) => {
    const [time, setTime] = useState(new Date())

    const changeTime = () => {
        setTime(new Date())
    }

    useEffect(() => {
        setInterval(() => {
            changeTime()
        }, 1000)
    })
    return (
        <div className="clock">
            <h1>Hello! This is a function component clock.</h1>
            <h2>It is {time.toLocaleTimeString()}.</h2>
      </div>
    )
}

export default Clock2