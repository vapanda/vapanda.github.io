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
        this.visible = true;
      }
    }
  }
});
</script>

<template>
  <Toolbar class="bg-white ">
    <template #start>
      <div class="card flex justify-content-center">
        <Dialog v-model:visible="visible" modal header="¡ÚLTIMAS NOVEDADES!" :style="{ width: '50rem' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
            <div class="flex flex-column align-items-center" style="flex: 1">
              <div class="flex align-items-center justify-content-center">
                <img src="https://raw.githubusercontent.com/Vapanda/vapanda.github.io/master/src/images/icon.png" alt="circle" />
              </div>
              <p class="font-medium text-lg my-3 text-900">🔥​ ¡SI NOS SIGUES EN INSTAGRAM TE REBAJAMOS HASTA UN 1€! 🔥​</p>
              <div>
                <a href="https://www.instagram.com/vapers.castellon/" class="decoration" target="_blank">
                  <Button class="flex p-button-sm align-items-center" severity="danger" label="¡Os seguiré!" @click="onReply()"></Button>
                </a>
              </div>
            </div>
        </Dialog>
        <Button @click="showTemplate" label="OFERTAS" severity="danger" />
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

