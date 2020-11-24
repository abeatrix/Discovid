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
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding 0px 30px;
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
    height: 100px;
    padding: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const FeaturesContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    background: black;

    @media screen and (max-width: 800px){
        height: 600px;
    };
`

export const FeaturesHeader = styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 65px;
    text-align: left;
    margin-left: 1rem;
    @media screen and (max-width: 500px){
        font-size: 2rem;
    };
`

export const FeaturesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const FeaturesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const FeaturesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    padding: 0 50px;

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr 1fr;
        padding: 0 20px;
    }
`
export const FeaturesCard = styled.div`
    background: white;
    display: flex;
    align-items: center;
    border-radius: 10px;
    max-height: 350px;
    padding: 30px;
    box-shadow: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`

export const FeaturesCard2 = styled.div`
    background: white url("https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/sites/21/2019/06/30074333/EDCLV2019_0520_013108-7298_MVA-gallery.jpg)no-repeat fixed center;
    display: flex;
    align-items: center;
    border-radius: 10px;
    height: 200px;
    padding: 30px;
    box-shadow: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`
export const FeaturesIcon = styled.img`
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
`

export const PastContainer = styled.div`
    height: 350px;
    display: flex;
    flex-direction: column;
    background: black;

    @media screen and (max-width: 800px){
        height: auto;
    };
`
export const PastHeader = styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 30px;
    text-align: left;
    margin-left: 1rem;
    @media screen and (max-width: 500px){
        font-size: 2rem;
    };
`

export const PastWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-gap: 10px;
    padding: 0 50px;
    color: white;
    text-align: left;

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
