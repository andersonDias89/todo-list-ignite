import { RiDeleteBin6Line } from 'react-icons/ri'


export const Task = ({ title }) => {
    return (
        <>
            <ul className='w-4/6 m-auto p-3 bg-box mb-2'>
                <li className='flex justify-between items-center'>
                    <div className='space-x-2'>
                        <input type="checkbox" />
                        <span className='text-white'>{title}</span>
                    </div>
                    <div>
                        <RiDeleteBin6Line />
                    </div>
                </li>
            </ul>
        </>

    )
}