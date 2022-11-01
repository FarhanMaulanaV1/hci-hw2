<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-title>Kolam</ion-title>
            </ion-col>
            <ion-col size="1.2">
              <ion-icon src="img/Sorting.svg"></ion-icon>
            </ion-col>
            <ion-col size="1">
              <ion-icon src="img/Vector.svg"></ion-icon>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-list>
        <ion-card color="dark">
          <ion-item lines="inset" color="dark">
            <ion-label><strong>Alpha</strong></ion-label>
            <ion-button slot="end" size="small" color="success">
              <span style="color:white"> <strong>Aktif</strong></span>
            </ion-button>
          </ion-item>
          <ion-card-content>
            <ion-grid>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/calendar+.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>01-09-2022</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Timesheet.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>90 hari</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Whole Fish.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>209 ekor</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card color="dark">
          <ion-item lines="inset" color="dark">
            <ion-label><strong>Beta</strong></ion-label>
            <ion-button slot="end" size="small" color="danger">
              Tidak Aktif
            </ion-button>
          </ion-item>
          <ion-card-content>
            <ion-grid>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/calendar+.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>01-09-2022</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Timesheet.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>90 hari</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Whole Fish.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>209 ekor</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card color="dark">
          <ion-item lines="inset" color="dark">
            <ion-label><strong>Charlie</strong></ion-label>
            <ion-button slot="end" size="small" color="success">
              <span style="color:white"> <strong>Aktif</strong></span>
            </ion-button>
          </ion-item>
          <ion-card-content>
            <ion-grid>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/calendar+.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>01-09-2022</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Timesheet.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>90 hari</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Whole Fish.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>209 ekor</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card color="dark">
          <ion-item lines="inset" color="dark">
            <ion-label><strong>Delta</strong></ion-label>
            <ion-button slot="end" size="small" color="success">
              <span style="color:white"> <strong>Aktif</strong></span>
            </ion-button>
          </ion-item>
          <ion-card-content>
            <ion-grid>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/calendar+.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>01-09-2022</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Timesheet.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>90 hari</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Whole Fish.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>209 ekor</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>

        <ion-card color="dark">
          <ion-item lines="inset" color="dark">
            <ion-label><strong>Epsilon</strong></ion-label>
            <ion-button slot="end" size="small" color="success">
              <span style="color:white"> <strong>Aktif</strong></span>
            </ion-button>
          </ion-item>
          <ion-card-content>
            <ion-grid>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/calendar+.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>01-09-2022</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Timesheet.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>90 hari</p>
                </ion-col>
              </ion-row>
              <ion-row class="ion-justify-content-start">
                <ion-col size="1">
                  <ion-icon src="img/Whole Fish.svg" id="inline"></ion-icon>
                </ion-col>
                <ion-col size="auto">
                  <p>209 ekor</p>
                </ion-col>
              </ion-row>
            </ion-grid>
          </ion-card-content>
        </ion-card>
      </ion-list>
      <ion-fab vertical="bottom" horizontal="end" slot="fixed">
        <ion-fab-button>
          <ion-icon src="img/add-svgrepo-com.svg"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
  
<script lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCol, IonRow, IonList, IonFab, IonFabButton, IonGrid, IonLabel, IonIcon } from '@ionic/vue';

import{
  add
} from 'ionicons/icons'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageSecond',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar, IonCol, IonRow, IonList, IonFab, IonFabButton, IonGrid, IonLabel, IonIcon
  },
  setup(){
    return{
      add
    }
  }
});
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap%27');
ion-list {
  background-color: rgba(0, 0, 0, 0.822);
}

ion-page{
  font-family: 'Poppins';
  font-size: 20px;
}
ion-icon{
  font-size: 24px;
}
ion-fab-button ion-icon{
  font-size: 30px;
  font-weight: 900;
}
ion-card{
  border-radius: 20px;
}
</style>
  