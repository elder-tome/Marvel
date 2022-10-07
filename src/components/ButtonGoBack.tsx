import Router from 'next/router'
import { CaretLeft } from 'phosphor-react'

function ButtonGoBack() {
	function handleGoBack() {
		Router.back()
	}

	return (
		<button
			className='absolute left-4 lg:-left-28 bg-surface-700/30 rounded-lg border-[0.0625rem] border-primary-500 p-3 backdrop-blur-[4px] shadow-lg shadow-black/40 transition-transform duration-200 lg:hover:scale-110 hover:border-gray-700 focus:border-gray-700 focus:outline-none'
			onClick={handleGoBack}
		>
			<CaretLeft size={24} />
		</button>
	)
}

export default ButtonGoBack
