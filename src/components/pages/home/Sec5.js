import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { mainStyle } from "../../../styles/globalStyle";
import { Navigation } from "swiper";
import "swiper/css/pagination";
const Sec5Wrap = styled.div`
  margin-top: 100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Sec5Title = styled.div`
  font-size: 50px;
  font-weight: 900;
  color: ${mainStyle.maincolor};
`;
const Sec5ConWrap = styled.div`
  width: 100%;
  padding: 50px 400px;
`;

const SwiperCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .mint {
    margin-left: 0px;
  }
  .last {
    margin-left: 0;
  }
`;

const SwiperTitle = styled.h4`
  font-size: 20px;
  text-align: center;
  margin-left: -50px;
`;
const Img = styled.div`
  width: 255px;
  height: 320px;
`;

export const Sec5 = () => {
  return (
    <Sec5Wrap>
      <Sec5Title>PAIK'S SIGNATURE</Sec5Title>
      <Sec5ConWrap>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{ clickable: true }}
        >
          <SwiperSlide>
            <Img
              style={{
                background: `url(https://paikdabang.com/wp-content/uploads/2022/06/%EC%BD%94%EC%BD%94%EB%84%9B%EC%8A%A4%EB%AC%B4%EB%94%94-450x588.png) no-repeat center / cover`,
              }}
            />
            <SwiperTitle>코코넛커피스무디</SwiperTitle>
          </SwiperSlide>

          <SwiperSlide>
            <SwiperCon>
              <Img
                style={{
                  background: `url(https://paikdabang.com/wp-content/uploads/2018/06/ICED-%EB%AF%BC%ED%8A%B8%EC%B4%88%EC%BD%94%EB%9D%BC%EB%96%BC-450x588.png) no-repeat center / cover`,
                }}
              />
              <SwiperTitle className="mint">민트초코라떼(ICED)</SwiperTitle>
            </SwiperCon>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Img
              style={{
                background: `url(https://paikdabang.com/wp-content/uploads/2018/01/%EC%BD%9C%EB%93%9C%EB%B8%8C%EB%A3%A8%EB%9D%BC%EB%96%BC-450x588.png) no-repeat center / cover`,
              }}
            />
            <SwiperTitle>콜드브루라떼</SwiperTitle>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Img
              style={{
                background: `url(https://paikdabang.com/wp-content/uploads/2018/05/%EC%99%84%EC%A0%84%EB%94%B8%EA%B8%B0%EB%B0%94%EB%82%98%EB%82%98-SOFT-450x588.png) no-repeat center / cover`,
              }}
            />
            <SwiperTitle>딸기바나나빽스치노</SwiperTitle>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Img
              style={{
                background: `url(https://paikdabang.com/wp-content/uploads/2018/05/%EB%85%B8%EB%A7%90%ED%95%9C%EC%86%8C%ED%94%84%ED%8A%B8-3-450x588.png) no-repeat center / cover`,
              }}
            />
            <SwiperTitle>노말한소프트</SwiperTitle>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Img
              style={{
                background: `url(https://paikdabang.com/wp-content/uploads/2018/05/%EB%8B%AC%EA%B3%A0%EB%82%98%ED%81%AC%EB%9F%B0%EC%B9%98-450x588.png) no-repeat center / cover`,
              }}
            />
            <SwiperTitle>달고나크런치</SwiperTitle>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Img
              style={{
                background: `url(https://paikdabang.com/wp-content/uploads/2019/04/%ED%81%AC%EB%A6%AC%EB%AF%B8%EB%8B%A8%ED%8C%A5%EB%B9%B5-450x588.png) no-repeat center / cover`,
              }}
            />
            <SwiperTitle>크리미단팥빵</SwiperTitle>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <Img
              style={{
                background: `url(https://paikdabang.com/wp-content/uploads/2021/04/%EA%B3%B5%EA%B3%B5%EC%B9%98%EB%B9%B5%EC%B4%88%EC%BD%94%EB%A7%9B-450x588.png) no-repeat center / cover`,
              }}
            />
            <SwiperTitle>공공치빵(초코맛)</SwiperTitle>
          </SwiperSlide>
          <SwiperSlide>
            <SwiperCon>
              <Img
                style={{
                  background: `url(https://paikdabang.com/wp-content/uploads/2017/05/%EC%86%8C%EC%84%B8%EC%A7%80%EB%B9%B5-450x588.png) no-repeat center / cover`,
                }}
              />
              <SwiperTitle className="last">소세지빵</SwiperTitle>
            </SwiperCon>
          </SwiperSlide>
        </Swiper>
      </Sec5ConWrap>
    </Sec5Wrap>
  );
};
