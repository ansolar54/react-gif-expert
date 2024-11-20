import { useState } from "react"


export const AddCategory = ({
    // setCategories
    onNewCategory
}) => {

    const [inputV, setInputV] = useState('')

    const onChangeValue = ({ target }) => {
        setInputV(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const inputVal = inputV.trim();
        if (inputVal.length <= 1) return;
        // console.log(inputV)

        // setCategories(((cat) => [...cat, inputV])) //FUNCIÓN ACTUALIZADORA
        onNewCategory(inputVal)
        setInputV('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputV}
                onChange={onChangeValue}
            // onChange={(e) => setInputV(e.target.value)} // FORMA CONVENCIONAL
            // onChange={({target}) => setInputV(target.value)}
            />
        </form>

    )
}
