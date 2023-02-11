import { ChangeEvent, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'
import {productService} from "@/services/product.service";

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['search videos', debounceSearch],
		() => productService.bySearchTerm(debounceSearch),
		{
			select: ({ data }) => data.slice(0, 3),
			enabled: !!debounceSearch
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return {handleSearch,isSuccess,data,searchTerm}
}
