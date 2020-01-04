import React from 'react'
import './Clock.scss'
import ClockUsingClass from './ClockUsingClass'
import ClockUsingHooks from './ClockUsingHooks'

const App = () => {
    return (
        <div className="clock-app">
            {/* <ClockUsingClass /> */}
            <ClockUsingHooks />
        </div>
    )
}

export default App
