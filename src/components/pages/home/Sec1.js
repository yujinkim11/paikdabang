import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Sec1Wrap = styled.div`
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Banner1 = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(https://paikdabang.com/wp-content/uploads/2022/05/%EB%B9%BD%EB%8B%A4%EB%B0%A9_%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_main_5%EC%9B%94_%EC%99%84%EC%A0%84%EC%88%98%EB%B0%95%EC%A3%BC%EC%8A%A4.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner2 = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(https://paikdabang.com/wp-content/uploads/2022/06/%EB%B9%BD%EB%8B%A4%EB%B0%A9_%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_main_%EC%BD%94%EC%BD%94%EB%84%9B2%EC%A2%85.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner3 = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(https://paikdabang.com/wp-content/uploads/2022/05/%EB%B9%BD%EB%8B%A4%EB%B0%A9_%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80_main_5%EC%9B%94_%EC%95%84%EC%9D%B4%EC%8A%A4%ED%81%AC%EB%A6%BC%EB%9D%BC%EB%96%BC.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner4 = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(https://paikdabang.com/wp-content/uploads/2022/01/main_%EB%A9%A4%EB%B2%84%EC%8B%AD%ED%99%9C%EC%84%B1%ED%99%94-1.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Sec1 = () => {
  return (
    <Sec1Wrap>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <Banner1 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner2 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner3 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner4 />
        </SwiperSlide>
      </Swiper>
    </Sec1Wrap>
  );
};
