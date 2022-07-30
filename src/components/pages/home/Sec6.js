import styled from "styled-components";
import { mainStyle } from "../../../styles/globalStyle";
import React, { useEffect } from "react";
import AOS from "aos";

const Sec6Wrap = styled.div`
  margin: 100px 0 200px 0;
`;
const SecBoxWrap = styled.div`
  padding: ${mainStyle.padding};
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 620px;
  height: 400px;
  border: 7px solid ${mainStyle.maincolor};
  border-radius: 28px;
  transition: 1s;
  cursor: pointer;
  :nth-child(1) {
    margin-right: 100px;
  }
`;

const BlackBox = styled.div`
  width: 613px;
  height: 393px;
  border-radius: 28px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: 1s;
  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    .con {
      color: #fee600;
    }
  }
`;

const BoxCon = styled.div`
  color: white;
  padding: 50px;
  h3 {
    font-size: 60px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  p {
    width: 250px;
    font-size: 24px;
    font-weight: 700;
    line-height: 35px;
  }
`;

export const Sec6 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Sec6Wrap
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000"
    >
      <SecBoxWrap>
        <Box
          style={{
            background: `url(https://paikdabang.com/wp-content/themes/paikdabang/assets/images/main_sec5.jpg) no-repeat center / cover`,
          }}
        >
          <BlackBox>
            <BoxCon className="con">
              <h3>매장 찾기</h3>
              <p>가까운 빽다방 매장을 찾아보세요!</p>
            </BoxCon>
          </BlackBox>
        </Box>
        <Box
          style={{
            background: `url(https://paikdabang.com/wp-content/themes/paikdabang/assets/images/main_sec4.jpg) no-repeat center / cover`,
          }}
        >
          <BlackBox>
            <BoxCon className="con">
              <h3>창업 문의</h3>
              <p>쉽고 빠른 빽다방 창업 저희가 먼저 찾아갑니다!</p>
            </BoxCon>
          </BlackBox>
        </Box>
      </SecBoxWrap>
    </Sec6Wrap>
  );
};
