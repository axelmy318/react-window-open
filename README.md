# Days of the week input
## Description
A customizable component that opens a new window using the window.open API

## Installation
`npm i @axelmy/react-window-open`

## Usage

```javascript
import React, { useState } from 'react'
import { NewWindow } from '@axelmy/react-window-open'

const Example = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [counter, setCounter] = useState(0)

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? 'Open' : 'Close'}</button>

            {isOpen && <NewWindow>
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

## API

| Properties | type | default | description |
|--|--|--|--|
| value | string/array(int) | "0000000" | A string or an array of 7 integers representing the active days of the week. 0 being inactive, 1 being active. |
| showChars | int | null | The numbers of chars to show for the days names. Ex: Monday=Mo. null will display the entire word |
| onChange | function | | The function that will be called when the user clicks on a day |
| days | array | ['monday','tuesday','wednesday'... | The array defining the name of the days |
| activeDayStyle | string |  | The CSS styling to apply to active days |
| inactiveDayStyle | string |  | The CSS styling to apply to inactive days |
| inputStyle | object |  | The CSS styling of the whole input |
| dayStyle | object |  | The CSS styling used for each days |
| forcedState | object |  | Force certain days to be active or inactive. See examples above |
| textCase | string | null | Defines the case of the text. Available: firstToUpper (Monday), toUpper (MONDAY), toLower (monday) |

