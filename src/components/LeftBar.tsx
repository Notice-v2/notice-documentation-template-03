'use client'

import { Box, Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
	data: any
	noBorder?: boolean
}

export const LeftBar = ({ data, noBorder }: Props) => {
	const accentColor = data?.project?.accentColor
	const pathname = usePathname().substring(1)

	return (
		<>
			<Box
				gridArea={'sidebar'}
				position="sticky"
				top="4rem"
				width="270px"
				borderRight={noBorder ? 'none' : '1px solid #D3D3D3'}
				h="91vh"
				overflow={'auto'}
				display={{ base: 'none', lg: 'block' }}
			>
				<Flex direction="column" gap="6px" mt="24px" px="12px" w="100%">
					{data?.pages.map((page: any) => (
						<Box
							as={Link}
							href={page?.slug}
							key={page?._id}
							px={'8px'}
							py="10px"
							color={pathname === page?.slug ? accentColor : 'gray.600'}
							bg={pathname === page?.slug ? 'gray.100' : 'white'}
							borderRadius="4px"
							_hover={{ color: accentColor, bg: 'gray.100' }}
							transition={'all 0.3s ease'}
						>
							{' '}
							<Text fontSize="md" fontWeight={400} noOfLines={1}>
								{page?.title}
							</Text>
						</Box>
					))}
				</Flex>
			</Box>
		</>
	)
}
