'use client'

import { Box } from '@chakra-ui/react'
import { Articles } from './Articles'
import { Hero } from './Hero'
import { Navbar } from './Navbar'

interface Props {
	data: any
}

export const HomeComponents = ({ data }: Props) => {
	return (
		<Box mx="auto" maxW="1118px" px={{ base: '20px', md: '34px', lg: '52px' }}>
			<Navbar meta={data?.metadata ?? []} />
			<Box as="section">
				<Hero project={data?.project} pages={data?.pages} accentColor={data?.project?.accentColor} />
			</Box>
			<Box mt={{ base: '40px', lg: '28px' }} mb="52px" as="section">
				<Articles pages={data?.pages} accentColor={data?.project?.accentColor} />
			</Box>
		</Box>
	)
}
