import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import firebaseApp from '../../services/firebase'

function New() {
	const [name, setName] = useState('')
	const [nickname, setNickname] = useState('')
	const [otherName, setOtherName] = useState('')
	const [image, setImage] = useState('')
	const [imageBackground, setImageBackground] = useState('')
	const [color, setColor] = useState('')
	const [eyeColor, setEyeColor] = useState('')
	const [hairColor, setHairColor] = useState('')
	const [height, setHeight] = useState('')
	const [weight, setWeight] = useState('')
	const [genre, setGenre] = useState('')
	const [placeOrigin, setPlaceOrigin] = useState('')
	const [education, setEducation] = useState('')
	const [power, setPower] = useState('')
	const [biography, setBiography] = useState('')
	const [description, steDescription] = useState('')
	const [durability, setDurability] = useState(0)
	const [energy, setEnergy] = useState(0)
	const [fight, setFight] = useState(0)
	const [intelligence, setIntelligence] = useState(0)
	const [speed, setSpeed] = useState(0)
	const [strength, setStrength] = useState(0)

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()

		const otherNameArray = otherName.split(', ')
		const educationArray = education.split(', ')
		const powerArray = power.split(', ')
		const data = {
			name,
			nickname,
			other_name: otherNameArray,
			image,
			image_background: imageBackground,
			color,
			eye_color: eyeColor,
			hair_color: hairColor,
			height,
			weight,
			genre,
			place_origin: placeOrigin,
			education: educationArray,
			power: powerArray,
			biography,
			description,
			created_at: Timestamp.fromDate(new Date()),
			attribute: [
				{
					name: 'Durabilidade',
					value: durability,
				},
				{
					name: 'Energia',
					value: energy,
				},
				{
					name: 'Combate',
					value: fight,
				},
				{
					name: 'Inteligência',
					value: intelligence,
				},
				{
					name: 'Velocidade',
					value: speed,
				},
				{
					name: 'Força',
					value: strength,
				},
			],
		}

		await addDoc(collection(getFirestore(firebaseApp), 'characters'), data)
			.then(() => {
				alert('Personagem salvo com sucesso.')
				clearFields()
			})
			.catch(error => {
				alert(`error ao salvar personagem - ${error}`)
			})
	}

	function clearFields() {
		setName('')
		setNickname('')
		setOtherName('')
		setImage('')
		setImageBackground('')
		setColor('')
		setEyeColor('')
		setHairColor('')
		setHeight('')
		setWeight('')
		setGenre('')
		setPlaceOrigin('')
		setEducation('')
		setPower('')
		setBiography('')
		steDescription('')
		setDurability(0)
		setEnergy(0)
		setFight(0)
		setIntelligence(0)
		setSpeed(0)
		setStrength(0)
	}

	return (
		<div className='h-[calc(100vh-1.5rem)] flex flex-col items-center justify-center'>
			<h1 className='mb-8'>NOVO PERSONAGEM</h1>
			<form className='' onSubmit={handleSubmit}>
				<div className='flex items-end gap-4'>
					<div className='w-[25rem] flex flex-col gap-2 text-surface-500'>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Nome'
							value={name}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setName(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='apelido'
							value={nickname}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setNickname(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Outros nomes'
							value={otherName}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setOtherName(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Url da imagem'
							value={image}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setImage(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Url do background'
							value={imageBackground}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setImageBackground(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Cor para o personagem'
							value={color}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setColor(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Cor dos olhos'
							value={eyeColor}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setEyeColor(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Cor do cabelo'
							value={hairColor}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setHairColor(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Altura'
							value={height}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setHeight(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Peso'
							value={weight}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setWeight(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Gênero'
							value={genre}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setGenre(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Lugar de origem'
							value={placeOrigin}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setPlaceOrigin(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Educação'
							value={education}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setEducation(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Poderes'
							value={power}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setPower(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Biografia'
							value={biography}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setBiography(e.target.value)
							}
						/>
						<input
							className='block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='text'
							placeholder='Descrição'
							value={description}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								steDescription(e.target.value)
							}
						/>
					</div>
					<div className='w-[19rem] items-end flex gap-2 flex-wrap'>
						<input
							className='w-36 block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='number'
							placeholder='Durabilidade'
							value={durability}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setDurability(Number(e.target.value))
							}
						/>
						<input
							className='w-36 block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='number'
							placeholder='Energia'
							value={energy}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setEnergy(Number(e.target.value))
							}
						/>
						<input
							className='w-36 block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='number'
							placeholder='Combate'
							value={fight}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setFight(Number(e.target.value))
							}
						/>
						<input
							className='w-36 block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='number'
							placeholder='Inteligencia'
							value={intelligence}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setIntelligence(Number(e.target.value))
							}
						/>
						<input
							className='w-36 block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='number'
							placeholder='Velocidade'
							value={speed}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setSpeed(Number(e.target.value))
							}
						/>
						<input
							className='w-36 block p-2 rounded-md bg-gray-700 placeholder-gray-500'
							type='number'
							placeholder='Força'
							value={strength}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
								setStrength(Number(e.target.value))
							}
						/>
					</div>
				</div>
				<button
					type='submit'
					className='w-full p-3 rounded-md bg-primary-500 text-gray-700 mt-4'
				>
					Salvar
				</button>
			</form>
		</div>
	)
}

export default New
