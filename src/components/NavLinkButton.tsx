import { NarrowArrowLeftIcon, NarrowArrowRightIcon } from '@/icons'
import { Link } from '@chakra-ui/next-js'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'

interface Props {
	page: any
	flip?: boolean
}

export const NavLinkButton = ({ page, flip }: Props) => {
	return (
		<Link w={{ base: '100%', sm: '50%' }} href={page?.slug} _hover={{ textDecoration: 'none' }}>
			<Flex
				direction="row"
				justify="space-between"
				align="center"
				w="100%"
				gap="20px"
				boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px;"
				borderRadius="6px"
				padding="16px"
				transition="all 0.3s ease"
				_hover={{ transform: 'translateY(-4px)', boxShadow: 'rgba(0, 0, 0, 0.16) 0px 4px 8px;' }}
			>
				{!flip && (
					<Box flexShrink={0}>
						<NarrowArrowLeftIcon size={26} color="#808080" />
					</Box>
				)}
				<Flex
					flexGrow={0}
					direction="column"
					position="relative"
					align={flip ? 'flex-start' : 'flex-end'}
					justify="center"
				>
					<Heading as="h6" lineHeight={'1.2rem'} fontSize="sm" color="gray.500" fontWeight="700">
						{flip ? 'Next Page' : 'Previous Page'}
					</Heading>
					<Text noOfLines={1} color={'gray.600'}>
						{' '}
						{page?.title}
					</Text>
				</Flex>
				{flip && (
					<Box flexShrink={0}>
						{' '}
						<NarrowArrowRightIcon size={26} color="#808080" />{' '}
					</Box>
				)}
			</Flex>
		</Link>
	)
}
