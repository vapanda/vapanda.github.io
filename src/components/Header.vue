<script>
import {defineComponent, ref} from "vue";

export default defineComponent ({
  name: "HeaderComponent",
  data(){
    return{
      visible: false
    }
  },
  methods: {
    showTemplate() {
      if (!this.visible) {
        this.$toast.add({ severity: 'contrast', summary: ' 🔥​ ¡SI NOS SIGUES EN INSTAGRAM TE REBAJAMOS HASTA UN 1€! 🔥​', group: 'bc' });
        this.visible = true;
      }
    },
    onReply() {
      this.$toast.removeGroup('bc');
      this.visible = false;
    },
    onClose() {
      this.visible = false;
    }
  }
});
</script>

<template>
  <Toolbar class="bg-white ">
    <template #start>
      <div class="card flex justify-content-center">
        <Toast position="bottom-right" group="bc" @close="onClose">
          <template #message="slotProps">
            <div class="flex flex-column align-items-start" style="flex: 1">
              <div class="flex align-items-center gap-2">
                <img src="https://raw.githubusercontent.com/Vapanda/vapanda.github.io/master/src/images/icon.png" alt="circle" />
                <span class="font-bold text-900 text-black-alpha-90">VAPANDA</span>
              </div>
              <div class="font-medium text-lg my-3 text-900 text-black-alpha-90">{{ slotProps.message.summary }}</div>
              <div>
                <a href="https://www.instagram.com/vapers.castellon/" class="decoration" target="_blank">
                <Button class="flex p-button-sm align-items-center" severity="danger" label="¡Os seguiré!" @click="onReply()"></Button>
                </a>
              </div>
            </div>
          </template>
        </Toast>
        <Button @click="showTemplate" label="¡NOVEDAD!" severity="danger" />
      </div>
    </template>

    <template #center>
      <RouterLink to="/">
      <img class="hover:shadow-5" src="../images/vpanda.png" height="70" alt="Imagen Logo">
      </RouterLink>
    </template>

    <template #end>
      <RouterLink to="/contact" class="decoration">
        <h3 class="mr-5 text-black-alpha-90 hover:text-purple-200">CONTACTO</h3>
      </RouterLink>

      <!-- Cesta llamando a variable que cambia cada vez que pulsa el usuario el botón de comprar-->
<!--      <RouterLink to="#">-->
<!--        <i class="pi pi-shopping-cart mr-2 text-black-alpha-90" v-badge="cantidad"  style="font-size: 2rem" />-->
<!--      </RouterLink>-->

    </template>
  </Toolbar>

</template>

<style scoped>
.decoration {
  text-decoration: none
}

</style>

