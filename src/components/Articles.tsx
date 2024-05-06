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
		<Box boxSizing="border-box" mx="auto" mb="10px" w="100%" h="fit-content">
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
				{pages?.map((page) => (
					<DocumentCard key={page._id} page={page} accentColor={accentColor} />
				))}
			</SimpleGrid>
		</Box>
	)
}
