'use client'

import { Box, Heading, Spinner } from '@chakra-ui/react'

interface Props {
	pages: Record<string, any>[]
}

export default function HomeComponent({ pages }: Props) {
	return (
		<Box gridArea="main" mx="auto" maxW="700px" w="100%">
			{pages.length > 1 ? <Spinner size="xl" color="blue" /> : <Heading as="h1">No pages found</Heading>}
		</Box>
	)
}
