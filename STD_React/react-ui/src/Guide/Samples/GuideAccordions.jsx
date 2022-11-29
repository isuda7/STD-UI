import React, { useState } from 'react';
import GuideSection from './components/GuideSection';
import GuideWrapper from './components/GuideWrapper';

const GuideAccordions = () => {
    const [acco1, setAcco1] = useState("acco11");
    const [acco2, setAcco2] = useState("acco22");
    const [acco3, setAcco3] = useState("acco33");

	return (
		<GuideWrapper title="Accordions" explain="">
			<GuideSection title="Module A">
                <ul className='acco module-a'>
                    <li className={"acco-item"+(acco1==="acco11"?" is-selected":"")}>
                        <div className="acco-title">
                            <button type='button' className='acco-trigger' id='acco11' onClick={()=>{setAcco1("acco11")}}>Accordion Item 11</button>
                        </div>
                        <div className="acco-panel" aria-labelledby='acco11'>
                            Accordion Panel 11
                        </div>
                    </li>
                    <li className={"acco-item"+(acco1==="acco12"?" is-selected":"")}>
                        <div className="acco-title">
                            <button type='button' className='acco-trigger' id='acco12' onClick={()=>{setAcco1("acco12")}}>Accordion Item 12</button>
                        </div>
                        <div className="acco-panel" aria-labelledby='acco12'>
                            Accordion Panel 12
                        </div>
                    </li>
                    <li className={"acco-item"+(acco1==="acco13"?" is-selected":"")}>
                        <div className="acco-title">
                            <button type='button' className='acco-trigger' id='acco13' onClick={()=>{setAcco1("acco13")}}>Accordion Item 13</button>
                        </div>
                        <div className="acco-panel" aria-labelledby='acco13'>
                            Accordion Panel 13
                        </div>
                    </li>
                </ul>
			</GuideSection>
			<GuideSection title="Module B">
                <ul className='acco module-b'>
                    <li className={"acco-item"+(acco2==="acco21"?" is-selected":"")}>
                        <div className="acco-title">
                            <button type='button' className='acco-trigger' id='acco21' onClick={()=>{setAcco2("acco21")}}>Accordion Item 21</button>
                        </div>
                        <div className="acco-panel" aria-labelledby='acco21'>
                            Accordion Panel 21
                        </div>
                    </li>
                    <li className={"acco-item"+(acco2==="acco22"?" is-selected":"")}>
                        <div className="acco-title">
                            <button type='button' className='acco-trigger' id='acco22' onClick={()=>{setAcco2("acco22")}}>Accordion Item 22</button>
                        </div>
                        <div className="acco-panel" aria-labelledby='acco22'>
                            Accordion Panel 22
                        </div>
                    </li>
                    <li className={"acco-item"+(acco2==="acco23"?" is-selected":"")}>
                        <div className="acco-title">
                            <button type='button' className='acco-trigger' id='acco23' onClick={()=>{setAcco2("acco23")}}>Accordion Item 23</button>
                        </div>
                        <div className="acco-panel" aria-labelledby='acco23'>
                            Accordion Panel 23
                        </div>
                    </li>
                </ul>
			</GuideSection>
			<GuideSection title="Module C">
                <ul className='acco module-c'>
                    <li className={"acco-item"+(acco3==="acco31"?" is-selected":"")}>
                        <div className="acco-title">
                            <button type='button' className='acco-trigger' id='acco31' onClick={()=>{setAcco3("acco31")}}>Accordion Item 31</button>
                        </div>
                        <div className="acco-panel" aria-labelledby='acco31'>
                            Accordion Panel 31
                        </div>
                    </li>
                    <li className={"acco-item"+(acco3==="acco32"?" is-selected":"")}>
                        <div className="acco-title">
                            <button type='button' className='acco-trigger' id='acco32' onClick={()=>{setAcco3("acco32")}}>Accordion Item 32</button>
                        </div>
                        <div className="acco-panel" aria-labelledby='acco32'>
                            Accordion Panel 32
                        </div>
                    </li>
                    <li className={"acco-item"+(acco3==="acco33"?" is-selected":"")}>
                        <div className="acco-title">
                            <button type='button' className='acco-trigger' id='acco33' onClick={()=>{setAcco3("acco33")}}>Accordion Item 33</button>
                        </div>
                        <div className="acco-panel" aria-labelledby='acco33'>
                            Accordion Panel 33
                        </div>
                    </li>
                </ul>
			</GuideSection>
		</GuideWrapper>
	)
}
export default GuideAccordions;