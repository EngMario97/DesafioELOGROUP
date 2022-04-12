import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  img {
    max-width: 30rem;
  }

  h2{
    margin-left: 3rem;
    margin-top: 1rem;
  }
`;

export const Content = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.div`
  width: 40%;
  padding: 1rem;


  label {
    margin-left: 0.5rem;
  }

  input{
    width: 100%;
    margin: 0.8rem 0;
    height: 2rem;
  }
`;

export const CheckBoxTable = styled.div`
  width: 50%;
  padding: 1rem;

  table{
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }

  tr{
    text-align: center;
  }

  th, td {
    border: 1px solid black;
    padding: 12px 15px;
    text-align: center;
  }

  button{
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    background: #272727;
    border: 0;
  }

  h3{
    margin-left: 0.5rem;
  }
`;