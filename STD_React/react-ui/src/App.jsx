import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import UserLayoutSub from './Layouts/UserLayoutSub';
import UserLayoutMain from './Layouts/UserLayoutMain';

// Guide
import GuidePageList from "./Guide/PageList";

// Samples
import SamplesPrototype from "./Guide/Samples/Prototype";
import SamplesButtons from "./Guide/Samples/ButtonPage";

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
					<Route path="/guide/samples/prototype" element={<SamplesPrototype />} />
					<Route path="/guide/samples/buttons" element={<SamplesButtons />} />
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