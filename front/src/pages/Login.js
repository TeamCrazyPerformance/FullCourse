import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <Logo>
          <Icon alt="Logo" src="" />
          <Title>Full Course</Title>
        </Logo>
        <Wrap>Login</Wrap>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.div``;

const Icon = styled.img``;

const Title = styled.div`
  margin-top: 10px;
`;

const Wrap = styled.div`
  margin-top: 30px;
  background-color: white;
  padding: 2rem 2.5rem;
  box-shadow: 2px 3px 6px 1px rgba(130, 130, 130, 0.73);
  -webkit-box-shadow: 2px 3px 6px 1px rgba(130, 130, 130, 0.73);
  -moz-box-shadow: 2px 3px 6px 1px rgba(130, 130, 130, 0.73);
`;

export default Login;
