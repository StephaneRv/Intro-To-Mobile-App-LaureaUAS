import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonInput, IonItem, IonList, IonItemDivider, IonButton } from '@ionic/react';
import styled from 'styled-components';
import axios from 'axios';

const Login: React.FC = () => {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [answer , setAnswer] = useState<string>();

  const LoginUser = async () => {
    if (!username || !password) {
      alert("Please fill in all fields");
      return;
    }
    axios.post("http://localhost:3000/login", {
      username: username,
      password: password
    })
    .then((response) => {
      console.log(response);
    //   if (response.status === 404) {
    //     setAnswer("User not found");
    //   } else
        setAnswer(response.data)
    }).catch(err => {
        setAnswer("User not found")
    });
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItemDivider>Login</IonItemDivider>
          <IonItem>
            <IonInput value={username} required={true} placeholder="Username" onIonChange={e => setUsername(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={password} required={true} type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <ButtonWrapper>
            <IonButton expand='block' fill="clear" color="dark" onClick={ () => LoginUser()}>
                Login
            </IonButton>
          </ButtonWrapper>
            <TextContainer>{answer ? answer : ""} </TextContainer>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  font-weight: bold;
  text-aglin: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;