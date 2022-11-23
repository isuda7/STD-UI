import React from 'react';
import GuideSection from './components/GuideSection';
import GuideWrapper from './components/GuideWrapper';

const ButtonPage = () => {
	return (
		<GuideWrapper title="Buttons" explain="">
			<GuideSection title="Module A">
				<button type='button' className='button module-a'>Enabled</button>
				<button type='button' className='button module-a' disabled>Disabled</button>
				<button type='button' className='button module-a primary'>Primary</button>
				<button type='button' className='button module-a primary' disabled>Disabled</button>
			</GuideSection>

			<GuideSection title="Module B">
				<button type='button' className='button module-b'>Enabled</button>
				<button type='button' className='button module-b' disabled>Disabled</button>
				<button type='button' className='button module-b primary'>Primary</button>
				<button type='button' className='button module-b primary' disabled>Disabled</button>
			</GuideSection>

			<GuideSection title="Module C">
				<button type='button' className='button module-c'>Enabled</button>
				<button type='button' className='button module-c' disabled>Disabled</button>
				<button type='button' className='button module-c primary'>Primary</button>
				<button type='button' className='button module-c primary' disabled>Disabled</button>
			</GuideSection>
		</GuideWrapper>
	)
}
export default ButtonPage;