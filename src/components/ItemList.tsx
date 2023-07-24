import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion";
import styled, { keyframes } from "styled-components";
import { NotionRenderer } from "react-notion";
import 'react-notion/src/styles.css';
import Item from "./Item";
import MainTitle from "./MainTitle";
import itemData from "./../itemData.json"
import {AiOutlineClose} from 'react-icons/ai';

const FadeWrap = keyframes`
    0%{
        transform: scaleX(100%);
    }
    100%{
        transform: scaleX(0);
    }
`

const ItemWrap = styled.div`
     width: 100vw;
     height: 100vh;
     position: absolute;
     left: 0; top: 0;
     display: flex;
     align-items: stretch;
     justify-content: center;
     padding: 5vh 2vw;
     &::after{
        content: '';
        position: absolute; 
        width: 100%; 
        height: 100%; 
        left: 0; top: 0;
        /* background: pink;  */
        z-index: 10;
        animation: ${FadeWrap} .2s 2s;
        animation-fill-mode: forwards;
     }
     @media (max-width: 992px) {
        flex-direction: column;
        padding: 0; 
    }
`

const ListWrap = styled.div`
    flex-grow: 1; 
    position: relative; 
    z-index: 0;
    display: flex;
    align-items: center;
    padding: 0 1.5vw; 
   
    @media (max-width: 992px) {
        margin-left: 0;
        display: block;
        flex-grow: 1;
    }
`

const ScrollSection = styled.div`
   width: 100%;
    @media (max-width: 992px) {
        position: absolute;
        left: 0; top: 0; right: 0; bottom: 5px; 
        overflow-y: auto;
        &::-webkit-scrollbar {
            //display: none;
        }
        &::-webkit-scrollbar {
            width: 5px;
            height: 8px;
            background-color: rgb(61, 208, 101); /* or add it to the track */
        }
        &::-webkit-scrollbar-thumb{
            background: #000;
        }
        @media (max-width: 600px) {
            right: 0;
            padding-top: 24vw;
            padding: 24vw 15px 0 15px;
        }
      
    }
`
const List = styled.div`
    width:100%;
    padding: 2vw 4vw; 
    border-radius: 40px;
    @media (max-width: 991px) {
        padding: 0; 
    }
`

const Overlay = styled(motion.div)`
    width: 100vw; 
    height: 100vh; 
    position: fixed; 
    left: 0; top: 0; 
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.4);
    z-index: 109;
    cursor: pointer;

    @media (max-width: 480px) {
       align-items: flex-end;
    }

`
const CloseModal = styled.div`
    position: absolute;
    top: -18px; right: 20px;
    width: 46px; 
    height: 46px; 
    z-index: 1;
    background: #222222; 
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const ModalSideOpen = keyframes`
    0%{
        transform: scaleX(0);
    }
    100%{
        transform: scaleX(100%);
    }
`
const ModalUpOpen = keyframes`
    0%{
        transform: scaleY(0);
    }
    100%{
        transform: scaleY(100%);
    }
`
const Modal = styled.div`
    width: 940px;
    height: 60vh;
    position: relative; 
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.2);
    cursor: auto;
    animation: ${ModalSideOpen} .2s 1s  forwards;
    transform-origin: right center;
    transform: scale(0);
    @media (max-width: 992px) {
        width: 740px;
        height: 500px;
    }
    @media (max-width: 768px) {
        width: 94vw;
        height: 64vw;
        flex-direction: column;
        transform-origin: center bottom;
        animation: ${ModalUpOpen} .2s 1s  forwards;
    }
    @media (max-width: 600px) {
        height: 70vh;
        transform-origin: center bottom;
        animation: ${ModalSideOpen} .2s 0s  forwards;
    }
    @media (max-width: 480px) {
        width: 100vw;
        height: calc( 100vh - 90px );
        border-radius: 0;
    }
`


const ModalContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: stretch;
    border-radius: 20px;
    overflow: hidden;
    @media (max-width: 768px) {
        flex-direction: column;
    }
    @media (max-width: 480px) {
        border-radius: 0;
    }
`
const ImgScale = keyframes`
    0%{
        width: 100%;
        min-width: 100%;
    }
    100%{
        width: 280px;
        min-width: 280px;
    }

`
const ImgScaleMidium = keyframes`
    0%{
        width: 100%;
        min-width: 100%;
    }
    100%{
        width: 225px;
        min-width: 225px;
    }

`
const ImgScaleSmall = keyframes`
    0%{
        width: 100%;
        min-width: 100%;
        min-height: 100%;
        height: 100%;
    }
    100%{
        width: 100%;
        min-width: 100%;
        min-height: 0;
        height: 0;

    }

`


