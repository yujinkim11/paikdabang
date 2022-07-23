import styled from "styled-components";
import { mainStyle } from "../../../styles/globalStyle";

const Sec2Wrap = styled.div`
  padding: 0 500px;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  margin-right: 150px;
`;
const LeftTitle = styled.div`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 30px;
`;
const LeftSquare = styled.div`
  width: 105px;
  height: 45px;
  border: 1px solid #fee600;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
`;
const Right = styled.div``;
const RightCircle = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fee600;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

const ConWrap = styled.div`
  margin-left: 15px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
  margin-bottom: 10px;
`;
const Con = styled.div`
  font-size: 20px;
  color: white;
`;
const Img = styled.div`
  width: 200px;
  height: 350px;
  background: url(https://paikdabang.com/wp-content/uploads/2018/05/%EC%9B%90%EC%A1%B0%EB%B9%BD%EC%8A%A4%EC%B9%98%EB%85%B8-SOFT-450x588.png)
    no-repeat center / cover;
`;

export const Sec2 = () => {
  return (
    <Sec2Wrap>
      <Left>
        <LeftTitle>
          <span>Paik's</span> <br />
          <span>Best Menu</span>
        </LeftTitle>
        <LeftSquare>more</LeftSquare>
      </Left>
      <Right>
        <RightCircle>
          <ConWrap>
            <Title>원조 빽스치노</Title>
            <Con>매력만점 커피 빽스치노</Con>
          </ConWrap>

          <Img></Img>
        </RightCircle>
      </Right>
    </Sec2Wrap>
  );
};
