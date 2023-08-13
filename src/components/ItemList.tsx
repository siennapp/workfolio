import { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components";
import Item from "./Item";
import MainTitle from "./MainTitle";
import itemData from "./../itemData.json"
import OverlayModal from "./OverlayModal";

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
            padding: 30vw 15px 5vh 15px;
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


function ItemList () {
    const [ id , setId ] = useState<null | string>(null);
    const [response, setResponse ] = useState({})
    const [contentImg, setContentImg ] = useState<null | string>(null);

    const getNotionPage = (notionId:string, id:string):void => {
        fetch(`https://notion-api.splitbee.io/v1/page/${notionId}`)
        .then(res => res.json())
        .then((resJson) => {
            setResponse(resJson)
            const newArr = itemData.filter((i) => i.id === id )
            if(newArr.length > 0 ){
                setContentImg(newArr[0].contentImg)
            }
        })
       .then(()=>setId(id))
    }
   
    const modalToggle = ():void => {
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
           
                { id && (
                    <OverlayModal response={response} modalToggle={modalToggle} contentImg={contentImg}/>
                )}
        </ItemWrap>
    )
}
export default ItemList;

