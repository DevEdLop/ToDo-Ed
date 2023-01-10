
import { Loading, PostView } from '../components'

import { useCounter, useFetch } from "../hooks/"

const Layout = () => {


    const { count, increment, decrement, reset } = useCounter(1)

    const url = `https://jsonplaceholder.typicode.com/posts/${count}`

    const { data, _hasError, isLoading } = useFetch(url)


    return (
        <>


            <h1 className="text-center">PlaceHolder Post</h1>
            <hr />

            <div>
                <div className="container mb-2">

                    {
                        isLoading ?
                            (<Loading message={'Generando post...'} />)
                            :
                            (
                                !!data && <PostView {...data} reset={reset} />
                            )
                    }
                </div>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-dark"
                        onClick={() => increment(1)}>
                        Next Post
                    </button>
                    <button className="btn btn-outline-dark"
                        onClick={() => decrement(1)}>
                        Previous Post
                    </button>
                </div>

            </div>
        </>

    )
}

export default Layout

