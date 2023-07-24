import styled, { keyframes } from "styled-components"

const TitleWrap = styled.div`
    width: 100vw;
    height: 100vh;
    left: 0; top: 0;   
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: center;
    background: #3dd065;
    box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.1);
    margin: 0 auto; 
    position: fixed;
    
`
const TitleBox = styled.div`
  width: 100%; 
  display:flex;
`

const flowAni = keyframes`
  0%{
    transform: translateX(100%);
  }
  100%{
    transform:translateX(-100%);
  }
`

const flowAni2 = keyframes`
  0%{
    transform: translateX(0);
  }
  100%{
    transform:translateX(-200%);
  }
`

const flowAni3 = keyframes`
  0%{
    transform: translateX(-100%);
  }
  100%{
    transform:translateX(100%);
  }
`

const flowAni4 = keyframes`
  0%{
    transform: translateX(-200%);
  }
  100%{
    transform:translateX(0);
  }
`
const ListTitle = styled.div`
 
  font-size: 7.2vw;
  font-weight: 800;
  letter-spacing: -0.02em;
  font-family: 'Montserrat', sans-serif;
  padding: 0 10px;
  transition: all 0.4s ease-in-out;
  transform: translate3d(0, 0, 0);
  vertical-align: top;
  color: transparent;
  -webkit-text-stroke: 3px navy;
  opacity: .08;
  white-space:nowrap;
  animation: ${flowAni} 160s linear infinite;
  animation-delay: -160s;
 
  &:nth-child(2){
    animation: ${flowAni2} 160s linear infinite;
    animation-delay: -80s;
  }
  @media (max-width: 991px) {
    font-size: 10vw;
  }
  @media (max-width: 761px) {
    font-size: 12vw;
  }
  @media (max-width: 480px) {
    font-size: 16vw;
  }
`
const ListTitle2 = styled(ListTitle)`
  white-space:nowrap;
  animation: ${flowAni3} 160s linear infinite;
  animation-delay: -160s;
&:nth-child(2){
    animation: ${flowAni4} 160s linear infinite;
    animation-delay: -80s;
  }

`

  
function MainBg (){
    return(
        <TitleWrap>
          {
            textArr.map((item) => {
              if( item%2 === 0 ){
                  return (
                  <TitleBox key={item}> 
                    <ListTitle>WORK PORTFOLIO BY SIENNA</ListTitle>
                    <ListTitle>WORK PORTFOLIO BY SIENNA</ListTitle>
                  </TitleBox>)
              } else{
                return (
                  <TitleBox key={item}> 
                    <ListTitle2>WORK PORTFOLIO BY SIENNA</ListTitle2>
                    <ListTitle2>WORK PORTFOLIO BY SIENNA</ListTitle2>
                  </TitleBox>
                  )
              }
            })
          }
        </TitleWrap>
    )
}
export default MainBg


const textArr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]  