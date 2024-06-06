
import logo from '../../img/logo.svg'
import styled from 'styled-components'

const LogoDiv = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImg = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoDiv>
            <LogoImg src={logo} alt='Alfala logo'></LogoImg>
            <p><strong>Alfala </strong>Books</p>
        </LogoDiv>
    )
}

export default Logo;