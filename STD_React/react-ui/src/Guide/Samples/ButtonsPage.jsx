import React from 'react';
import GuideSection from './components/GuideSection';
import GuideWrapper from './components/GuideWrapper';

const ButtonsPage = () => {
	return (
		<GuideWrapper title="Buttons" explain="">
			<GuideSection title="Module A">
				<button type='button' className='button module-a'>Basic</button>
				<button type='button' className='button module-a' disabled>Disabled</button>
				<button type='button' className='button module-a primary'>Primary</button>
				<button type='button' className='button module-a primary' disabled>Disabled</button>
			</GuideSection>
			<GuideSection title="Module B">
				<button type='button' className='button module-b'>Basic</button>
				<button type='button' className='button module-b' disabled>Disabled</button>
				<button type='button' className='button module-b primary'>Primary</button>
				<button type='button' className='button module-b primary' disabled>Disabled</button>
			</GuideSection>
			<GuideSection title="Module C">
				<button type='button' className='button module-c'>Basic</button>
				<button type='button' className='button module-c' disabled>Disabled</button>
				<button type='button' className='button module-c primary'>Primary</button>
				<button type='button' className='button module-c primary' disabled>Disabled</button>
			</GuideSection>
			<GuideSection title="Module D">
				<button type='button' className='button module-d'>Basic</button>
				<button type='button' className='button module-d' disabled>Disabled</button>
				<button type='button' className='button module-d primary'>Primary</button>
				<button type='button' className='button module-d primary' disabled>Disabled</button>
			</GuideSection>
			<GuideSection title="Module E">
				<button type='button' className='button module-e'>Basic</button>
				<button type='button' className='button module-e' disabled>Disabled</button>
				<button type='button' className='button module-e primary'>Primary</button>
				<button type='button' className='button module-e primary' disabled>Disabled</button>
			</GuideSection>
		</GuideWrapper>
	)
}
export default ButtonsPage;