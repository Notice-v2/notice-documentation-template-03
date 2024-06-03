'use client'

import { useEffect, useState } from 'react'

const isClient = typeof window !== 'undefined'
const getHash = () => (isClient ? window.location.hash : undefined)

export const useHash = () => {
	const [hash, setHash] = useState(getHash())

	useEffect(() => {
		const handleHashChange = () => {
			setHash(getHash())
		}

		isClient && window.addEventListener('hashchange', handleHashChange)

		// Clean up the event listener on component unmount
		return () => {
			isClient && window.removeEventListener('hashchange', handleHashChange)
		}
	}, [hash, isClient])

	return isClient ? hash : null
}
