import { AiOutlineClose } from 'react-icons/ai'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { BiUserCircle } from 'react-icons/bi'

const BookModal = ({ book, onClose }) => {
    return (
        <div
            className='fixed bg-black/60 top-0 bottom-0 left-0 right-0 z-50 flex justify-center items-center'
            onClick={onClose}
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className='w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'
            >
                <AiOutlineClose
                    className='absolute right-6 top-6 text-3xl text-red-600 cusor-pointer'
                    onClick={onClose}
                />
                <h2 className='w-fit px-2 py-1 bg-red-300 rounded-lg'>
                    {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <p className='my-2'>
                Meine deutschen Landsleute, Männer und Frauen, (lange Pause) Regierungswechsel 
                hat es in der Geschichte und in der Geschichte unseres Volkes häufig gegeben. 
                Sicher ist jedoch, dass es nie einen Regierungswechsel mit so weitreichenden 
                Folgen gegeben hat wie den vor acht Jahren. Damals war die Lage des Reiches 
                verzweifelt. Wir wurden aufgefordert, die Führung der Nation in einem Moment zu 
                übernehmen, in dem sie sich nicht in Richtung eines großen Aufstiegs zu entwickeln 
                schien. Wir erhielten die Macht unter dem denkbar größten Druck, dem Druck des 
                Wissens, dass allein alles verloren war und dass dies in den Augen der edelsten.
                </p>
            </div>
        </div>
    )
}

export default BookModal