'use client'
import React, { ReactNode, useEffect, useState } from 'react'

export interface IPagesContext {
	pages: any
}

interface IPagesProvider {
	children: ReactNode
	pages: any
}

export const PagesContext = React.createContext<IPagesContext | null>(null)

export const PagesProvider = ({ children }: IPagesProvider) => {
	const [pages, setPages] = useState([])

	useEffect(() => {
		setPages(pages)
	}, [pages])

	return <PagesContext.Provider value={{ pages }}>{children}</PagesContext.Provider>
}

export const usePages = () => {
	const context = React.useContext(PagesContext)
	if (context === null) throw new Error('Received null while reading useContext(LangContext).')
	return context
}
