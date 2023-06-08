import styled from "styled-components";
import bg from "../../assets/bg.png";

import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Lock } from "../../assets/lock.svg";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #244bc5;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
Wrapper.Container = styled.form`
  height: auto;

  width: 35rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 4rem;
`;

Wrapper.InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;

Wrapper.InputWrapper = styled.div`
  position: relative;
`;
Wrapper.Input = styled.input`
  width: 100%;
  color: #ffffff;
  border: solid 1px #ffffff;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  letter-spacing: 0px;

  padding: 1.3rem;
  padding-left: 4rem;
  background-color: transparent;
  font-weight: 200 !important;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    text-transform: uppercase;
    opacity: 0.8;
  }
`;
Wrapper.UserIcon = styled(User)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(50%);
`;
Wrapper.LockIcon = styled(Lock)`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%) translateX(50%);
`;
Wrapper.ButtonContainer = styled.div`
  width: 100%;
`;
Wrapper.ForgotPsw = styled.div`
  cursor: pointer;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */
  margin-top: 1rem;
  text-align: right;

  color: #ffffff;
`;
Wrapper.Warning = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height */
  margin-top: -0.9rem;
  text-align: left;
  color: red;
  transition: all 5s;
`;
export default Wrapper;
