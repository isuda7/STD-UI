import React from 'react';
import GuideSection from './components/GuideSection';
import GuideWrapper from './components/GuideWrapper';

const IconsPage = () => {
	return (
		<GuideWrapper title="Icons" explain="">
			<GuideSection title="Types">
                <p className='g-para'>Icon Only : <i className="icon twitter"><span className="blind">트위터</span></i></p>
                <p className='g-para'>Button Only : <button type='button' className="button icon twitter"><span className="blind">트위터</span></button></p>
                <br />
                <p className='g-para'>Label Left : <span className="label icon twitter left">트위터</span></p>
                <p className='g-para'>Button Left : <button type='button' className="button icon twitter left">트위터</button></p>
                <br />
                <p className='g-para'>Label Right : <span className="label icon twitter right">트위터</span></p>
                <p className='g-para'>Button Right : <button type='button' className="button icon twitter right">트위터</button></p>
			</GuideSection>
		</GuideWrapper>
	)
}
export default IconsPage;