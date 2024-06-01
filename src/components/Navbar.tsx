'use client'

import { Box, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { useMemo } from 'react'
import { Logo } from './Logo'
import { NavigationDrawer } from './NavigationDrawer'

interface Props {
	meta: any
	pages: any
}

export const Navbar = ({ meta, pages }: Props) => {
	const title = useMemo(
		() =>
			meta?.find((m: any) => m.tagName === 'meta' && m.attributes?.property === 'og:site_name')?.attributes?.content,
		[meta]
	)
	const icon = useMemo(
		() => meta?.find((m: any) => m.tagName === 'link' && m.attributes?.rel === 'icon')?.attributes?.href,
		[meta]
	)

	return (
		<Flex
			as="nav"
			align="center"
			w="100%"
			px={{ base: 2, lg: 4 }}
			py={{ base: 4, lg: 6 }}
			maxH="4rem"
			bg={'transparent'}
			color="white"
			gridArea={'navbar'}
			position="sticky"
			top="0"
			zIndex={100}
			borderBottom="1px solid #D3D3D3"
			background={'white'}
		>
			<Flex gap={4} align="center" justify="start">
				<Box mt="4px" display={{ base: 'block', lg: 'none' }}>
					<NavigationDrawer pages={pages} />
				</Box>
				<Flex as={Link} href="/" gap={4} align="center" justify="start">
					{icon && <Logo src={icon} />}
					<Heading
						fontWeight="700"
						noOfLines={1}
						lineHeight={{ base: '3.5rem', md: '3.6rem' }}
						color="blackAlpha.800"
						as="h1"
						fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
					>
						{title}
					</Heading>
				</Flex>
			</Flex>
		</Flex>
	)
}
