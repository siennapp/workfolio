import styled, { keyframes } from "styled-components"

const ScaleAni = keyframes`
    0%{
        max-width: 0; 
    }
    100%{
        max-width: 40vw; 
    }
`
const ScaleHorizontalAni = keyframes`
    0%{
        height: 0; 
        padding: 0;
    }
    100%{
        height: 200px;
        max-height: 20vw;
        padding: 3vh 25px;
    }
`
const TitleBox = styled.div`
    width: 40vw;
    max-width: 0px;
    margin-top: 5vh;
    transform-origin: left top;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    padding-left: 1vw;
    justify-content: flex-start;
    overflow: hidden;
    animation: ${ScaleAni} 500ms cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;
    animation-delay: 1.8s;
    @media (max-width: 992px) {
        width: 100%; 
        max-width: 100%; 
        margin-top: 0;
        padding: 0;
        height: 0; 
        max-height: 0;
        justify-content: center;
        display: block;
        animation: ${ScaleHorizontalAni} 350ms cubic-bezier(0.550, 0.085, 0.680, 0.530) forwards;
        animation-delay: 1.8s;
        
    }
    @media (max-width: 600px) {
        height: 200px; 
        max-height: 2100px;
        flex-direction: row;
        /* padding-left: 0; */
      
        padding: 2.5vh 15px !important;
        position:absolute;
        top: 0; left :0; 
        z-index: 100;
    }
    @media (max-width: 480px) {
        
        animation: none;
    }
`
const ListTitle = styled.div`
    width: 110%;
    height: 6.3vw;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    position: absolute; 
    top: 3.2vh; 
    padding-right: 5px;
    
    &:nth-child(2){
        top:calc( 3.2vh + 6vw );
       
    }
    &:nth-child(3){
        top: calc( 3.2vh + 13vw );
        @media (max-width: 992px) {
            display: block ;
        }
    }
    @media (max-width: 992px) {
        position: relative;  
        top: 0 !important; 
        width: auto; 
        display: inline-block;
        height: 8.5vw;
    }
   
`

const TextUp = keyframes`
    0%{
        transform: translateY(100%);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }

` 
const T = styled.span`
    font-size: 6.2vw;
    /* font-style: italic; */
    font-weight: 800 !important;
    letter-spacing: -0.04em;
    font-family: 'Montserrat', sans-serif;
    transform: translateY(100%);
    opacity: 0;
    animation: ${TextUp} .24s ease-out ;
    animation-fill-mode: forwards;
    &:nth-child(1){
        animation-delay: .4s;
    }
    &:nth-child(2){
        animation-delay: .45s;
    }
    &:nth-child(3){
        animation-delay: .5s;
    }
    &:nth-child(4){
        animation-delay: .55s;
    }
    &:nth-child(5){
        animation-delay: .6s;
    }
    @media (max-width: 992px) {
        font-size: 7.4vw;
    }
    @media (max-width: 768px) {
        font-size: 9.2vw;
    }
`
const T2 = styled(T)`
    position: relative; 
    left: 0; 
    &:nth-child(1){
        animation-delay: .7s;
    }
    &:nth-child(2){
        animation-delay: .75s;
    }
    &:nth-child(3){
        animation-delay: .8s;
    }
    &:nth-child(4){
        animation-delay: .85s;
    }
    &:nth-child(5){
        animation-delay: .9s;
    }
    &:nth-child(6){
        animation-delay: .95s;
    }
    &:nth-child(7){
        animation-delay: 1s;
    }
    &:nth-child(8){
        animation-delay: 1.05s;
    }
    &:nth-child(9){
        animation-delay: 1.1s;
    }
`
const S = styled(T)`
    min-width: 1.4vw;
    font-size: 4.8vw;
    animation: ${TextUp} .22s ease-in ;
    animation-fill-mode: forwards;
    &:nth-child(1){
        animation-delay: 1.2s;
    }
    &:nth-child(2){
        animation-delay: 1.25s;
    }
    &:nth-child(3){
        animation-delay: 1.3s;
    }
    &:nth-child(4){
        animation-delay: 1.35s;
    }
    &:nth-child(5){
        animation-delay: 1.4s;
    }
    &:nth-child(6){
        animation-delay: 1.45s;
    }
    &:nth-child(7){
        animation-delay: 1.5s;
    }
    &:nth-child(8){
        animation-delay: 1.55s;
    }
    &:nth-child(9){
        animation-delay: 1.6s;
    }
`


function MainTitle () {
    return(
        <TitleBox>
            <ListTitle>
                <T>W</T>
                <T>O</T>
                <T>R</T>
                <T>K</T>
            </ListTitle>
            <ListTitle>
                <T2>P</T2>
                <T2>O</T2>
                <T2>R</T2>
                <T2>T</T2>
                <T2>F</T2>
                <T2>O</T2>
                <T2>L</T2>
                <T2>I</T2>
                <T2>O</T2>
            </ListTitle>
            <ListTitle>
                <S>B</S>
                <S>Y</S>
                <S></S>
                <S>S</S>
                <S>I</S>
                <S>E</S>
                <S>N</S>
                <S>N</S>
                <S>A</S>
            </ListTitle>
        </TitleBox>
    )
}
export default MainTitle