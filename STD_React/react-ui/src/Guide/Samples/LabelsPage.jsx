import React from 'react';
import GuideSection from './components/GuideSection';
import GuideWrapper from './components/GuideWrapper';

const LabelsPage = () => {
	return (
		<GuideWrapper title="Labels" explain="">
			<GuideSection title="Module A">
				<span className="label module-a">Basic</span>
				<span className="label module-a primary">Primary</span>
			</GuideSection>
			<GuideSection title="Module B">
				<span className="label module-b">Basic</span>
				<span className="label module-b primary">Primary</span>
			</GuideSection>
			<GuideSection title="Module C">
				<span className="label module-c">Basic</span>
				<span className="label module-c primary">Primary</span>
			</GuideSection>
			<GuideSection title="Module D">
				<span className="label module-d">Basic</span>
				<span className="label module-d primary">Primary</span>
			</GuideSection>
		</GuideWrapper>
	)
}
export default LabelsPage;