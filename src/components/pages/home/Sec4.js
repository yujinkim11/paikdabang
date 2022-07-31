import styled from "styled-components";

import "aos/dist/aos.css";

const Sec4Wrap = styled.div`
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Bg = styled.div`
  width: 100%;
  height: 662px;
  background-image: url(https://www.mokpo.go.kr/biz/support/ybmodule.file/smartour/smartour_biz/1605079190.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 -100px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const BlackBg = styled.div`
  width: 100%;
  height: 662px;
  background-color: rgba(0, 0, 0, 0.3);

  :hover {
    background-color: rgba(0, 0, 0, 0.6);
    transition: 1s;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 85%;
  }
`;

const Content = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 220px;
  h3 {
    font-size: 50px;
    font-weight: 900;
  }
  p {
    font-size: 24px;
    font-weight: 500;
    margin-top: 20px;
    margin-bottom: 100px;
  }
  @media screen and (max-width: 500px) {
    text-align: center;
    h3 {
      font-size: 40px;
      margin-bottom: 20px;
    }
    p {
      font-size: 18px;
      margin-bottom: 60px;
    }
  }
`;

const ConWrap = styled.div`
  width: 200px;
  height: 40px;
  border: 2px solid white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
export const Sec4 = () => {
  return (
    <Sec4Wrap>
      <Bg>
        <BlackBg>
          <Content>
            <h3>PAIK’S COFFEE STORY</h3>
            <p>균형잡힌 바디감으로 긴여운을 남기는 빽다방 커피를 만나보세요.</p>
            <ConWrap>더보기 +</ConWrap>
          </Content>
        </BlackBg>
      </Bg>
    </Sec4Wrap>
  );
};
