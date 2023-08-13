import styled, { keyframes } from "styled-components";

interface ItemProps {
    id: string;
    name: string;
    thumbImg: string;
    contentImg: string;
    skills: string[]
    modalOpen: () => void;
}

const FadeUp = keyframes`
    0%{
        opacity: 0;
        top: 50px;
    }
    100%{
        opacity: 1;
        top: 0;
    }
`


const ItemWrap = styled.div<{bg: string}>`
    width: 100%; 
    position: relative; 
    margin-bottom: 10px; 
    height: 8.4vh;
    cursor: pointer;
    color: #212121; 
    display: flex;
    opacity: 0;
    animation: ${FadeUp} 500ms cubic-bezier(0.175, 0.885, 0.320, 1.275);
    //animation: ${FadeUp} 300ms ease-in-out;
    animation-fill-mode: both;
    &:last-child{
        border-bottom: 0; 
    }
    span{
        font-size: 15px; 
        font-weight: 600;
        font-family: 'Montserrat', sans-serif;
        color: #FF0000;
        margin-right: 30px; 
        position: absolute;
        left: -40px;
        
    }
    h2{
        max-width: 11vw;
        font-size: 1.2vw; 
        font-weight: 700;
        margin: 0; 
        word-break: keep-all;
        word-wrap: break-word;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        line-height: 1.2em;
        transition: .12s ease-in-out;
        padding: 0 10px;
        @media (max-width: 992px) {
            max-width: 14vw;
            font-size: 1.6vw; 
        }
        @media (max-width: 600px) {
            max-width: 100%;
            width: 100%; 
            font-size: 3.9vw; 
            justify-content: left;
        }
        @media (max-width: 480px) {
            font-size: 5vw; 
            position: relative;
            top: -3px;
            text-align: left; 
        }
    }
    &:hover{
        .fadeIn{
            opacity: 1;
        }
    }
    &:first-child{
        .box-start {
            width: 36vh;
        }
    }
    &:nth-child(3){
        .box-start {
            width: 26vw;
        }
    }
    &:nth-child(4n){
        .box-start {
            width: 36vw;
        }
    }
    &:nth-child(5n){
        .box-start {
            width: 24vh;
        }
    }
    &:nth-child(7n){
        .box-start {
            width: 48vh;
        }
    }
    transition: .12s ease-in-out;
   
    &:hover{
        transition: 0s ease-in-out;
        .box-start, .box-end{
            width:0
        }
        h2{
            color: rgba(220,3,3,1);
        }
    }
    @media (max-width: 600px) {
        height: auto;  
        margin: 0px 20px 40px 0px;
        flex-direction: column;
    }
    @media (max-width: 480px) {
        height: auto;  
        margin: 0 0 40px 0;
        flex-direction: column;
    }
    &:nth-child(2){
        animation-delay: .2s
    }
    &:nth-child(3){
        animation-delay: .35s
    }
    &:nth-child(4){
        animation-delay: .5s
    }
    &:nth-child(5){
        animation-delay: .65s
    }
    &:nth-child(6){
        animation-delay: .8s
    }
    &:nth-child(7){
        animation-delay: .95s
    }
    &:nth-child(8){
        animation-delay: 1.1s
    }
    &:nth-child(9){
        animation-delay: 1.25s
    }
    &:nth-child(10){
        animation-delay: 1.4s
    }
`
const BoxStart = styled.div<{bg: string}>`
    width: 12vh; 
    height: 100%; 
    background-image: url( https://siennapp.github.io/static/${(props)=> props.bg });
    background-size: contain;
    transition: .2s;
    @media (max-width: 600px) {
        width: 0 !important; 
        flex-grow: 0; 
    }
`
const BoxEnd = styled.div<{bg: string}>`
    flex-grow: 1; 
    height: 100%; 
    transition: .2s;
    background-image: url( https://siennapp.github.io/static/${(props)=> props.bg });
    background-size: contain;
    @media (max-width: 600px) {
        width: 0;
        flex-grow: 0; 
    }
`
const ThumbnailWrap = styled.div`
    position: fixed; 
    left: 6vw; 
    top: 52vh;
    width: 26vw; 
    max-width: 430px;
    height: 19vw; 
    max-height: 300px;
    opacity: 0;
    @media (max-width: 992px) {
        width: 32vw; 
        height: 24vw; 
        top: 4vh; 
        left: 52vw; 
        display: none;
    }
    
    @media (max-width: 600px) {
        position: relative; 
        top:0; left:0; 
        opacity: 1;
        width: 100%; 
        max-width: 70vw;
        height: auto;
        opacity: 1;
        display: block;
    }
    @media (max-width: 480px) {
        max-width: 100vw;
    }
`
const Thumbnail = styled.div<{bg: string}>`
    width: 100%; 
    height: 100%; 
    background-image: url( https://siennapp.github.io/static/${(props)=> props.bg });
    background-position: center center;
    background-size: cover;
    border-radius: 40px;

    transition: .2s; 
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.1);
    display: flex;
    @media (max-width: 600px) {
        height: 48vw;
        max-width: 100%;
        max-height: 300px;
        margin-bottom: 15px;
    }
    @media (max-width: 480px) {
        height: 58vw;
        margin-bottom: 0;
    }
`
const Skills = styled.div`
    height: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px 10px; 
    position: absolute;
    left: 100%; 
    top: 0; 
    @media (max-width: 992px) {
        padding: 10px; 
    }
    @media (max-width: 480px){
        position: relative;
        display: block;
        height: auto; 
        width: 100%;
        left: 0; 
        top: 100%;
    }

`
const Badge = styled.div`
    padding: 4px 10px; 
    border: solid 1px red; 
    margin: 3px; 
    background: #FF0000;
    border-radius: 5px;
    color: #ffffff; 
    font-family: 'Montserrat', sans-serif;
    font-size: .813em; 
    font-weight: 600;
    @media (max-width: 600px){
        display: inline-block;
    }
`

function Item ( {
        id,
        thumbImg,
        name,
        skills,
        modalOpen
    }:ItemProps ) {
    
    return(
        <ItemWrap
            bg={thumbImg}
            onClick={modalOpen}
        >
            <BoxStart className="box-start"  bg={thumbImg}/>
            <ThumbnailWrap className="fadeIn" >
                <Thumbnail bg={thumbImg}/>
                <Skills>
                        {skills.map((skill,index) => <Badge key={index}>{skill}</Badge>)}
                 </Skills>
            </ThumbnailWrap>
            
            <span>{id}</span>
            <h2>{name}</h2>
            <BoxEnd className="box-end"  bg={thumbImg}/>
        </ItemWrap>
    )
}
export default Item;