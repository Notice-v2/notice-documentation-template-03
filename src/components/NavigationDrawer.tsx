'use client'

import { MenuIcon } from '@/icons'
import {
	Box,
	CloseButton,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	Flex,
	IconButton,
	Text,
	useDisclosure,
} from '@chakra-ui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
	pages: any
}

export const NavigationDrawer = ({ pages }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	const pathname = usePathname().substring(1)

	return (
		<>
			<IconButton
				colorScheme="gray"
				aria-label="Menu"
				size="xs"
				variant={'ghost'}
				icon={<MenuIcon size={20} color="black" />}
				onClick={onOpen}
			/>

			<Drawer placement={'left'} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<CloseButton my="12px" ml="auto" mr="12px" onClick={onClose} />
					<DrawerBody>
						<Flex direction="column" gap="6px" mt="12px" w="100%">
							{pages.pages.map((page: any) => (
								<Box
									as={Link}
									href={page?.slug}
									key={page?._id}
									px={'8px'}
									py="10px"
									color="gray.600"
									textDecoration="none"
									bg={pathname === page?.slug ? 'gray.100' : 'white'}
									borderRadius="4px"
									_hover={{ bg: 'gray.100', borderBottom: 'none' }}
									transition={'all 0.3s ease'}
									onClick={onClose}
								>
									{' '}
									<Text fontSize="md" fontWeight={pathname === page?.slug ? 700 : 400} noOfLines={1}>
										{page?.title}
									</Text>
								</Box>
							))}
						</Flex>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}
