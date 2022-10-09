import { IonContent, IonPage } from '@ionic/react';
import styled from 'styled-components';

const HomeTab: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <TextContainer>Welcome on the home page of Stéphane's mobile App :)</TextContainer>
      </IonContent>
    </IonPage>
  );
};

export default HomeTab;

const TextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
font-weight: bold;
padding: 0 30px;
max-width: 100%;
`;