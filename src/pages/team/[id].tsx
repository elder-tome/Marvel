import {
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	orderBy,
	query,
	where,
} from 'firebase/firestore'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next/types'

import Box from '../../components/Box'
import Button from '../../components/Button'
import ButtonGoBack from '../../components/ButtonGoBack'
import Header from '../../components/Header'
import ProfileHeader from '../../components/ProfileHeader'
import firebaseApp from '../../services/firebase'

type PropContextParams = {
	id: string
}

type Props = {
	team: PropsTeam
	character: PropsCharacter
}

type PropsCharacter = [
	{
		id: string
		data: {
			nickname: string
			image: string
		}
	}
]

type PropsTeam = {
	name: string
	image: string
	image_background: string
	description: string
}

function Team({ team, character }: Props) {
	return (
		<>
			<Header />
			<div className='absolute -z-10 top-0 left-0 w-screen h-[18.125rem] lg:h-[31.25rem]'>
				<Image
					src={team.image_background}
					alt=''
					layout='fill'
					objectFit='cover'
					priority
				/>
				<div className='absolute inset-0 bg-surface-500/95' />
			</div>
			<main className='relative px-4 mt-[19.125rem] lg:max-w-[50.23rem] m-auto'>
				<ButtonGoBack />
				<ProfileHeader
					imgUrl={team.image}
					name={team.name}
					description={team.description}
				/>
				<Box
					className='flex gap-4 flex-wrap'
					title='Membros'
					description='Formação principal no UCM'
				>
					{character.map(member => (
						<Button
							key={member.id}
							ImgUrl={member.data.image}
							name={member.data.nickname}
							link={`/character/${member.id}`}
						/>
					))}
				</Box>
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

	const teamReference = doc(getFirestore(firebaseApp), 'teams', id)
	const docTeam = await getDoc(teamReference)

	const characterReference = query(
		collection(getFirestore(firebaseApp), 'characters'),
		where('team', 'array-contains', id),
		orderBy('created_at', 'asc')
	)

	const docsCharacter = await getDocs(characterReference)

	const dataCharacters = docsCharacter.docs.map(doc => {
		return {
			id: doc.id,
			data: doc.data(),
		}
	})

	if (!docTeam.exists()) {
		return { notFound: true }
	}

	return {
		props: {
			team: JSON.parse(JSON.stringify(docTeam.data())),
			character: JSON.parse(JSON.stringify(dataCharacters)),
		},
		revalidate: 60 * 60 * 6, //6 hours
	}
}

export default Team
