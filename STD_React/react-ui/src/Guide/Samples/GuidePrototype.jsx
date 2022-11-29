import React from 'react';
import GuideSection from './components/GuideSection';
import GuideWrapper from './components/GuideWrapper';

const GuidePrototype = () => {
	return (
		<GuideWrapper title="Prototype" explain="">
			<GuideSection title="Section">
				<p>Prototype Section</p>
			</GuideSection>
			<GuideSection title="Section">
				<p>Prototype Section</p>
			</GuideSection>
			<GuideSection title="Section">
				<p>Prototype Section</p>
			</GuideSection>
		</GuideWrapper>
	)
}
export default GuidePrototype;