# react-window-open 👋
A customizable component that opens a new window using the window.open API

## Installation
`npm i react-window-open`

## Demo 👀
[https://axelmy-projects-showcase.firebaseapp.com/react-weekdays-input](https://axelmy-projects-showcase.firebaseapp.com/react-weekdays-input)

## Usage 💻

```javascript
import React, { useState } from 'react'
import { NewWindow } from 'react-window-open'

const Example = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [counter, setCounter] = useState(0)

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? 'Open' : 'Close'}</button>

            {isOpen && <NewWindow onClose={() => setIsOpen(false)}>
                <p>This text is displayed in a new window. 👀</p>
                <p>And all the states are shared ! 👌</p>
                <p>Counter in the new window : {counter}</p>
                <button onClick={() => setCounter(counter+1)}>Increment from the new window</button>
            </NewWindow>}

            <p>Counter on the original page : {counter}</p>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
        </>
    )
}

export default Example
```

## API ✔

| Properties | type | default | description |
|--|--|--|--|
| top | int | 0 | The bottom offset of the window |
| bottom | int | 0 | The top offset of the window |
| left | int | 0 | The left offset of the window |
| right | int | 0 | The right offset of the window |
| width | int | 0 | The width of the window |
| height | int | 0 | The height of the window |
| title | string | 0 | The title of the new window |
| onClose | func |  | A callback function called whenever the window is closed |
