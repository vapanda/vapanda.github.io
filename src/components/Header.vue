<script>
import {defineComponent, ref} from "vue";

export default defineComponent ({
  name: "HeaderComponent",
  data(){
    return{
      cantidad : 0
    }
  },
  methods: {
    ChangedCantidad(resultado) {
      this.cantidad += resultado;
    }
  }
});
</script>

<template>
  <Toolbar class="bg-white ">
    <template #start>
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

