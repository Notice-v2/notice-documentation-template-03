'use client'

import { Flex, Heading, Text } from '@chakra-ui/react'

export function NotFound() {
	return (
		<Flex flexDirection="column" alignItems="center" justifyContent="center" h="100vh" pb="32">
			<Heading size="4xl" color="slate.900" fontWeight="extrabold">
				Here in the game
			</Heading>
			<Text mt="2" fontSize="2xl" color="slate.700" fontWeight="medium">
				Notice Not Found
			</Text>
			<Text mt="4" fontSize="lg" color="slate.500" fontWeight="normal">
				The page requested could not be found on the server!
			</Text>
		</Flex>
	)
}
