import React from 'react';
import {FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FootLinkItem, FooterLink, MainFooterLinkItems, SocialIconLink} from './Styled';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FootLinkItem>MAIN</FootLinkItem>
                            <FooterLink to='/'>Blog</FooterLink>
                            <FooterLink to='/'>About Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FootLinkItem>EVENTS</FootLinkItem>
                            <FooterLink to='/'>Past</FooterLink>
                            <FooterLink to='/'>Upcoming</FooterLink>
                        </FooterLinkItems>

                        <MainFooterLinkItems>
                            <FootLinkItem>
                            <img
                                alt="Discovid"
                                src="https://i.ibb.co/j5PM4hV/discovid.png"
                                width="100px"
                                className="d-inline-block align-top"
                            />
                            </FootLinkItem>
                            <FooterLink>Tel. (123) 456-7890</FooterLink>
                            <FooterLink to='/'>info@discovid.com</FooterLink>
                            <FootLinkItem>
                                <SocialIconLink href='https://github.com/abeatrix' target='_blank' aria-label='GitHub'><FaGithub/></SocialIconLink>
                                <SocialIconLink href='https://github.com/gabtorre' target='_blank' aria-label='Twitter'><FaTwitter/></SocialIconLink>
                                <SocialIconLink href='https://facebook.com' target='_blank' aria-label='Facebook'><FaFacebook/></SocialIconLink>
                                <SocialIconLink href='https://instagram.com' target='_blank' aria-label='Facebook'><FaInstagram/></SocialIconLink>
                            </FootLinkItem>
                        </MainFooterLinkItems>

                        <FooterLinkItems>
                            <FootLinkItem>SUPPORT</FootLinkItem>
                            <FooterLink to='/'>FAQs</FooterLink>
                            <FooterLink to='/'>Contact Us</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FootLinkItem>LEGAL</FootLinkItem>
                            <FooterLink to='/'>Privacy Policy</FooterLink>
                            <FooterLink to='/'>Disclaimer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
