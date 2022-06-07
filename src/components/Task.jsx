import { useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'


export const Task = ({ title, onDeleteTask, id, isComplete }) => {
    const [check, setCheck] = useState(isComplete)

    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleCheck() {
        if (check === true) {
            setCheck(false)
        } else {
            setCheck(true)
        }

        console.log(check)

    }

   

    return (
        <>
            <ul className={`w-4/6 m-auto p-3 rounded-md bg-box mb-2 ${!check === false ? "opacity-30" : "opacity-100"}`}>
                <li className='flex justify-between items-center'>
                    <div className='space-x-2'>
                        <input
                            value={check}
                            onChange={handleCheck}
                            type="checkbox"
                        />
                        <span
                            className={`text-white ${!check === false ? "line-through" : "no-underline"}`} >
                            {title}
                        </span>
                    </div>
                    <button
                        onClick={handleDeleteTask}
                        type='button'
                    >
                        <div className='hover:text-red-800 transition-colors text-gray-700'>
                            <RiDeleteBin6Line />
                        </div>
                    </button>
                </li>
            </ul>
        </>

    )
}