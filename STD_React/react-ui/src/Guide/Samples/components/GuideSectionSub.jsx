import React from 'react';

const GuideSectionSub = (props) => {
	return (
		<div className='g-sec-sub'>
            <div className="g-sec-sub-head">
                <h2 className='g-title'>{props.title}</h2>
            </div>
            <div className="g-sec-sub-body">
                {props.children}
            </div>
		</div>
	)
}
export default GuideSectionSub;