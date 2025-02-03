import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-wrap: wrap;
  height: ${(props) => `${100 - 3 * props.gap}vh`};
  font-size: 2rem;
  text-align: center;
  box-sizing: border-box;
  gap: ${(props) => `${props.gap}vh`};
`;

export const Header = styled.header`
  background-color: #00c8ff;
  text-align: center;
  flex: 1 100%;
  height: 10%;
`;

export const MainContainer = styled.div`
  display: flex;
  height: 60%;
  width: 100vw;
  gap: 5px;
`;

export const SidebarLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 40%;
  gap: 5px;
`;

export const SidebarRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 60%;
  gap: 5px;
`;

export const Hero = styled.div`
  background-color: #d9b3ff;
  flex: 1 40%;
  justify-content: center;
  box-sizing: border-box;
`;

export const Sidebar = styled.div`
  background-color: #b6d7a8;
  flex: 1 60%;
  box-sizing: border-box;
`;

export const MainContant = styled.div`
  background-color: #ffd966;
  flex: 1 70%;
  box-sizing: border-box;
`;

export const ExtraContent = styled.div`
  background-color: #999999;
  flex: 1 30%;
  box-sizing: border-box;
`;

export const BottonContainer = styled.div`
  display: flex;
  height: 20%;
  width: 100vw;
  gap: 5px;
`;

export const RelatedImages = styled.div`
  background-color: #6aa84f;
  flex: 1 70%;
  box-sizing: border-box;
`;

export const RelatedPosts = styled.div`
  background-color: #f4cccc;
  flex: 1 30%;
  box-sizing: border-box;
`;

export const Footer = styled.footer`
  background-color: #ff9900;
  text-align: center;
  height: 10%;
  flex: 1 100%;
`;
