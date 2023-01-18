import React, { useEffect } from 'react';

import NewWindow from './NewWindow';

export default {
  title: 'NewWindow/NewWindow',
  component: NewWindow,
  argTypes: {
    showChars: { control: 'number' }
  },
};

const Template = (args) => {
	const DEFAULT_SIZE 			= {width: 1920, height: 1080}
	const [size, setSize] 		= React.useState(DEFAULT_SIZE)
	const [isOpen, setIsOpen] 	= React.useState(false)
	const [scale, setScale] 	= React.useState(100)
	const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

	useEffect(() => {
		let scaleW = 100 / DEFAULT_SIZE.width * Math.max(size.width, 0)
		let scaleH = 100 / DEFAULT_SIZE.height * Math.max(size.height, 0)
	
		
		setScale(Math.min(scaleW, scaleH))

		console.log(size, scale)
	}, [size])
	
    return (<>
		<button onClick={() => setIsOpen(!isOpen)}>{!isOpen ? "Open" : "Close"}</button>
        {isOpen && <NewWindow 
			onClose={() =>setIsOpen(false)}
			onResize={(width, height) => setSize({width, height})}
		>
			<div style={{
				fontSize: '1000%',
				textAlign: 'center',
				width: `${DEFAULT_SIZE.width}px`,
				height: `${DEFAULT_SIZE.height}px`,
				backgroundColor: 'skyblue',
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: `translate(-50%, -50%) scale(${scale}%)`
			}}>
            	Test
			</div>
        </NewWindow>}
    </>)
};


export const test = Template.bind({});
test.args = {

};