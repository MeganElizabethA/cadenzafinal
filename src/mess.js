
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton ,IonFab, IonFabButton, IonFabList } from '@ionic/react';
import React, { Component } from 'react';
import { heart,  information, home, help, headset} from 'ionicons/icons';
/*describe how to help*/


import './themes/variables.css';


function mess()
{
   return (
 <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle><i>Need Help?</i></IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>What is an octave? How can I tell what octave I'm using?</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
          In terms of music, an octave is the distance between one note (like C#) and the next note bearing its same name (the next C# that’s either higher or lower). Press any key and look at the bar above the keys. 
      </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>How do I change the volume?</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
         Use the Volume button on your device.
      </IonCardContent>
        </IonCard>

        <IonFab  vertical="top" horizontal="end" slot="fixed">
          <IonFabButton>
            <IonIcon icon={heart} />
          </IonFabButton>

          <IonFabList side="top">
            <IonFabButton  routerLink="/"> <IonIcon icon={home} /></IonFabButton>
          </IonFabList>
          <IonFabList side="bottom">
            <IonFabButton routerLink="/infoPage"><IonIcon icon={information} /></IonFabButton>
          </IonFabList>
          
        </IonFab>

      </IonContent>
    </IonPage>
   );
}


export default mess;
