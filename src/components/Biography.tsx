import { useEffect, useRef } from 'react'

type Prop = {
	biography: string
}

function Biography({ biography }: Prop) {
	const divReference = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (divReference.current) {
			divReference.current.innerHTML = biography
		}
	}, [biography])

	return <div className='indent-5' ref={divReference} />
}

export default Biography
