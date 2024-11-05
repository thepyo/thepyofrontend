import useSWR from 'swr'

export function useServices(){

    const {data: services, isLoading, isValidating, error, mutate} = useSWR(`/services`,{
        refreshInterval: 1000 * 60,
        dedupingInterval: 1000 * 60,
        refreshWhenHidden: false,
        revalidateOnFocus: false,
        shouldRetryOnError: false
    })

    
    return{
        services,
        mutate,
        isLoading
    }
}