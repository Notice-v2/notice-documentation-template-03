'use client'

import { Flex, Spinner } from '@chakra-ui/react'

export default function Loading() {
	return (
		<Flex justify="center" align="center" h="100vh" mx="auto" gridArea={'main'}>
			<Spinner size="xl" color="blue" />
		</Flex>
	)
}
