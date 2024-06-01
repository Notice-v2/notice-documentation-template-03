'use client'

import { generateID } from '@/utils'
import { As, Heading } from '@chakra-ui/react'
import { Leaves } from '../Leaves'

interface Props {
	block: any
}

const tags: Record<number, As> = {
	1: 'h1',
	2: 'h2',
	3: 'h3',
	4: 'h4',
	5: 'h5',
	6: 'h6',
}

const styles = {
	'1': '25.6px',
	'2': '20.8px',
	'3': '17.6px',
}

export function HeaderBlock({ block }: Props) {
	const textAlign = block?.attrs?.textAlign || 'left'
	const id = generateID(block.content)

	return (
		<Heading
			id={id}
			w="100%"
			py="6px"
			fontWeight={700}
			as={tags[block.attrs.level as keyof typeof tags]}
			fontSize={styles[block.attrs.level as keyof typeof styles]}
			lineHeight={'36px'}
			textAlign={textAlign}
		>
			<Leaves leaves={block.content} />
		</Heading>
	)
}
