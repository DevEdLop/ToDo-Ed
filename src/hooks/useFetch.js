import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const { data, hasError, isLoading } = state
    const getFetch = async () => {

        setState({
            ...state,
            isLoading: true
        })
        const resp = await fetch(url)
        const data = await resp.json()
        console.log(data)

        setTimeout(() => {

            setState({
                data,
                isLoading: false,
                hasError: null,
            })
        }, 1000);
    }

    useEffect(() => {
        getFetch()
    }, [url])



    return {
        data,
        hasError,
        isLoading,
    }
}