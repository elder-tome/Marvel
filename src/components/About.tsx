type Props = {
	other_name: string[]
	eye_color: string
	hair_color: string
	height: string
	weight: string
	genre: string
	place_origin: string
	education: string[]
	power: string[]
}

function About({
	other_name,
	height,
	weight,
	genre,
	eye_color,
	hair_color,
	place_origin,
	education,
	power,
}: Props) {
	return (
		<div className='border border-gray-300 rounded-xl p-4'>
			<h3 className='mb-1'>Nome(s)</h3>
			{other_name &&
				other_name.map((item, index) =>
					index < other_name.length - 1 ? (
						<span key={item} className='block whitespace-nowrap'>
							{item},
						</span>
					) : (
						<span key={item} className='block whitespace-nowrap'>
							{item}
						</span>
					)
				)}
			<h3 className='mt-4 mb-1'>Altura(m)</h3>
			{height}
			<h3 className='mt-4 mb-1'>Peso(kg)</h3>
			{weight}
			<h3 className='mt-4 mb-1'>Gênero</h3>
			{genre}
			<h3 className='mt-4 mb-1'>Cor dos olhos</h3>
			{eye_color}
			<h3 className='mt-4 mb-1'>Cor do cabelo</h3>
			{hair_color}
			<h3 className='mt-4 mb-1'>Lugar de origem</h3>
			{place_origin}
			<h3 className='mt-4 mb-1'>Educação</h3>
			{education &&
				education.map((item, index) =>
					index < education.length - 1 ? (
						<span key={item} className='block whitespace-nowrap'>
							{item},
						</span>
					) : (
						<span key={item} className='block whitespace-nowrap'>
							{item}
						</span>
					)
				)}
			<h3 className='mt-4 mb-1'>Poder(es)</h3>
			{power &&
				power.map((item, index) =>
					index < power.length - 1 ? (
						<span key={item} className='block whitespace-nowrap'>
							{item},
						</span>
					) : (
						<span key={item} className='block whitespace-nowrap'>
							{item}
						</span>
					)
				)}
		</div>
	)
}

export default About
