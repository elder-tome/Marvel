import Link from 'next/link'
import RoundImage from './RoundImage'

type Props = {
	ImgUrl: string
	name: string
	link: string
}

function Button({ ImgUrl, name, link }: Props) {
	return (
		<Link href={link}>
			{/* lg:hover:backdrop-filter-none lg:hover:bg-surface-700/70 */}
			<a className='flex flex-col items-center bg-surface-700/30 border border-primary-500 p-3 rounded-xl backdrop-blur-sm shadow-lg shadow-black/40 transition-transform duration-200 lg:hover:scale-105 lg:hover:border-gray-700 lg:focus:border-gray-700 lg:focus:outline-none'>
				<RoundImage url={ImgUrl} isImageForButton />
				<span className='block text-gray-700 text-xs leading-[0.9375rem] font-normal tracking-[.03em] text-center mt-3'>
					{name}
				</span>
			</a>
		</Link>
	)
}

export default Button
