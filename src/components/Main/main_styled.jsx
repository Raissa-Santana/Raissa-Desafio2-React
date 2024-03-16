import styled,{css} from "styled-components";

const center = css`
 display: flex;
 align-items: center;
 justify-content: space-around;
 padding: 20px 0;
`

export const Main  = styled.main`
    ${center}
    background-color: #8000ff;
    height: 80vh;

    img{
        height: 100%;
        border-radius: 25px;
    }
`
export const Sobre =styled.div`
    width: 50%;

    h1{
        color: aliceblue;
        font-size: 100px;
    }

    p{
        font-size: 20px;
        color: aliceblue;
        text-align: justify;
        gap: 100px;
    }
`
