import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #0092e3, #c3eaff);
`;

const LoginBox = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 400px;
  height: 500px;
`;

const Title = styled.h1`
  font-size: 48px;
  padding-top: 62px;
  margin-bottom: 30px;
  font-weight: normal;
  color: black;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #0072ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bbb;
  }
`;

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("ログインボタンがクリックされました。");
    console.log("ユーザID", userId);
    console.log("パスワード", password);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>ZPBooks</Title>
        <Input
          type="text"
          placeholder="ユーザID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        ></Input>
        <Input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
        <Button onClick={handleLogin}>ログイン</Button>
      </LoginBox>
    </LoginContainer>
  );
};

export default Login;
