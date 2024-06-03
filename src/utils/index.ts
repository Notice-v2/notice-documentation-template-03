export const generateID = (data: Record<string, any>[]): string => {
	return data.map((item) => item.text.replace(/\s+/g, '')).join('-')
}

export const joinHeaders = (headers: Record<string, any>[]) => {
	let result = ''
	for (const obj of headers) {
		if (obj.type === 'text') {
			result += obj.text + ' '
		}
	}
	return result.trim()
}

export const getNextAndPreviousPages = (pages: Record<string, any>[], slug: string) => {
	const index = pages.findIndex((page) => page.slug === slug)

	if (index === -1) {
		return { previous: null, next: null }
	}

	const previous = index > 0 ? pages[index - 1] : null
	const next = index < pages.length - 1 ? pages[index + 1] : null

	return { previous, next }
}
