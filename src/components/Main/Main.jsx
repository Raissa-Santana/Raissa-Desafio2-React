import foto from "../../assets/foto.jpeg"
import * as S from "./main_styled"


export default function Main(){
    return(
        <S.Main>
            <S.Sobre>
               <h1>Sobre mim</h1>
               <p>Olá, me chamo  Raissa Santana, tenho 24 anos, sou designer há quase 4 anos, estudante de administração. Faço curso de computação gráfica na Escola de Entretenimento Zion e de desenvolvimento front-end no Vai Na Web.
Trabalho em uma agência de design e publicidade, lá sou responsavel pela criação de marcas, partes de edição e animação de video, modelagem 3D, e design para redes socias, e agora quero me aprofundar em UI/UX e desenvolvimento mobile.</p>
            
            <p>Sou carioca, moro na Pedra de Guaratiba, bairro localizado na Zona Oeste do Rio de Janeiro</p>

             <p>Eu tenho um gosto musical muito eclético, gosto de trap, mas também gosto de pagode, indie rock e pop.</p>
             
             <p>E filmes e séries, gosto de animação, comédia, terror, e outros genêros.</p>

            </S.Sobre>
            <img src={foto} alt="foto minha" />
        </S.Main>
    )
}