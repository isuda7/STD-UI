import React from 'react';
import '../../assets/css/base.css';
import '../../assets/css/layout.css';
import '../../assets/css/utilities.css';
import '../../assets/css/components.css';

const GuideWrapper = (props) => {
	return (
		<div className='g-wrap'>
            <div className="g-header">
                <h2 className='g-title'>{props.title}</h2>
                {props.explain && <p className='g-explain'>{props.explain}</p>}
            </div>
            <div className="g-container">
                {props.children}
            </div>
		</div>
	)
}
export default GuideWrapper;