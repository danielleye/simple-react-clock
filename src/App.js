import React from 'react'
import './Clock.scss'
import Clock1 from './Clock1'
import Clock2 from './Clock2'

const App = () => {
    return (
        <div className="clock-app">
            <Clock1 />
            {/* <Clock2 /> */}
        </div>
    )
}

export default App