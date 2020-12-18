import React from "react";
import {IonPage, IonHeader,IonCard, IonToolbar, IonTitle, IonContent,IonCardContent,IonFab,IonFabButton,IonFabList,IonIcon,IonCardHeader,IonCardTitle,} from "@ionic/react";
import { headset,heart,information,help, home} from 'ionicons/icons';
import './themes/variables.css';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';


function infoPage() {
    return (
      
      <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><i>Information!</i></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Welcome to our Piano App! This app was created by Team Osmium. <br /><br />
                This app not only allows for you to play the piano by mouse or keyboard, but also shows features connected to the keys you're playing. These features include: </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
                1. Midi Number corresponding to the key clicked.
                2. The name of the note being played.
                3. The note frequency of the note being played.
                
                We hope you enjoy the app and have fun playing!

      </IonCardContent>
        </IonCard>
<IonFab vertical="top" horizontal="end" slot="fixed">
            <IonFabButton>
            <IonIcon icon={heart} />
          </IonFabButton>
    
          
          <IonFabList side="bottom">
            <IonFabButton routerLink= "/mess"><IonIcon icon={help} /></IonFabButton>
          </IonFabList>
          <IonFabList side="start">
            <IonFabButton  routerLink= "/"><IonIcon icon={home} /></IonFabButton>
          </IonFabList>

        </IonFab>

        </IonContent>
        </IonPage>

    )
}
export default infoPage;