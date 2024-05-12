'use client'

import { Box, SimpleGrid } from '@chakra-ui/react'
import { useRef } from 'react'
import { DocumentCard } from './DocumentCard'

interface Props {
	pages: any[]
	accentColor?: string
}

export const Articles = ({ pages, accentColor }: Props) => {
	const ref = useRef(null)

	return (
		<Box mt={{ base: '0px', lg: '-150px' }} boxSizing="border-box" mx="auto" py="20px" w="100%" h="fit-content">
			<SimpleGrid columns={{ base: 1, sm: 2 }} spacing={8}>
				{pages?.map((page) => (
					<DocumentCard key={page._id} page={page} accentColor={accentColor} />
				))}
			</SimpleGrid>
		</Box>
	)
}
