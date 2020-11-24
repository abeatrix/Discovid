import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Video from './video.mp4'
import {HeaderContainer, HeaderBG, VideoBG, HeaderContent, HeaderH1} from "./Styled"
import Menu from '../Landing/Menu';

const Header = () => {

    return (
        <>
            <HeaderContainer>
                <HeaderBG>
                    <VideoBG autoPlay loop muted src={Video} type='video/mp4' />
                </HeaderBG>
                <HeaderContent>
                    <Menu>
                        <HeaderH1>logo</HeaderH1>                        
                    </Menu>
                </HeaderContent>
            </HeaderContainer>
        </>
    );
}

export default Header;
