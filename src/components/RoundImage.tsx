import Image from 'next/image'
import { DetailedHTMLProps, HTMLAttributes } from 'react'

type Props = DetailedHTMLProps<
	HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	url: string
	isImageForButton?: boolean
}

function RoundImage({ url, isImageForButton, ...rest }: Props) {
	return (
		<div
			className={`${
				!isImageForButton
					? 'border-gray-300 bg-transparent max-h-[8.5rem] max-w-[8.5rem]'
					: `border-primary-500 bg-surface-700 lg:max-h-[9.68rem] lg:max-w-[9.68rem]`
			} border rounded-full p-2 h-[calc((100vw-6.375rem)/2)] w-[calc((100vw-6.375rem)/2)]`}
		>
			<Image
				className='rounded-full'
				src={url}
				alt=''
				width={154}
				height={154}
				layout='responsive'
			/>
		</div>
	)
}

export default RoundImage
