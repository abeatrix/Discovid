import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Video from './video.mp4'
import {HeaderContainer, HeaderBG, VideoBG, HeaderTitleP, HeaderContent, HeaderH1, HeaderPicBG, HeaderTitleH1, HeaderTitleContent} from "./Styled"
import Menu from '../Landing/Menu';
import "../../App.css"

const Header = () => {

    return (
        <>
            <HeaderContainer>
                <HeaderBG>
                    {/* <VideoBG autoPlay loop muted src={Video} type='video/mp4' /> */}
                    <HeaderPicBG/>
                </HeaderBG>
                <HeaderContent>
                    <Menu>
                        <HeaderH1>logo</HeaderH1>
                    </Menu>
                </HeaderContent>
                <HeaderTitleContent>
                        <HeaderTitleH1>GET JIGGY WITH IT</HeaderTitleH1>
                        <HeaderTitleP>“Finally, a party I can go to in my socks”</HeaderTitleP>
                        <HeaderTitleP>- Visnu Ghosh</HeaderTitleP>
                </HeaderTitleContent>
            </HeaderContainer>
        </>
    );
}

export default Header;
