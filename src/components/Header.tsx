import Image from 'next/image'
import Link from 'next/link'

function Header() {
	return (
		<div className='fixed z-10 top-0 left-0 right-0 bg-surface-700/50 border-b border-b-primary-500 p-4 backdrop-blur-[4px]'>
			<div className='max-w-[82.5rem] m-auto'>
				<Link href='/'>
					<a className='inline-flex border-[0.125rem] border-transparent ring-1 ring-transparent lg:focus:ring-gray-700 rounded-sm outline-none'>
						<Image src='/LogoMarvel.svg' height={30} width={67} alt='Marvel' />
					</a>
				</Link>
			</div>
		</div>
	)
}

export default Header
