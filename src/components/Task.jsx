import { useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri'


export const Task = ({ title, onDeleteTask, task, handleToggleTaskCompletion }) => {
    return (
        <>
            <ul className={`w-4/6 m-auto p-3 rounded-md bg-box mb-2 ${!task.isComplete === false ? "opacity-30" : "opacity-100"}`}>
                <li className='flex justify-between items-center'>
                    <div className='space-x-2'>
                        <input

                            defaultChecked={task.isComplete}
                            onClick={() => handleToggleTaskCompletion(task.id)}
                            type="checkbox"
                        />
                        <span
                            className={`text-white ${!task.isComplete === false ? "line-through" : "no-underline"}`} >
                            {title}
                        </span>
                    </div>
                    <button
                        onClick={() => onDeleteTask(task.id)}
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