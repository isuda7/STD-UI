import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import UserLayoutSub from './Layouts/UserLayoutSub';
import UserLayoutMain from './Layouts/UserLayoutMain';

// Guide
import GuidePageList from "./Guide/PageList";
import GuidePrototype from "./Guide/Samples/GuidePrototype";
import GuideAccordions from "./Guide/Samples/GuideAccordions";
import GuideElements from "./Guide/Samples/GuideElements";
import GuideTabs from "./Guide/Samples/GuideTabs";
import GuideTooltips from "./Guide/Samples/GuideTooltips";

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
					<Route path="/guide/samples/prototype" element={<GuidePrototype />} />
					<Route path="/guide/samples/accordions" element={<GuideAccordions />} />
					<Route path="/guide/samples/elements" element={<GuideElements />} />
					<Route path="/guide/samples/tabs" element={<GuideTabs />} />
					<Route path="/guide/samples/utilities" element={<GuideTooltips />} />
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