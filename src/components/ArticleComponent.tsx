'use client'

import { Box, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { PageContent } from './blocks/render-blocks'
import { RightBar } from './RightBar'
import { SocialShare } from './SocialShare'

interface Props {
	data: any
}

export const ArticleComponent = ({ data }: Props) => {
	const formattedDate = useMemo(() => dayjs(data?.createdAt).format('MMM D, YYYY'), [data?.createdAt])

	function removeFirstElement(arr: any[]) {
		const newArr = arr.slice()
		newArr.shift()
		return newArr
	}

	const filteredContent = useMemo(() => removeFirstElement(data?.content ?? []), [data])
	const headers = useMemo(
		() => filteredContent.filter((item) => item.type === 'heading').map((heading) => heading.content) ?? [],
		[data]
	)

	return (
		<>
			<Box
				gridArea="main"
				px="20px"
				h="auto"
				mx={'auto'}
				mt="24px"
				mb={filteredContent.length > 0 ? '54px' : '24px'}
				maxW="700px"
				w="100%"
			>
				<Flex direction="column" justify="center" align="center" mx={'auto'}>
					<VStack gap={'12px'} py="12px" justify="center" align="flex-start" w="100%">
						<Flex maxW="700px" justify="center" align="flex-start" direction="column" w="100%" h="fit-content">
							<Heading as="h1" color="gray.600" fontSize={{ base: '2xl', md: '4xl' }} fontWeight="700" lineHeight="1.2">
								{data?.title}
							</Heading>
							<HStack mt="8px" justify="flex-start" align="center" gap="8px" w="100%">
								<Text flexShrink={0} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color="fg.muted">
									{formattedDate}
								</Text>
								<SocialShare />
							</HStack>
						</Flex>
					</VStack>
				</Flex>
				<Box maxW="700px" w="100%" fontSize={{ base: '16px', md: '18px' }}>
					<PageContent blocks={filteredContent} />
				</Box>
			</Box>
			{headers.length > 1 && <RightBar headers={headers ?? []} />}
		</>
	)
}
