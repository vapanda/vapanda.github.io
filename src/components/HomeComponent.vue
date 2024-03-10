<script>
import CarouselComponent from "@/components/CarouselComponent.vue";
import {defineComponent, ref} from "vue";
import CatalogComponent from "@/components/CatalogComponent.vue";

export default defineComponent ({
  name: "HeaderComponent",
  components: {
    CatalogComponent,
    CarouselComponent
  },
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
        <h3 class="mr-5 text-black-alpha-90 hover:text-purple-200">Contacto</h3>
      </RouterLink>
      <RouterLink to="#">
        <i class="pi pi-shopping-cart mr-2 text-black-alpha-90" v-badge="cantidad"  style="font-size: 2rem" />
      </RouterLink>
    </template>
  </Toolbar>

  <div class="align-items-center mb-5 mt-4 mr-5 ml-5">
    <CarouselComponent @change-cantidad="ChangedCantidad"/>
    <CatalogComponent @change-cantidad="ChangedCantidad"/>
  </div>

</template>

<style scoped>
.decoration {
  text-decoration: none
}

</style>

