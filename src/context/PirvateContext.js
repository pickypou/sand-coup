import { createContext, useState } from "react";

export const PrivateContext = createContext()

export function PrivateContextProvider(props) {


    const [selectRegime, setSelectRegime] = useState({
        sansSel: false,
        sansLactose: false,
        vegetarien: false,
        veganne: false
    })

    const toggleRecette = button => {
        if(button === "sansSel"){
            setSelectRegime({
                sansSel: true,
                sansLactose: false,
                vegetarien: false,
                veganne: false
            })
        }

        if(button === "sansLactose"){
            setSelectRegime({
                sansSel: false,
                sansLactose: true,
                vegetarien: false,
                veganne: false
            })
        }

        if(button === "vegetarien"){
            setSelectRegime({
                sansSel: false,
                sansLactose: false,
                vegetarien: true,
                veganne: false
            })
        }
        if(button === "veganne"){
            setSelectRegime({
                sansSel: false,
                sansLactose: false,
                vegetarien: false,
                veganne: true
            })
        }
    }



    return(
        <PrivateContext.Provider value={{ selectRegime, toggleRecette}}>
            {props.children}
        </PrivateContext.Provider>
    )

}