import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonInput, IonItem, IonList, IonItemDivider, IonButton } from '@ionic/react';
import styled from 'styled-components';
import axios from 'axios';

const Register: React.FC = () => {

  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const [success, setSuccess] = useState<boolean>();

  const CreateUser = async () => {
    if (!username || !password || !confirmPassword) {
      alert("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    axios.post("http://localhost:3000/register", {
      username: username,
      password: password
    })
    .then((response) => {
      console.log(response);
      if (response.status === 201) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
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
          <IonItemDivider>Register</IonItemDivider>
          <IonItem>
            <IonInput value={username} required={true} placeholder="Username" onIonChange={e => setUsername(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={password} required={true} type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={confirmPassword} required={true} type="password" placeholder="Confirm password" onIonChange={e => setConfirmPassword(e.detail.value!)} clearInput></IonInput>
          </IonItem>
          {/* <IonItem> */}
          <ButtonWrapper>
            <IonButton expand='block' fill="clear" color="dark" onClick={ () => CreateUser()}>
                Register
            </IonButton>
          </ButtonWrapper>
          {/* </IonItem> */}
        {/* {success ? <TextContainer>Registration successful</TextContainer> :
                   <TextContainer>Not registered yet</TextContainer>} */}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Register;

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