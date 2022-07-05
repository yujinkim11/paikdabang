import styled from "styled-components";
import { Link } from "react-router-dom";
import { mainStyle } from "../styles/globalStyle";

const HeaderWrap = styled.div`
  width: 100%;
  height: 140px;

  color: #1d1d1d;
  a {
    color: #1d1d1d;
  }
`;

const Section1 = styled.div`
  height: 40px;
  background-color: #eeeeee;
  display: flex;
  justify-content: right;
  align-items: center;
  padding: ${mainStyle.padding};
  padding-right: 300px;
  border-bottom: 1px solid #707070;
  span {
    margin-left: 50px;
    &:nth-child(2) {
      margin-right: 50px;
    }
  }
  img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
`;

const Logo = styled.div`
  width: 194px;
  height: 64px;
  margin-right: 300px;
`;

const Menu = styled.p`
  font-size: 20px;
`;

const Section2 = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  padding: ${mainStyle.padding};
`;

export const Header = () => {
  return (
    <HeaderWrap>
      <Section1>
        <span>더본코리아</span>
        <span>매장찾기</span>
        <Link to="https://ko-kr.facebook.com/ipaikscoffee/">
          <p>
            <img src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/facebook-ico.png"></img>
          </p>
        </Link>

        <Link to="https://www.instagram.com/paikscoffee_official/">
          <p>
            <img src="https://paikdabang.com/wp-content/themes/paikdabang/assets/images/insta-ico.png"></img>
          </p>
        </Link>
      </Section1>

      <Section2>
        <Link to="#">
          <Logo
            style={{
              background: `url(https://paikdabang.com/wp-content/themes/paikdabang/assets/images/logo.png) no-repeat center / cover`,
            }}
          ></Logo>
        </Link>
        <Menu>
          <Link to="#">빽다방</Link>
        </Menu>
        <Menu>
          <Link to="#">메뉴</Link>
        </Menu>
        <Menu>
          <Link to="#">커뮤니티</Link>
        </Menu>
        <Menu>
          <Link to="#">매장안내</Link>
        </Menu>
        <Menu>
          <Link to="#">창업안내</Link>
        </Menu>
        <Menu>
          <Link to="#">고객의소리</Link>
        </Menu>
      </Section2>
    </HeaderWrap>
  );
};
