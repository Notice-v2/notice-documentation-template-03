'use client'

import { generateID } from '@/utils'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

interface Props {
	headers: any[]
}
export const RightBar = ({ headers }: Props) => {
	return (
		<Box
			display={{ base: 'none', lg: 'block' }}
			gridArea={'anchor'}
			position="sticky"
			top="4rem"
			width="270px"
			h="91vh"
			overflow={'auto'}
		>
			<Heading as="h6" lineHeight={'1.2rem'} fontSize="sm" color="gray.500" fontWeight="700" px="24px" pt="52px">
				{'on this Page'.toUpperCase()}
			</Heading>
			<Flex direction="column" w="100%" mt="12px" mb={'24px'}>
				{headers.map((header) => {
					const id = generateID(header)
					return (
						<Box
							as="a"
							href={`#${id}`}
							key={id}
							px={'24px'}
							py="6px"
							color="black"
							bg="white"
							borderRadius="4px"
							_hover={{ color: 'blue.600' }}
							transition={'all 0.3s ease'}
						>
							<Text noOfLines={1}> {id}</Text>
						</Box>
					)
				})}
			</Flex>
		</Box>
	)
}
