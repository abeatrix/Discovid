import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative
`
export const HeaderBG = styled.div`
    positionL absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
    opacity: 50%;
    z-index: 0;
`
export const HeaderContent = styled.div`
    width: 100%;
    z-index: 3;
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
`
export const HeaderH1 = styled.h1 `
    color: #6FFFB0;
    font-size: 50px;
    text-align: center;
    font-family: 'Sarina', cursive;
`
export const FormContainer = styled.div`
    z-index: 3;
    max-width: 100%;
    height: 500px;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
