export const DEFAULT_COLOR = '#3182CE'

import { theme } from '@chakra-ui/pro-theme'
import { defineStyle, defineStyleConfig, extendTheme } from '@chakra-ui/react'
import { IBM_Plex_Sans } from 'next/font/google'

const IBM = IBM_Plex_Sans({
	weight: ['300', '400', '600'],
	subsets: ['latin'],
	display: 'swap',
})

export function createTheme() {
	const proTheme = extendTheme(theme)

	const extension = {
		colors: { ...proTheme.colors, brand: proTheme.colors.blue },
		fonts: {
			heading: IBM.style.fontFamily,
			body: IBM.style.fontFamily,
		},
		styles: {
			global: () => ({
				body: {
					bg: '#E8F2FC',
				},
			}),
		},

		components: {
			Code: codeTheme,
		},
	}

	return extendTheme(extension, proTheme)
}

const notice = defineStyle({
	borderRadius: '4px',
	fontSize: 'sm',
	padding: '1px',
	fontWeight: 600,
	color: '#b44437',
	background: 'rgba(250,239,240,.78)',
})

export const codeTheme = defineStyleConfig({
	variants: { notice: notice },
})
