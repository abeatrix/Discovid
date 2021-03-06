import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    background: black;
    padding: 10%

`
export const FooterWrapper = styled.div`
    display: grid;

    justify-content: space-evenly;
    grid-gap: 2%;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const FooterLinksWrapper = styled.div`
    display: flex;
    text-align: center;
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
    width: 200px;
    box-sizing: border-box;
    color: white;

    @media screen and (max-width: 800px){
        display: none
    }
`

export const MainFooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;

    text-align: center;
    width: 200px;
    box-sizing: border-box;
    color: white;
`
// align-items: flex-start;

export const FootLinkItem = styled.h1`
    font-size: 15px;
    margin-bottom: 16px;
    font-weight: bold;
`

export const FootLogo = styled.div`
    font-size: 15px;
    margin-bottom: 16px;
    font-weight: bold;
`

export const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 15px;

    &:hover {
        color: #65E082;
        transition: 0.3s ease-out;
    }
`

export const FooterSocialContainer = styled.section`
    width: 100%;
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1000px;
    margin: 50px auto;
`

export const SocialLogo = styled(Link)`
    color: white;
    justify-self: start;
    text-decoration: none;
    font-size: 12px;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    font-weight: bold;

    &:hover {
        color: #6FFFB0;
        transition: 0.3s ease-out;
    }
`

export const CopyRights = styled.small`
    color: white;
    margin-bottom: 15px;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 250px;
`

export const SocialIconLink = styled.a`
    color: white;
    font-size: 20px;
    padding: 0 10px;

    &:hover {
        color: #6FFFB0;
        transition: 0.3s ease-out;
    }
`