import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
	title: string
	description: string
	children: ReactNode
}

function Box({ title, description, children, ...rest }: Props) {
	return (
		<div className='w-full mb-14'>
			<header className='flex items-end gap-4 mb-4'>
				<h2>{title}</h2>
				<span className='text-gray-300 text-xs leading-[0.9375rem] font-normal tracking-[.03em] mb-[0.1875rem]'>
					{description}
				</span>
			</header>
			<main {...rest}>{children}</main>
		</div>
	)
}

export default Box
