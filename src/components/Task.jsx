import { RiDeleteBin6Line } from 'react-icons/ri'

export const Task = () => {
    return (
        <div>
            <header className='w-4/6 m-auto flex justify-between items-center mb-2'>
                <div className='text-xs space-x-1'>
                    <span className='text-blue'>Tarefas Criadas</span>
                    <span className='p-1 text-white bg-box rounded-md'>2</span>
                </div>

                <div className='text-xs space-x-1'>
                    <span className='text-blue'>Concluídas</span>
                    <span className='p-1 text-white bg-box rounded-md'>0 de 5</span>
                </div>
            </header>
            <ul className='w-4/6 m-auto p-3 bg-box'>
                <li className='flex justify-between items-center'>
                    <div className='space-x-2'>
                        <input type="checkbox" />
                        <span>Fazer um bolo</span>
                    </div>
                    <div>
                        <RiDeleteBin6Line />
                    </div>
                </li>
            </ul>
        </div>
    )
}