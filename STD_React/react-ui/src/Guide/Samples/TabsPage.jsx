import React, { useState } from 'react';
import GuideSection from './components/GuideSection';
import GuideWrapper from './components/GuideWrapper';

const TabsPage = () => {
    const [tab1, setTab1] = useState("tab11");
    const [tab2, setTab2] = useState("tab22");
    const [tab3, setTab3] = useState("tab33");

	return (
		<GuideWrapper title="Tabs" explain="">
			<GuideSection title="Module A">
                <div className='tab-nav module-a'>
                    <div role="tablist" className='tab-list'>
                        <button type='button' role="tab" id="tab11" aria-selected="true" className={"tab"+(tab1==="tab11"?" is-selected":"")} onClick={()=>{setTab1("tab11")}}>Tab Nav 11</button>
                        <button type='button' role="tab" id="tab12" aria-selected="false" className={"tab"+(tab1==="tab12"?" is-selected":"")} onClick={()=>{setTab1("tab12")}}>Tab Nav 12</button>
                        <button type='button' role="tab" id="tab13" aria-selected="false" className={"tab"+(tab1==="tab13"?" is-selected":"")} onClick={()=>{setTab1("tab13")}}>Tab Nav 13</button>
                    </div>
                </div>
                <div className="tab-panels">
                    <div role="tabpanel" aria-labelledby='tab11' className={"tab-panel"+(tab1==="tab11"?" is-visibled":"")}>
                        <div>
                            <p>Tab Panel 11</p>
                        </div>
                    </div>
                    <div role="tabpanel" aria-labelledby='tab12' className={"tab-panel"+(tab1==="tab12"?" is-visibled":"")}>
                        <div>
                            <p>Tab Panel 12</p>
                        </div>
                    </div>
                    <div role="tabpanel" aria-labelledby='tab13' className={"tab-panel"+(tab1==="tab13"?" is-visibled":"")}>
                        <div>
                            <p>Tab Panel 13</p>
                        </div>
                    </div>
                </div>
			</GuideSection>
			<GuideSection title="Module B">
                <div className='tab-nav module-b'>
                    <div role="tablist" className='tab-list'>
                        <button type='button' role="tab" id="tab21" aria-selected="true" className={"tab"+(tab2==="tab21"?" is-selected":"")} onClick={()=>{setTab2("tab21")}}>Tab Nav 11</button>
                        <button type='button' role="tab" id="tab22" aria-selected="false" className={"tab"+(tab2==="tab22"?" is-selected":"")} onClick={()=>{setTab2("tab22")}}>Tab Nav 12</button>
                        <button type='button' role="tab" id="tab23" aria-selected="false" className={"tab"+(tab2==="tab23"?" is-selected":"")} onClick={()=>{setTab2("tab23")}}>Tab Nav 13</button>
                    </div>
                </div>
                <div className="tab-panels">
                    <div role="tabpanel" aria-labelledby='tab21' className={"tab-panel"+(tab2==="tab21"?" is-visibled":"")}>
                        <div>
                            <p>Tab Panel 21</p>
                        </div>
                    </div>
                    <div role="tabpanel" aria-labelledby='tab22' className={"tab-panel"+(tab2==="tab22"?" is-visibled":"")}>
                        <div>
                            <p>Tab Panel 22</p>
                        </div>
                    </div>
                    <div role="tabpanel" aria-labelledby='tab23' className={"tab-panel"+(tab2==="tab23"?" is-visibled":"")}>
                        <div>
                            <p>Tab Panel 23</p>
                        </div>
                    </div>
                </div>
			</GuideSection>
			<GuideSection title="Module C">
                <div className='tab-nav module-c'>
                    <div role="tablist" className='tab-list'>
                        <button type='button' role="tab" id="tab31" aria-selected="true" className={"tab"+(tab3==="tab31"?" is-selected":"")} onClick={()=>{setTab3("tab31")}}>Tab Nav 11</button>
                        <button type='button' role="tab" id="tab32" aria-selected="false" className={"tab"+(tab3==="tab32"?" is-selected":"")} onClick={()=>{setTab3("tab32")}}>Tab Nav 12</button>
                        <button type='button' role="tab" id="tab33" aria-selected="false" className={"tab"+(tab3==="tab33"?" is-selected":"")} onClick={()=>{setTab3("tab33")}}>Tab Nav 13</button>
                    </div>
                </div>
                <div className="tab-panels">
                    <div role="tabpanel" aria-labelledby='tab31' className={"tab-panel"+(tab3==="tab31"?" is-visibled":"")}>
                        <div>
                            <p>Tab Panel 31</p>
                        </div>
                    </div>
                    <div role="tabpanel" aria-labelledby='tab32' className={"tab-panel"+(tab3==="tab32"?" is-visibled":"")}>
                        <div>
                            <p>Tab Panel 32</p>
                        </div>
                    </div>
                    <div role="tabpanel" aria-labelledby='tab33' className={"tab-panel"+(tab3==="tab33"?" is-visibled":"")}>
                        <div>
                            <p>Tab Panel 33</p>
                        </div>
                    </div>
                </div>
			</GuideSection>
		</GuideWrapper>
	)
}
export default TabsPage;