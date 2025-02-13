import React, {useState} from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import { useSnackbar } from 'notistack'

const DeleteBook = () => {
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const {id} = useParams()
    const {enqueueSnackbar} = useSnackbar()

    const handleDeleteBook = () => {
        setLoading(true)
        axios
            .delete(`http://localhost:5000/books/${id}`)
            .then((res) => {
                setLoading(false)
                enqueueSnackbar("Book Deleted Successfully!", {variant : 'success'})
                navigate('/')
            })
            .catch((err) => {
                enqueueSnackbar("An Error Occured!", {variant : 'error'})
                console.log(err)
            })
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Delete Book</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
                <h1 className='text-2xl '>Are U Sure U Want to Delete This Book?</h1>
                <button 
                    className='p-4 bg-red-600 text-white- m-9 w-full'
                    onClick={handleDeleteBook}
                >
                    Yes, Delete It
                </button>
            </div>
        </div>
    )
}

export default DeleteBook