'use client'

import { Box, Image } from '@chakra-ui/react'

interface Props {
	src: string
}

export const Logo = ({ src }: Props) => {
	return (
		<Box w="fit-content" h="fit-content" borderRadius={'50%'}>
			<Image src={src} h={{ base: 22, md: 30 }} w={{ base: 22, md: 30 }} />
		</Box>
	)
}
