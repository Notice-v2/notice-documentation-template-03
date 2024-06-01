import { NotFound } from '@/components/NotFound'

export const CustomErrorPage = async () => {
	return (
		<div style={{ width: '100%', margin: 'auto' }}>
			<NotFound />
		</div>
	)
}
