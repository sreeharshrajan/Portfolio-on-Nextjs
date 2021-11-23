import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.05rem;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  transition: all 0.50s linear;
}



nav{
  display: flex;
  height: 80px;
  width: 100%;
  z-index: 999;
}

img#logo{
   filter: ${({ theme }) => theme.filter};
}

.toggleIcon{
  display: flex;
  align-items: center;
   cursor: pointer;
}

.toggleIcon > svg{
 width:24px;
 height:24px;
 display:inline-block;
 text-align:middle;
flex-shrink: 0;
}

.link-item{
  margin-right:1rem;
  cursor: pointer;

}
footer{
  text-align: center;
}


a {
  color: inherit;
  text-decoration: none;
}

section{
  min-height: 80vh;
}

 .overlay{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    top: 50px;
    left: 0;
background-image: url("/images/heroBg.svg");
  }



.homeWrapper{
  display: flex;
  align-items: center;
  justify-content: center;
 
 z-index: 1;
  @media screen and (max-width: 768px){
    flex-direction: column-reverse;
  }

}

.landingText{
  margin-right:2.5rem;
  text-align: left;
  z-index: 1;
  
  h1{
    font-size: 3rem;
  }

   h3{
        line-height: 2; font-size: 2rem;
  }

  @media screen and (max-width: 768px){
   margin-right:0rem;
   h1{
    font-size: 2rem;
    line-height: 1.5;
  }
 
  }
}
`;

export default GlobalStyle;
