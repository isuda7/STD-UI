import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import UserLayoutSub from './Layouts/UserLayoutSub';
import UserLayoutMain from './Layouts/UserLayoutMain';

// Guide
import GuidePageList from "./Guide/PageList";

// Samples
import SamplePrototype from "./Guide/Samples/Prototype";
import SampleButtons from "./Guide/Samples/ButtonsPage";
import SampleIcons from "./Guide/Samples/IconsPage";
import SampleLabels from "./Guide/Samples/LabelsPage";
import SampleTabs from "./Guide/Samples/TabsPage";
import SampleAccordions from "./Guide/Samples/AccordionsPage";
import SampleCards from "./Guide/Samples/CardsPage";

// Pages
import Index from "./Pages/Main";
import Prototype from "./Pages/Prototype";
import NotFound from "./NotFound";

const Router = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/guide/" element={<GuidePageList />} />
					<Route path="/guide/samples/prototype" element={<SamplePrototype />} />
					<Route path="/guide/samples/buttons" element={<SampleButtons />} />
					<Route path="/guide/samples/icons" element={<SampleIcons />} />
					<Route path="/guide/samples/labels" element={<SampleLabels />} />
					<Route path="/guide/samples/tabs" element={<SampleTabs />} />
					<Route path="/guide/samples/accordions" element={<SampleAccordions />} />
					<Route path="/guide/samples/cards" element={<SampleCards />} />
					<Route path="/" element={<UserLayoutMain />}>
						<Route index element={<Index />} />
					</Route>
					<Route path="/Pages/" element={<UserLayoutSub />}>
						<Route path='Prototype' element={<Prototype />} />
					</Route>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};
export default Router;