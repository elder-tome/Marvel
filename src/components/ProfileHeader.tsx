import RoundImage from './RoundImage'

type Props = {
	imgUrl: string
	name: string
	subName?: string
	description: string
}

function ProfileHeader({ imgUrl, name, subName, description }: Props) {
	return (
		<div className='flex flex-col items-center lg:items-start gap-1 -mt-[12.5rem] lg:-mt-[12.2rem] mb-14 lg:mb-20'>
			<div className='flex items-center gap-4 mb-14 lg:mb-2'>
				<RoundImage url={imgUrl} />
				<div className='hidden lg:flex lg:flex-col lg:gap-1'>
					<span className=''>{subName}</span>
					<h1 className='text-transform: uppercase'>{name}</h1>
				</div>
			</div>
			<span className='w-full lg:hidden'>{subName}</span>
			<h1 className='w-full text-transform: uppercase mb-3 lg:hidden'>
				{name}
			</h1>
			<p>{description}</p>
		</div>
	)
}

export default ProfileHeader
