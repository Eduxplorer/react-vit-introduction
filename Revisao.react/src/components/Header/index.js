import Logo from '../Logo'
import OptionsHeader from '../OptionsHeader'
import IconesHeader from '../iconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo />
            <OptionsHeader />
            <IconesHeader />
        </HeaderContainer>

    )
}

export default Header