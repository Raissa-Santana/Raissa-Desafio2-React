import * as S from "./header_styled"
import logo from "../../assets/logo.png"

export default function Header() {
  return (
   <S.Header>
       <img src={logo} alt="" />
       <h1>Olá, me chamo Raissa</h1>
       <ul>
          <li><a href="https://encurtador.com.br/oFGR6">Instagram</a></li>
          <li><a href="https://wa.me/5521971607287">Whatsapp</a></li>
          <li><a href="https://www.behance.net/EuSouRaissa">Behance</a></li>
          <li><a href="https://www.facebook.com/profile.php?id=61550792189811">Facebook</a></li>
       </ul>
   </S.Header>
  )
}
