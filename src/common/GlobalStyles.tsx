import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`
  
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        width: 100%; 
        line-height: 1;
        overflow: hidden;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;600;800&family=Noto+Sans+KR:wght@100;300;400;500;700&display=swap');
  
  @font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    //font-family: 'Montserrat', sans-serif;
    font-family: 'Noto Sans KR', sans-serif;
  }
  .content{
    overflow-y: auto;
    background: rgba(255,255,255,1); 
    position: absolute;
    width: 100%; height: 100%;
    left: 0; top: 0; 
    border-radius: 0 20px 20px 0;
    padding: 20px 0;
    &::-webkit-scrollbar {
        width: 14px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: #ccc;
        border: solid 4px #ffffff;  
    }
    div{
        max-width: 100% !important;
    }
    
    figure{
        max-width: 100% !important;
    }
    .notion-text{
        position: relative;
        padding-left: 80px;

    }
    .notion-text b{
        width: 85px;
        display: inline-block;
        color:rgb(61, 208, 101);
        position: absolute;
        left: 0;
    }
    .notion-h1{
        margin-bottom: 1rem;
        margin-top: 1.25rem;
    }
    .notion-list{
        &:first-of-type{
            margin-top: 18px;
        }
    }
    .notion-blank{
        display: none;
    }
  }
  
`


export default GlobalStyles;