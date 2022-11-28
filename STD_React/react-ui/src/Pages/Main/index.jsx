import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<div>
			<div><Link to="/guide/">GuidePageList</Link></div>
			<div><Link to="/guide/samples/prototype">Sample Prototype</Link></div>
			<div><Link to="/guide/samples/buttons">Sample Buttons</Link></div>
			<div><Link to="/guide/samples/icons">Sample Icons</Link></div>
			<div><Link to="/guide/samples/elements">Sample Elements</Link></div>
			<div><Link to="/guide/samples/accordions">Sample Accordions</Link></div>
			<div><Link to="/guide/samples/tabs">Sample Tabs</Link></div>
			<div><Link to="/guide/samples/cards">Sample Cards</Link></div>
			<div><Link to="/">Index</Link></div>
			<div><Link to='Prototype'>Prototype</Link></div>
		</div>
	)
}
export default Main;