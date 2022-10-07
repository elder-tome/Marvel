import { useEffect, useState } from 'react'

type Props = {
	name: string
	value: number
	color: string | undefined
	order: number
}

function Attribute({ name, value, color, order }: Props) {
	const gaugeWidth = 6
	const padding = 8
	const size = 76
	const dashArray = ((size - padding - 10) / 2) * Math.PI * 2
	const [strokeDashoffsetValue, setStrokeDashoffsetValue] = useState(0)

	useEffect(() => {
		setInterval(() => setStrokeDashoffsetValue(value), 300 * order)
	}, [value, order])

	return (
		<div className='bg-surface-500/30 border border-gray-300 p-3 rounded-xl flex flex-col items-center gap-3 backdrop-blur-[4px]'>
			<svg
				className='border border-gray-300 rounded-full bg-surface-500 h-[calc((100vw-8.875rem)/3)] w-[calc((100vw-8.875rem)/3)] lg:max-h-[5.57rem] lg:max-w-[5.57rem]'
				viewBox={`0 0 ${size} ${size}`}
				fill='none'
			>
				<circle
					stroke={color}
					cx={(size - padding) / 2 + padding / 2}
					cy={(size - padding) / 2 + padding / 2}
					r={(size - padding - 10) / 2}
					strokeWidth={gaugeWidth}
					style={{
						strokeDasharray: dashArray,
						strokeDashoffset:
							dashArray - dashArray * (strokeDashoffsetValue / 7),
						transition: 'all 1s',
					}}
				/>
				<text
					className='fill-gray-700 text-base leading-[1.5rem] font-bold tracking-[.03em]'
					x='50%'
					y='50%'
					dy='.3em'
					textAnchor='middle'
				>
					{value}
				</text>
			</svg>
			<span className='text-gray-700 text-xs leading-[0.9375rem] font-normal tracking-[.03em]'>
				{name}
			</span>
		</div>
	)
}

export default Attribute
