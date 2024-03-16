import * as S from "./components/Header/header_styled.jsx";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx"
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <>
    <S.GlobalStyled />
    <Header />
    <Main />
    <Footer />
    </>
  )
}
