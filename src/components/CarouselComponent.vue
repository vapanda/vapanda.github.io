<script>
import productosJSON from '@/json/Vapers.json'

const prod = productosJSON
export default {
  name: "CarouselComponent",
  data() {
    return {
      productos: prod,
      responsiveOptions: [
        {
          breakpoint: '1400px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '1199px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '767px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '575px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    }
  },
  methods: {
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
                  <Button icon="pi pi-shopping-cart" class="ml-2"/>
                </span>
        </div>
      </div>
    </template>
  </Carousel>
</template>
