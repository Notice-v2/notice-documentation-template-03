import { CreatedWithNotice } from '@/components/CreatedWithNotice'
import { GridLayout } from '@/components/GridLayout'
import { LeftBar } from '@/components/LeftBar'
import { Navbar } from '@/components/Navbar'
import { NavLinks } from '@/components/NavLinks'
import { Providers } from '@/providers'
import { API, extractProjectID } from '@/tools/api'
import { headers } from 'next/headers'

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
						<CreatedWithNotice />
					</GridLayout>
				</Providers>
			</body>
		</html>
	)
}

async function getAllPages(searchParams?: Record<string, any>) {
	const projectId = extractProjectID(headers(), searchParams)
	if (!projectId) return null

	try {
		const { data } = await API.get(`/projects/${projectId}`)
		return data
	} catch (_) {
		return null
	}
}
