import styled from "styled-components";
import { mainStyle } from "../../../styles/globalStyle";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sec3Wrap = styled.div`
  width: 100%;
  padding: ${mainStyle.padding};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: ${mainStyle.moPadding};
    margin-top: 250px;
  }
`;
const Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 30px;
  color: ${mainStyle.maincolor};
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
const ConWrap = styled.div`
  margin-top: 50px;
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 30px;
    color: ${mainStyle.maincolor};
  }
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;
const Con1 = styled.div`
  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;
const Con2 = styled.div`
  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;
const Con3 = styled.div`
  @media screen and (max-width: 500px) {
    margin-bottom: 50px;
  }
`;

const Img1 = styled.div`
  width: 203px;
  height: 208px;
  background: url(https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about1.png)
    no-repeat center / cover;
  :hover {
    transform: scale(110%);
    transition: 1s;
  }
`;
const Img2 = styled.div`
  width: 203px;
  height: 208px;
  background: url(https://paikdabang.com/wp-content/themes/paikdabang/assets/images/about2.png)
    no-repeat center / cover;
  :hover {
    transform: scale(110%);
    transition: 1s;
  }
`;
const Img3 = styled.div`
  width: 203px;
  height: 208px;
  background: url(http://paikdabang.com/wp-content/uploads/2021/05/%EC%9B%90%EB%91%90%EA%B5%90%EC%B2%B4.png)
    no-repeat center / cover;
  :hover {
    transform: scale(110%);
    transition: 1s;
  }
`;

export const Sec3 = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Sec3Wrap>
      <Title>PAIK'S COFFEE</Title>
      <ConWrap>
        <Con1
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="7000"
        >
          <p>싸다!</p>
          <Img1></Img1>
        </Con1>
        <Con2
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="7000"
        >
          <p>크다!</p>
          <Img2></Img2>
        </Con2>
        <Con3
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="7000"
        >
          <p>맛있다!</p>
          <Img3></Img3>
        </Con3>
      </ConWrap>
    </Sec3Wrap>
  );
};
