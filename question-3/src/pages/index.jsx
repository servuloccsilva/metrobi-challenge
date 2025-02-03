import * as S from "./styled";

const gap = "0.8";

const ReactPattern = () => {
  return (
    <S.Container gap={gap}>
      <S.Header>Header</S.Header>
      <S.MainContainer>
        <S.SidebarLeft>
          <S.Hero>Hero</S.Hero>
          <S.Sidebar>Sidebar</S.Sidebar>
        </S.SidebarLeft>
        <S.SidebarRight>
          <S.MainContant>Main Contant</S.MainContant>
          <S.ExtraContent>Extra Content</S.ExtraContent>
        </S.SidebarRight>
      </S.MainContainer>
      <S.BottonContainer>
        <S.RelatedImages>Related Images</S.RelatedImages>
        <S.RelatedPosts>Related Posts</S.RelatedPosts>
      </S.BottonContainer>
      <S.Footer>Footer</S.Footer>
    </S.Container>
  );
};

export default ReactPattern;
