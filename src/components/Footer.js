import styled from "styled-components";
import { mainStyle } from "../styles/globalStyle";

const FooterWrap = styled.div`
  padding: ${mainStyle.padding};
  height: 200px;
  background-color: #fee600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: ${mainStyle.moPadding};
  }
`;

const ConWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    padding: ${mainStyle.moPadding};
    font-size: 12px;
    text-align: center;
  }
`;

const Logo = styled.div`
  width: 180px;
  height: 48px;
  margin-right: 100px;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

const Right = styled.div`
  font-size: 16px;
  color: #071e61;
  line-height: 25px;
  @media screen and (max-width: 500px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

const Copy = styled.p`
  margin-top: 40px;
  font-size: 12px;
  color: #071e61;
`;

export const Footer = () => {
  return (
    <FooterWrap>
      <ConWrap>
        <Logo
          style={{
            background: `url(https://paikdabang.com/wp-content/themes/paikdabang/assets/images/flogo.png) no-repeat center / cover`,
          }}
        ></Logo>
        <Right>
          <span>
            (주)더본코리아 사업자등록번호 211-86-00870 대표이사 백종원{" "}
          </span>{" "}
          <br />
          <span>
            주소: 서울시 강남구 봉은사로 1길 39 유성빌딩 5~6층 팩스: 02-511-3864{" "}
          </span>
          <br />
          <span>
            {" "}
            본사 대표전화: 02-549-3864 가맹상담전화: 02-3447-0410 고객센터:
            1544-2360
          </span>
        </Right>
      </ConWrap>
      <Copy>
        <p>COPYRIGHTⓒ 2022 KIMYUJIN KOREA INC. ALL RIGHTS RESERVED</p>
      </Copy>
    </FooterWrap>
  );
};
