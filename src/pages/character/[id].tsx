import { doc, getDoc, getFirestore } from 'firebase/firestore'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import About from '../../components/About'

import Attribute from '../../components/Attribute'
import Biography from '../../components/Biography'
import Box from '../../components/Box'
import ButtonGoBack from '../../components/ButtonGoBack'
import Header from '../../components/Header'
import ProfileHeader from '../../components/ProfileHeader'
import firebaseApp from '../../services/firebase'

type PropContextParams = {
	id: string
}

type Props = {
	data: PropsCharacter
}

type PropsCharacter = {
	name: string
	nickname: string
	image: string
	image_background: string
	color: string
	other_name: string[]
	eye_color: string
	hair_color: string
	height: string
	weight: string
	genre: string
	place_origin: string
	education: string[]
	power: string[]
	biography: string
	description: string
	attribute: [
		{
			name: string
			value: number
		}
	]
}

function Character({ data }: Props) {
	return (
		<>
			<Header />
			<div className='absolute -z-10 top-0 left-0 w-screen h-[18.125rem] lg:h-[31.25rem]'>
				<Image
					src={data.image_background}
					alt=''
					layout='fill'
					objectFit='cover'
					priority
				/>
				<div className='absolute inset-0 bg-surface-500/95' />
			</div>
			<main className='relative px-4 mt-[19.125rem] lg:max-w-[50.22rem] m-auto'>
				<ButtonGoBack />
				<ProfileHeader
					imgUrl={data.image}
					name={data.nickname}
					subName={data.name}
					description={data.description}
				/>
				<Box
					className='flex gap-4 flex-wrap justify-center'
					title='Atributos'
					description='Atributos físicos do personagem'
				>
					{data?.attribute.map((attribute, index) => (
						<Attribute
							key={index}
							color={data.color}
							name={attribute.name}
							value={attribute.value}
							order={index}
						/>
					))}
				</Box>
				<div className='flex flex-col gap-4 lg:flex-row-reverse'>
					<Box
						className='lg:min-w-[17.8125rem]'
						title='Sobre'
						description='Informações sobre o personagem.'
					>
						<About
							other_name={data.other_name}
							height={data.height}
							weight={data.weight}
							genre={data.genre}
							eye_color={data.eye_color}
							hair_color={data.hair_color}
							place_origin={data.place_origin}
							education={data.education}
							power={data.power}
						/>
					</Box>
					<Box
						className='float-left'
						title='Biografia'
						description='História do personagem.'
					>
						<Biography biography={data.biography} />
					</Box>
				</div>
			</main>
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { id } = params as PropContextParams

	const characterReference = doc(getFirestore(firebaseApp), 'characters', id)
	const docCharacter = await getDoc(characterReference)

	if (!docCharacter.exists()) {
		return { notFound: true }
	}

	return {
		props: {
			data: JSON.parse(JSON.stringify(docCharacter.data())),
		},
		revalidate: 60 * 60 * 6, //6 hours
	}
}

export default Character
