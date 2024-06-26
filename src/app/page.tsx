import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import HomeComponent from '../components/HomeComponent'
import { API, extractProjectID } from '../tools/api'

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

export default async function page({ searchParams }: { searchParams?: Record<string, any> }) {
	const projectData = await getAllPages(searchParams)
	if (projectData.pages?.length > 1) redirect(projectData?.pages[0]?.slug)

	return <HomeComponent pages={projectData.pages} />
}
