import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";

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
const Right = styled.div`
  width: 400px;
  height: 400px;
`;
const RightCircle = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fee600;
  border-radius: 50%;
  display: flex;
  align-items: center;
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
`;

const Img = styled.div``;

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
                  <img
                    src="https://paikdabang.com/wp-content/uploads/2018/05/%EC%9B%90%EC%A1%B0%EB%B9%BD%EC%8A%A4%EC%B9%98%EB%85%B8-SOFT-450x588.png"
                    width="250px"
                    height="350px"
                  />
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
  );
};
