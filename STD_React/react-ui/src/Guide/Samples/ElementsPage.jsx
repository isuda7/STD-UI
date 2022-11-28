import React from 'react';
import { Link } from 'react-router-dom';
import GuideSection from './components/GuideSection';
import GuideSectionSub from './components/GuideSectionSub';
import GuideWrapper from './components/GuideWrapper';

const ElementsPage = () => {
	return (
		<GuideWrapper title="Elements" explain="">
			<GuideSection title="Buttons">
                <button type='button' className='button module-a'>Basic</button>
                <button type='button' className='button module-a' disabled>Disabled</button>
                <button type='button' className='button module-a primary'>Primary</button>
                <button type='button' className='button module-a primary' disabled>Disabled</button>
                <br />
                <br />
                <button type='button' className='button module-b'>Basic</button>
                <button type='button' className='button module-b' disabled>Disabled</button>
                <button type='button' className='button module-b primary'>Primary</button>
                <button type='button' className='button module-b primary' disabled>Disabled</button>
                <br />
                <br />
                <button type='button' className='button module-c'>Basic</button>
                <button type='button' className='button module-c' disabled>Disabled</button>
                <button type='button' className='button module-c primary'>Primary</button>
                <button type='button' className='button module-c primary' disabled>Disabled</button>
                <br />
                <br />
                <button type='button' className='button module-d'>Basic</button>
                <button type='button' className='button module-d' disabled>Disabled</button>
                <button type='button' className='button module-d primary'>Primary</button>
                <button type='button' className='button module-d primary' disabled>Disabled</button>
			</GuideSection>
			<GuideSection title="Labels">
                <span className="label module-a">Basic</span>
                <span className="label module-a primary">Primary</span>
                <br />
                <br />
                <span className="label module-b">Basic</span>
                <span className="label module-b primary">Primary</span>
                <br />
                <br />
                <span className="label module-c">Basic</span>
                <span className="label module-c primary">Primary</span>
                <br />
                <br />
                <span className="label module-d">Basic</span>
                <span className="label module-d primary">Primary</span>
			</GuideSection>
			<GuideSection title="Icons">
                <p className='g-para'>Icon Only : <i className="icon twitter"><span className="blind">트위터</span></i></p>
                <p className='g-para'>Button Only : <button type='button' className="button icon twitter"><span className="blind">트위터</span></button></p>
                <br />
                <p className='g-para'>Label Left : <span className="label icon twitter left">트위터</span></p>
                <p className='g-para'>Button Left : <button type='button' className="button icon twitter left">트위터</button></p>
                <br />
                <p className='g-para'>Label Right : <span className="label icon twitter right">트위터</span></p>
                <p className='g-para'>Button Right : <button type='button' className="button icon twitter right">트위터</button></p>
			</GuideSection>
			<GuideSection title="Badges">
                <span className="badge module-a"><span className="blind">새글</span></span>
                <br />
                <br />
                <span className="badge module-b">New</span>&nbsp;
                <span className="badge module-b">99+</span>
			</GuideSection>
			<GuideSection title="Dividers">
                <hr className='divider module-a' />
                <br />
                <br />
                <hr className='divider module-b' />
                <br />
                <br />
                <hr className='divider module-c' />
			</GuideSection>
			<GuideSection title="Thumbnails">
                <div style={{"width":"160px", "height":"100px"}}>
                    <div className='img-cover'>
                        <img src="http://placeimg.com/640/480/nature" alt="Thumbnail" />
                    </div>
                </div>
                <p className="g-para">기본 사이즈는 width, height 100% 이며, 컨텐츠에 의해서 사이즈가 적용된다. </p>
			</GuideSection>
			<GuideSection title="Avatas">
                <div style={{"width":"60px", "height":"60px"}}>
                    <div className='img-cover'>
                        <img src="http://placeimg.com/100/100/animals" alt="Avata" />
                    </div>
                </div>
                <p className="g-para">기본 사이즈는 width, height 100% 이며, 컨텐츠에 의해서 사이즈가 적용된다. </p>
			</GuideSection>
			<GuideSection title="Banners">
                <div style={{"width":"640px", "height":"120px"}}>
                    <Link to="" className="banner">
                        <div className='img-cover'>
                            <img src="http://placeimg.com/640/120/nature" alt="Banner" />
                        </div>
                    </Link>
                </div>
                <p className="g-para">기본 사이즈는 width, height 100% 이며, 컨텐츠에 의해서 사이즈가 적용된다. </p>
			</GuideSection>
		</GuideWrapper>
	)
}
export default ElementsPage;