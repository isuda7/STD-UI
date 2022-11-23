import React from 'react';
import '../../assets/css/base.css';
import '../../assets/css/layout.css';
import '../../assets/css/utilities.css';
import '../../assets/css/components.css';

const GuideWrapper = (props) => {
	return (
		<div className='g-wrap'>
            <div className="g-head">
                <h2 className='g-title'>{props.title}</h2>
            </div>
            <div className="g-body">
                {props.children}
            </div>
		</div>
	)
}
export default GuideWrapper;