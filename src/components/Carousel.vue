<script>
import productosJSON from '@/json/Vapers.json'
import responsiveJSON from '@/json/responsiveOptions.json'
import {ref, toRefs, watch} from "vue";

const responsiveOptions = responsiveJSON
const prod = productosJSON
export default {
  name: "CarouselComponent",
  props: ['cantidad'],
  emits: ["change-cantidad"],
  data() {
    return {
      productos: prod,
      responsiveOptions: responsiveOptions
    }
  },
  methods: {
    // Dependiendo del stock saldrá de una forma u otra
    getSeverity(status) {
      switch (status) {
        case 'INSTOCK':
          return 'success';

        case 'LOWSTOCK':
          return 'warning';

        case 'OUTOFSTOCK':
          return 'danger';

        default:
          return null;
      }
    },
    // Muestro por pantalla el mensaje de redireccionando
    show() {
      this.$toast.add({ severity: 'info', summary: 'Redireccionando...', detail: 'Te llevamos al formulario a completar!', life: 2000 });
      // const resultado = 1;
      // this.$emit('change-cantidad', resultado)
    }
  }
}
</script>

<template>
  <div class="flex justify-content-center mt-4">
    <h1>NOVEDADES...</h1>
  </div>

  <!--Carousel de los últimos vapers a la venta-->
  <Carousel :value="productos" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" circular
            :autoplayInterval="4000">
    <template #item="slotProps">
      <div class="border-1 surface-border border-round m-2  p-3">
        <div class="mb-3">
          <div class="relative mx-auto">
            <img :src="`${slotProps.data.imagen}`" :alt="slotProps.data.nombre" class="w-full border-round">
            <Tag :value="slotProps.data.stock" :severity="getSeverity(slotProps.data.stock)" class="absolute"
                 style="right:5px; top: 5px"/>
          </div>
        </div>
        <div class="mb-3 font-medium">
          {{ slotProps.data.nombre }}
        </div>
        <div class="flex justify-content-between align-items-center">
          <div class="mt-0 font-semibold text-xl">{{ slotProps.data.precio }}€</div>
          <span>
            <Toast/>
            <RouterLink to="/contact" class="decoration" @click="show">
                     <Button icon="pi pi-shopping-cart" class="ml-2" @click="show"/>
            </RouterLink>
          </span>
        </div>
      </div>
    </template>
  </Carousel>
</template>
