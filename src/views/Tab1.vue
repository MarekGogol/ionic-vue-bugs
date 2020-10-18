<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <h2>Infinity ionChange loop</h2>
      <ion-toggle :checked="checked" @ionChange="onChangeBuggy"></ion-toggle>
      <p>checked: {{ checked ? 'yes' : 'no' }}</p>
      <p>
        <strong>description:</strong>
        When you press ion-toggle, state in "checked" property will be immidiately updated. What is okay.
        <br>
        <br>
        But if you change this state programmicaly by this.checked = !this.checked, ionChange will trigger as well. But it should not. Or should it?</p>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonToggle } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonToggle },

  data(){
    return {
      checked : true,
      immidiatelyChecked : true,
    }
  },

  methods: {
    onChangeBuggy(e){
      if ( this.timeout ){
        clearTimeout(this.timeout);
      }

      this.checked = e.target.checked;

      //We want turn off checkbox automatically after 1 second
      this.timeout = setTimeout(() => {
        this.checked = !e.target.checked;
      }, 1000);
    },
  }
}
</script>