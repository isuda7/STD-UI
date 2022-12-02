import React, { useState } from 'react';
import GuideSection from './components/GuideSection';
import GuideWrapper from './components/GuideWrapper';

const GuideTooltips = () => {
    const [tooltip1, setTooltip1] = useState(false);
    const [tooltip2, setTooltip2] = useState(false);
    const [tooltip3, setTooltip3] = useState(false);
    const [tooltip4, setTooltip4] = useState(false);
    const [tooltip5, setTooltip5] = useState(false);
    const [tooltip6, setTooltip6] = useState(false);
    const [tooltip7, setTooltip7] = useState(false);
    const [tooltip8, setTooltip8] = useState(false);
    const handlerTooltip1 = () => { setTooltip1(!tooltip1); }
    const handlerTooltip2 = () => { setTooltip2(!tooltip2); }
    const handlerTooltip3 = () => { setTooltip3(!tooltip3); }
    const handlerTooltip4 = () => { setTooltip4(!tooltip4); }
    const handlerTooltip5 = () => { setTooltip5(!tooltip5); }
    const handlerTooltip6 = () => { setTooltip6(!tooltip6); }
    const handlerTooltip7 = () => { setTooltip7(!tooltip7); }
    const handlerTooltip8 = () => { setTooltip8(!tooltip8); }
	return (
		<GuideWrapper title="Tooltips" explain="">
			<GuideSection title="Module A">
                <div style={{"textAlign":"center"}}>
                    <div className="tooltip-wrap">
                        <button type='button' className='button icon feel' onClick={handlerTooltip1}></button>
                        <div className={'tooltip right middle module-a' + ((tooltip1 === true) ? ' is-visibled':'')}>
                            <div className="tooltip-body">
                                <p className='tooltip-desc'>Tooltip Message - right middle</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="tooltip-wrap">
                        <button type='button' className='button icon feel' onClick={handlerTooltip2}></button>
                        <div className={'tooltip left middle module-a' + ((tooltip2 === true) ? ' is-visibled':'')}>
                            <div className="tooltip-body">
                                <p className='tooltip-desc'>Tooltip Message - left middle</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="tooltip-wrap">
                        <button type='button' className='button icon feel' onClick={handlerTooltip3}></button>
                        <div className={'tooltip center top module-a' + ((tooltip3 === true) ? ' is-visibled':'')}>
                            <div className="tooltip-body">
                                <p className='tooltip-desc'>Tooltip Message - center top</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="tooltip-wrap">
                        <button type='button' className='button icon feel' onClick={handlerTooltip4}></button>
                        <div className={'tooltip center bottom module-a' + ((tooltip4 === true) ? ' is-visibled':'')}>
                            <div className="tooltip-body">
                                <p className='tooltip-desc'>Tooltip Message - center bottom</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="tooltip-wrap">
                        <button type='button' className='button icon feel' onClick={handlerTooltip5}></button>
                        <div className={'tooltip left bottom module-a' + ((tooltip5 === true) ? ' is-visibled':'')}>
                            <div className="tooltip-body">
                                <p className='tooltip-desc'>Tooltip Message - left bottom</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="tooltip-wrap">
                        <button type='button' className='button icon feel' onClick={handlerTooltip6}></button>
                        <div className={'tooltip right bottom module-a' + ((tooltip6 === true) ? ' is-visibled':'')}>
                            <div className="tooltip-body">
                                <p className='tooltip-desc'>Tooltip Message - left bottom</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="tooltip-wrap">
                        <button type='button' className='button icon feel' onClick={handlerTooltip7}></button>
                        <div className={'tooltip left top module-a' + ((tooltip7 === true) ? ' is-visibled':'')}>
                            <div className="tooltip-body">
                                <p className='tooltip-desc'>Tooltip Message - left top</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="tooltip-wrap">
                        <button type='button' className='button icon feel' onClick={handlerTooltip8}></button>
                        <div className={'tooltip right top module-a' + ((tooltip8 === true) ? ' is-visibled':'')}>
                            <div className="tooltip-body">
                                <p className='tooltip-desc'>Tooltip Message - right top</p>
                            </div>
                        </div>
                    </div>
                </div>
			</GuideSection>
		</GuideWrapper>
	)
}
export default GuideTooltips;