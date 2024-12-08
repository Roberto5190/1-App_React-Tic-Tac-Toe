

const Square = ({ children, isSelected, updateBoard, index }) => {


    /* Genera dinámicamente el valor de la clase CSS:
    Siempre incluye la clase square.
    Si isSelected es true, agrega la clase is-selected. */
    const className = `square ${isSelected ? 'is-selected' : ''}`


    /* Llama a updateBoard con el índice del square,
    para indicar que el usuario hizo una jugada en esa posición.*/
    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div className={className} onClick={handleClick}>
            {children} {/*  Contenido que se muestra dentro del componente*/}
        </div>
    )
}

export default Square