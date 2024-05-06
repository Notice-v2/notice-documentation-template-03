'use client'

import { Box, Image } from '@chakra-ui/react'

interface Props {
	src: string
}

export const Logo = ({ src }: Props) => {
	return (
		<Box w="fit-content" h="fit-content" borderRadius={'50%'}>
			<Image src={src} h={{ base: 20, md: 25, lg: 30 }} w={{ base: 20, md: 24, lg: 30 }} />
		</Box>
	)
}
