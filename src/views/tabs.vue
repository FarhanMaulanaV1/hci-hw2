<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="HomePage" href="/tabs/HomePage">
            <ion-icon src="img/home.svg" />
          </ion-tab-button>

          <ion-tab-button tab="PageSecond" href="/tabs/Page2">
            <ion-icon src="img/pond.svg" />
          </ion-tab-button>

        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
  import { ellipse, square, triangle } from 'ionicons/icons';

  export default defineComponent({
    name: 'TabsUtama',
    components: {IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage, IonRouterOutlet },
    setup() {
      return {
        ellipse, 
        triangle,
      }
    }
  });
  </script>