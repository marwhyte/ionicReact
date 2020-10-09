import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonPage,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
} from "@ionic/react";
import React, { useRef, useState } from "react";
import { calculatorOutline, refreshOutline } from "ionicons/icons";

import "./Home.css";

const Home: React.FC = () => {
  const weightInput = useRef<HTMLIonInputElement>(null);
  const heightInput = useRef<HTMLIonInputElement>(null);
  const [myBMI, setMyBMI] = useState<number | null>();

  const calculateMyBMI = () => {
    const myWeight = weightInput.current!.value;
    const myHeight = heightInput.current!.value;

    if (!myHeight || !myWeight) return;

    const bmi = +myWeight / (+myHeight * +myHeight);
    setMyBMI(bmi);
  };

  const reset = () => {
    weightInput.current!.value = "";
    heightInput.current!.value = "";
    setMyBMI(null);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BMI Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-content ion-padding">
        <IonItem>
          <IonLabel position="floating">Your Height</IonLabel>
          <IonInput ref={heightInput} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Your Weight</IonLabel>
          <IonInput ref={weightInput} />
        </IonItem>
        <IonGrid className="ion-text-center ion-margin">
          <IonRow>
            <IonCol>
              <IonButton onClick={calculateMyBMI}>
                <IonIcon icon={calculatorOutline} slot="start" /> Calculate
              </IonButton>
            </IonCol>
            <IonCol>
              <IonButton onClick={reset}>
                <IonIcon icon={refreshOutline} slot="start" /> Reset
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              {myBMI ? (
                <IonCard>
                  <IonCardContent>{myBMI}</IonCardContent>
                </IonCard>
              ) : (
                <div></div>
              )}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
