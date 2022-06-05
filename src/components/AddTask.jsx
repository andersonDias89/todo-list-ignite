export const AddTask = () => {
    return (
        <form className="w-4/6 m-auto p-3 flex -mt-8">
            <input
                className="w-4/5 bg-box outline-0 p-2 text-white placeholder:text-gray-600" type="text" placeholder="Adicione uma tarefa..."
            />
            <button
                type="button"
                className="flex-1 bg-blue text-white hover:bg-sky-600 transition-colors">
                Enviar
            </button>
        </form>
    )
}