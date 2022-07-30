import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { mainStyle } from "../../../styles/globalStyle";

const Section2Wrap = styled.div`
  width: 100%;
`;

const Sec2Wrap = styled.div`
  width: 100%;
  padding: 0 500px;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: ${mainStyle.moPadding};
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Left = styled.div`
  margin-right: 150px;
  @media screen and (max-width: 500px) {
    margin-top: 200px;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const LeftTitle = styled.div`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 30px;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
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
  @media screen and (max-width: 500px) {
  }
`;
const Right = styled.div`
  width: 400px;
  height: 400px;
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
    margin-top: 20px;
  }
`;
const RightCircle = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fee600;
  border-radius: 50%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
`;
const SlideWrap = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  padding: 0 50px;
`;

const Title = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: white;
  @media screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

const Img = styled.div`
  img {
    width: 250px;
    height: 350px;
  }
  @media screen and (max-width: 500px) {
    img {
      width: 170px;
      height: 250px;
      margin-left: -20px;
    }
  }
`;

export const Sec2 = () => {
  return (
    <Section2Wrap>
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
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide>
                <SlideWrap>
                  <Title>원조빽스치노</Title>
                  <Img>
                    <img src="https://paikdabang.com/wp-content/uploads/2018/05/%EC%9B%90%EC%A1%B0%EB%B9%BD%EC%8A%A4%EC%B9%98%EB%85%B8-SOFT-450x588.png" />
                  </Img>
                </SlideWrap>
              </SwiperSlide>
              <SwiperSlide>
                <SlideWrap>
                  <Title>퐁당치노</Title>
                  <Img>
                    <img
                      src="https://paikdabang.com/wp-content/uploads/2018/05/%ED%90%81%EB%8B%B9%EC%B9%98%EB%85%B8_%EB%B0%94%EB%8B%90%EB%9D%BC-450x588.png"
                      width="250px"
                      height="350px"
                    />
                  </Img>
                </SlideWrap>
              </SwiperSlide>
              <SwiperSlide>
                <SlideWrap>
                  <Title>코코넛커피</Title>
                  <Img>
                    <img
                      src="https://paikdabang.com/wp-content/uploads/2022/06/%EC%BD%94%EC%BD%94%EB%84%9B%EC%8A%A4%EB%AC%B4%EB%94%94-450x588.png"
                      width="250px"
                      height="350px"
                    />
                  </Img>
                </SlideWrap>
              </SwiperSlide>
              <SwiperSlide>
                <SlideWrap>
                  <Title>노말한소프트</Title>
                  <Img>
                    <img
                      src="https://paikdabang.com/wp-content/uploads/2018/05/%EB%85%B8%EB%A7%90%ED%95%9C%EC%86%8C%ED%94%84%ED%8A%B8-3-450x588.png"
                      width="250px"
                      height="350px"
                    />
                  </Img>
                </SlideWrap>
              </SwiperSlide>
            </Swiper>
          </RightCircle>
        </Right>
      </Sec2Wrap>
    </Section2Wrap>
  );
};