const ImgBox = styled.div<{bg: string}>`
    width: 100%;
    min-width: 100%; 
    background-image: url( https://siennapp.github.io/static/${(props)=> props.bg }); 
    background-size: 940px auto;
    background-position: left top; 
    left: 0; top: 0; 
    border-radius: 20px 0 0 20px;
    position: relative; 
    animation: ${ImgScale} .2s 2.2s  forwards;
    &::after{
        content:'';
        width: 100%; 
        height: 100%; 
        background: rgba(0,0,0, 0.2);
        position: absolute; 
        left: 0; top: 0; 
    }
    @media (max-width: 991px) {
        background-size: 740px auto;
        animation: ${ImgScaleMidium} .2s 2.2s  forwards;
        
    }
    @media (max-width: 768px) {
        min-height: 100%;
        border-radius: 20px 20px 0 0;
        background-size: 100%;
        animation: ${ImgScaleSmall} .2s 2.2s  forwards;
    }
    @media (max-width: 600px) {
        display: none;
        animation: ${ImgScaleSmall} .2s 1s  forwards;
    }
`
const ModalScroll = styled.div`
    
    flex-grow: 1;
    position: relative; 
    padding: 8vh 15vw; 
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 992px) {
        padding: 10vh 5vw; 
    }
    @media (max-width: 768px) {
        .content{
            border-radius: 0 0 15px 15px;
        }
    }
    @media (max-width:480px) {
        padding: 0;
        .content{
            border-radius: 0;
        }
    }
`
const ModalBody = styled.div`
    padding: 0 30px; 
    @media (max-width:480px) {
        padding: 0 15px;
    }
    .notion{
        font-size: 14px;
    }
`



function ItemList () {
    const [ id , setId ] = useState<null | string>(null);
    const [response, setResponse ] = useState({})
    const [contentImg, setContentImg ] = useState<null | string>(null);
    
    useEffect(() => {
        // const newArr = itemData.filter((i) => i.id === id )
    
        // if(newArr.length > 0 ){
        //     setContentImg(newArr[0].contentImg)
        // }
    },[id])

    const getNotionPage = (notionId:string, id:string) => {
        fetch(`https://notion-api.splitbee.io/v1/page/${notionId}`)
        .then(res => res.json())
        .then((resJson) => {
            setResponse(resJson)
            setId(id)
            const newArr = itemData.filter((i) => i.id === id )
    
            if(newArr.length > 0 ){
                setContentImg(newArr[0].contentImg)

                console.log(newArr[0].contentImg)
            }
        })
        .then(()=>setId(id))
    }
    const onClick = (event:React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
    }
    const modalToggle = () => {
        setId(null)
        setContentImg(null)
    }
    return (

        <ItemWrap>   
            <MainTitle />
                <ListWrap>
                    <ScrollSection>
                        <List>
                            {itemData.map((item)=> 
                                <Item   
                                    key={item.id}
                                    {...item}
                                    modalOpen={() => {
                                        getNotionPage(item.notionId, item.id)
                                    }}
                                />
                            ) }
                        </List>

                    </ScrollSection>
                </ListWrap >
            

           
            <AnimatePresence>
                { id && (
                    <Overlay exit={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={modalToggle}
                    >
                        {contentImg &&
                        <Modal onClick={onClick}>
                            <CloseModal onClick={modalToggle}><AiOutlineClose size="30" color="#ffffff"/></CloseModal>
                            <ModalContent>
                                <ImgBox bg={contentImg}/>
                                <ModalScroll>
                                    <div className="content">
                                        <ModalBody>
                                            <NotionRenderer blockMap={response} />
                                        </ModalBody>
                                    </div>
                                </ModalScroll>
                                
                            </ModalContent>
                        </Modal> 
                        }
                       
                    </Overlay>
                    )}
            </AnimatePresence>
        </ItemWrap>
    )
}
export default ItemList;

