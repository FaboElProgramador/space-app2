import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tag from "./Tags"
import Imagen from "./Imagen"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"
import Cargando from "../Cargando"

const GaleriaContainer = styled.div`
    display: flex;
    gap: 24px;
`

const SeccionFluida = styled.section`
    flex-grow: 1;
`

const ImagenesContainer = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 24px;
`

const Galeria = ({ setTag }) => {

    const { state } = useContext(GlobalContext);

    return (
        state.fotosDeGaleria.length == 0 ?
            <Cargando></Cargando> :
            <>
                <Tag setTag={setTag} />
                <GaleriaContainer>
                    <SeccionFluida>
                        <Titulo>Navegue por la galeria</Titulo>
                        <ImagenesContainer>
                            {state.fotosDeGaleria.filter(foto => {
                                return state.filtro == '' || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
                                    .includes(state.filtro.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                            })
                                .map(foto => <Imagen
                                    key={foto.id}
                                    foto={foto} />)
                            }
                        </ImagenesContainer>
                    </SeccionFluida>
                    <Populares />
                </GaleriaContainer>
            </>
    )
}

export default Galeria