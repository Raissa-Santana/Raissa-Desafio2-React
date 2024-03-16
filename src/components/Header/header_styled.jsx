import styled,{createGlobalStyle, css} from "styled-components"

export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
    }
`

const central = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Header = styled.header`
    background-color: #ff4400;
    padding: 0 100px;
    ${central}

    img{
        width: 100px;
        transform: rotate(361deg);
        animation: balance 2s alternate 150ms  infinite;
        
        
        @keyframes balance {
            0%{
                transform: rotate(0deg);
            }
            100%{
                transform: rotate(361deg);
            }


            
        }
    }

    h1{
        color: aliceblue;
        font-size: 50px;
    }

    ul{
        ${central}
        gap: 50px;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: aliceblue;
        font-size: 20px;
        font-weight: 700;
        font-style: normal;
        cursor: pointer;

        &:hover{
            color: #1900ff;
            transition: all 600ms;
        }
    }
`