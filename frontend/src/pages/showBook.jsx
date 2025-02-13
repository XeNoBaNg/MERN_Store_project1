import React, { useEffect,useState } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowBook = () => {
    const [book,setBook] = useState([])
    const [loading,setLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        setLoading(true)
        axios
            .get(`http://localhost:5000/books/${id}`)
            .then((res) => {
                setBook(res.data)
                setLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Show Book</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col items-center justify-center border-2 border-sky-400 rounded-xl w-window p-4 min-h-16'>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>ID</span>
                        <span>{book._id}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>TITLE</span>
                        <span>{book.title}</span>
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>AUTHOR</span>
                        <span>{book.author}</span>  
                    </div>
                    <div className='my-4'>
                        <span className='text-xl mr-4 text-gray-500'>PUBLISH YEAR</span>
                        <span>{book.publishYear}</span>
                    </div>
                </div>  
            )}
        </div>
    )
}

export default ShowBook