import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const MainContainer = styled.div`
  position: relative;
  width: 80%;
  height: 100px;
  background-color: #747171;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const Character = styled.div`
  position: absolute;
  /* bottom: 50px; */
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  padding-left: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;

export const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #0571e4;
  }
`;
