'use client'

import { getNextAndPreviousPages } from '@/utils'
import { Box, Flex } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'
import { NavLinkButton } from './NavLinkButton'

interface Props {
	pages: Record<string, any>[]
}

export const NavLinks = ({ pages }: Props) => {
	const pathname = usePathname().substring(1)
	const links = getNextAndPreviousPages(pages, pathname)

	return (
		<Box boxSizing="border-box" w="100%" mx={{ base: '12px', sm: 'auto' }} mb="54px" gridArea={'navLinks'}>
			<Flex direction={{ base: 'column', sm: 'row' }} gap="8px" w="100%" justifyContent="center" align="center">
				{links.previous !== null && <NavLinkButton page={links.previous} />}
				{links.next !== null && <NavLinkButton page={links.next} flip />}
			</Flex>
		</Box>
	)
}
