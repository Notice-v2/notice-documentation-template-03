'use client'

import { Box } from '@chakra-ui/react'
import React from 'react'

interface Props {
	children: React.ReactNode
	firstRoute?: string
}

export const GridLayout = ({ children }: Props) => {
	/* const pathname = usePathname().substring(1)
	const router = useRouter()

	useEffect(() => {
		if (pathname === '') {
			router.push(firstRoute)
		}
	}, []) */

	return (
		<Box
			position="relative"
			display="grid"
			gridTemplateRows="auto"
			gridTemplateColumns={{ base: '1fr', lg: '1fr 1fr 1fr 1fr 1fr' }}
			gridTemplateAreas={{
				base: `'navbar' 'main' 'navLinks'`,
				lg: `'navbar navbar navbar navbar navbar'
    'sidebar main main main anchor'
    'sidebar main main main anchor'
    'sidebar navLinks navLinks navLinks anchor';`,
			}}
		>
			{children}
		</Box>
	)
}
