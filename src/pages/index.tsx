import {
	collection,
	getDocs,
	getFirestore,
	limit,
	orderBy,
	query,
} from 'firebase/firestore'
import Image from 'next/image'
import { GetStaticProps } from 'next/types'

import Box from '../components/Box'
import Button from '../components/Button'
import Header from '../components/Header'
import firebaseApp from '../services/firebase'

type PropsTeam = {
	dataTeam: [
		{
			id: string
			data: {
				image: string
				name: string
			}
		}
	]
	dataCharacter: [
		{
			id: string
			data: {
				nickname: string
				image: string
			}
		}
	]
}

function Home({ dataTeam, dataCharacter }: PropsTeam) {
	return (
		<>
			<Header />
			<div className='absolute -z-10 top-0 left-0 w-screen h-[18.125rem] lg:h-[24.9375rem]'>
				<Image
					src={'https://i.imgur.com/FzbKIdu.png'}
					alt='Imagem de fundo de um quadrinho da marvel.'
					layout='fill'
					objectFit='cover'
					priority
				/>
				<div className='absolute inset-0 bg-surface-500/80' />
			</div>
			<main className='px-4 mt-[19.125rem] lg:max-w-[50.23rem] m-auto'>
				<div className='flex flex-col items-center gap-2 -mt-48 lg:-mt-[11.2rem] mb-20 lg:mb-14'>
					<h1 className='max-w-xs lg:max-w-sm text-center'>
						HERÓIS E VILÕES DA MARVEL
					</h1>
					<p className='max-w-sm text-center'>
						Conheça os principais heróis e vilões do universo cinematográfico da
						Marvel.
					</p>
				</div>
				<Box
					className='flex gap-4 flex-wrap'
					title='Equipes'
					description='Equipes de heróis formadas no UCM.'
				>
					{dataTeam.map(team => (
						<Button
							key={team.id}
							ImgUrl={team.data.image}
							name={team.data.name}
							link={`/team/${team.id}`}
						/>
					))}
				</Box>
				<Box
					className='flex gap-4 flex-wrap'
					title='Destaques'
					description='Heróis em destaque atualmente.'
				>
					{dataCharacter.map(character => (
						<Button
							key={character.id}
							ImgUrl={character.data.image}
							name={character.data.nickname}
							link={`/character/${character.id}`}
						/>
					))}
				</Box>
			</main>
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const teamReference = query(
		collection(getFirestore(firebaseApp), 'teams'),
		orderBy('created_at', 'asc')
	)

	const docTeam = await getDocs(teamReference)

	const dataTeam = docTeam.docs.map(doc => {
		return {
			id: doc.id,
			data: doc.data(),
		}
	})

	const characterReference = query(
		collection(getFirestore(firebaseApp), 'characters'),
		orderBy('created_at', 'desc'),
		limit(4)
	)

	const docCharacter = await getDocs(characterReference)

	const dataCharacter = docCharacter.docs.map(doc => {
		return {
			id: doc.id,
			data: doc.data(),
		}
	})

	return {
		props: {
			dataTeam: JSON.parse(JSON.stringify(dataTeam)),
			dataCharacter: JSON.parse(JSON.stringify(dataCharacter)),
		},
		revalidate: 60 * 60 * 6, //6 hours
	}
}

export default Home
