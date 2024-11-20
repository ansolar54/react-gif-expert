import { useState } from "react";
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components"; // SE CREA EL INDEX PARA QUE SE PUEDA EXPORTAR MEJOR

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (value) => {

        if (categories.includes(value)) return; // COMPARA SI YA EXISTE
        setCategories([value, ...categories,]) // el operador de ... hace copia del array
        // setCategories( ca => [...ca , 'byee']) // FUNCIÓN ACTUALIZADORA
    }

    return (
        <>
            {/* TITULO */}
            <h1>GifExpertApp</h1>
            {/* <h1>¡Feliz Día del Hombre!</h1> */}

            {/* INPUT */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={onAddCategory}

            />
            {/* <li>{categories}</li> */}
            {categories.map((c) => (
                <GifGrid
                    key={c}
                    category={c}
                />
            ))}
        </>
    )
}

export default GifExpertApp