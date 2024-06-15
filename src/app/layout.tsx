import { CreatedWithNotice } from '@/components/CreatedWithNotice'
import { GridLayout } from '@/components/GridLayout'
import { LeftBar } from '@/components/LeftBar'
import { Navbar } from '@/components/Navbar'
import { NavLinks } from '@/components/NavLinks'
import { Providers } from '@/providers'
import { API, extractProjectID } from '@/tools/api'
import { headers } from 'next/headers'
import { cache } from 'react'

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const projectData = await getAllPages({ target: '2dfc89e6-de21-4c63-9a83-d5d9afe8c29c' })

	return (
		<html lang="en">
			<body>
				<Providers>
					<GridLayout firstRoute={projectData?.pages[0]?.slug}>
						<Navbar meta={projectData?.metadata ?? []} pages={projectData} />
						{children}
						<LeftBar data={projectData} />
						<NavLinks pages={projectData?.pages} />
						<CreatedWithNotice shouldHide={projectData?.project?.hideCreatedWithNotice} />
					</GridLayout>
				</Providers>
			</body>
		</html>
	)
}

export const revalidate = 3600

const getAllPages = cache(async (searchParams?: Record<string, any>) => {
	const projectId = extractProjectID(headers(), searchParams)
	if (!projectId) return null

	try {
		const { data } = await API.get(`/projects/${projectId}`)
		return data
	} catch (_) {
		return null
	}
})
