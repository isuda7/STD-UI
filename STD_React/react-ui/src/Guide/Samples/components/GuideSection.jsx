import React from 'react';

const GuideSection = (props) => {
	return (
		<div className='g-sec'>
            <div className="g-sec-head">
                <h2 className='g-title'>{props.title}</h2>
                {props.explain && <p className='g-explain'>{props.explain}</p>}
            </div>
            <div className="g-sec-body">
                {props.children}
            </div>
		</div>
	)
}
export default GuideSection;