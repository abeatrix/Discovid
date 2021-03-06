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
    background: lightblue url("https://i.ibb.co/PCw3z6n/alexander-popov-h-Tv8aa-Pzi-OQ-unsplash.jpg") no-repeat fixed center;
`
export const HeaderTitleContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding 50px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px;
`
export const HeaderTitleH1 = styled.h1 `
    color: white;
    font-size: 80px;
    text-align: center;
    font-weight: bold;

    @media screen and (max-width: 800px){
        font-size: 30px;
    }

`
export const HeaderTitleP = styled.p`
    font-size: 24px;
    color: white;
    font-weight:  medium;
    font-style: italic;

    @media screen and (max-width: 800px){
        font-size: 20px;
    }
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

export const HeaderPicBG = styled.div`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: lightblue url("https://i.ibb.co/PCw3z6n/alexander-popov-h-Tv8aa-Pzi-OQ-unsplash.jpg") no-repeat fixed center;
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
    color: white;
    font-size: 50px;
    text-align: center;
    font-family: 'Inter', sans-serif
`
export const FormContainer = styled.div`
    max-width: 100%;
    height: auto;
    display: flex;
    padding: 5%;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 800px){
        margin: 5%;
        padding: 5%;
    }
`

export const HeaderH2 = styled.h2 `
    text-align: center;
    font-size: 42px;

    @media screen and (max-width: 800px){
        font-size: 20px;
    }
`

export const FormHeading = styled.div`
    padding: 10px;
`

export const FeaturesContainer = styled.div`
    min-height: 500px;
    display: flex;
    flex-direction: column;
    background: black;
    padding: 10%

    @media screen and (max-width: 800px){
        padding: 10%;
        margin: 5%;
    };
`


export const FeaturesWrapper = styled.div`
    min-width: 100%;
    min-height: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: space-evenly;
    grid-gap: 2%;
    padding: 5%;

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
        padding: 5%;
        height: auto;
    }
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

export const FeaturesCard = styled.div`
    background: white;
    display: flex;
    align-items: center;
    height: 300px;
    box-shadow: none;
    transition: all 0.2s ease-in-out;
    border: 0px!important;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`
export const FeaturesCardTop = styled.div`
    display: flex;
    align-items: center;
    height: 150px;
`
export const FeaturesCardBot = styled.div`
    display: flex;
    align-items: center;
    height: 150px;
`

export const FeaturesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const FeaturesIcon = styled.img`
    top: 0;
    width: 100%;
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
