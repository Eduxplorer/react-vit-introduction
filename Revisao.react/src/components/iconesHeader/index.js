import './style.css'
import perfil from '../../img/perfil.svg'
import sacola from '../../img/sacola.svg'



const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <ul className='icones'>
            {icones.map((imagem) => (
                <li className='icone'><img src={imagem} alt="logo" /></li>
            ))}
        </ul>
    )
}

export default IconesHeader;