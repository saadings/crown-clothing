import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer: any = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  position: sticky;
  top: 0px;
  z-index: 100;
  background-color: white;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

// .navigation {

//     .logo-container {
//         height: 100%;
//         width: 70px;
//         padding: 25px;
//     }

//     .nav-links-container {
//         width: 50%;
//         height: 100%;
//         display: flex;
//         align-items: center;
//         justify-content: flex-end;

//         .nav-link {
//
//         }
//     }
// }
