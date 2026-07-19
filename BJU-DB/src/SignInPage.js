import React, { useState } from 'react';
import styled from 'styled-components';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = () => {
    // Simulating sign-in failure for demo purposes
    if (username !== 'admin' || password !== 'password') {
      setError('Invalid username or password');
    } else {
      // Perform sign-in logic here
      setError('');
      console.log('Sign-in successful');
    }
  };

  console.log('Sign-in successful');

  return (
    <Container>
      <Title>Sign In</Title>
      <Form>
        <Label>Username</Label>
        <Input type="text" value={username} onChange={handleUsernameChange} />
        <Label>Password</Label>
        <Input type="password" value={password} onChange={handlePasswordChange} />
        <Button onClick={handleSignIn}>Sign In</Button>
        {error && <Error>{error}</Error>}
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: #fff;
  padding: 24px;
  border-radius: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Error = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 8px;
`;

export default SignInPage;
