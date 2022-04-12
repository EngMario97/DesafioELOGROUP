import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  //font-size: 16px (Desktop)

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    } 

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  };

  button { 
    cursor: pointer;
  }

  .NewTransactionModalOverlay{
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
}

.NewTransactionModalContent{
  background: #FFF;
  width: 100%;
  max-width: 800px;
  margin: 1rem;
  padding: 1rem 2rem;
  position: relative;
  border-radius: 0.25rem;
  border: 1px solid black;
}
  
`;