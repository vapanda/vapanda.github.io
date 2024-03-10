<script>
import productosJSON from '@/json/Vapers.json'

const prod = productosJSON
export default {
  name: "CatalogComponent",
  props: ['cantidad'],
  emits: ["change-cantidad"],
  data() {
    return {
      productos: prod,
      layout: 'grid'
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
    },
    show() {
      this.$toast.add({severity: 'success', summary: 'Cesta', detail: 'Añadido a la cesta!!', life: 2000});
      const resultado = 1;
      this.$emit('change-cantidad', resultado)
    }
  }
}
</script>

<template>
  <!--Catálogo de los vapers, total-->
  <div class="card">
    <h1 class="flex justify-content-center align-items-center mt-8 mb-3">CATÁLOGO</h1>
    <DataView :value="productos" :layout="layout">
      <template #grid="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12 sm:col-6 md:col-4 xl:col-6 p-2">
            <div class="p-4 border-1 surface-border surface-card border-round flex flex-column">
              <div class="surface-50 flex justify-content-center border-round p-3">
                <div class="relative mx-auto">
                  <img class="border-round w-full" :src="`${item.imagen}`" :alt="item.nombre" style="max-width: 300px"/>
                  <Tag :value="item.stock" :severity="getSeverity(item.stock)" class="absolute"
                       style="right: 4px; top: 4px"></Tag>
                </div>
              </div>
              <div class="pt-4">
                <div class="flex flex-row justify-content-between align-items-start gap-2">
                  <div>
                    <div class="text-lg font-medium text-900 mt-1">{{ item.nombre }}</div>
                  </div>
                  <div class="surface-100 p-1" style="border-radius: 30px">
                    <div class="surface-0 flex align-items-center gap-2 justify-content-center py-1 px-2"
                         style="border-radius: 30px; box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.04), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)">
                      <span class="text-900 font-medium text-sm">{{ item.rating }}</span>
                      <i class="pi pi-star-fill text-yellow-500"></i>
                    </div>
                  </div>
                </div>
                <div class="flex flex-column gap-4 mt-4">
                  <span class="text-2xl font-semibold text-900">{{ item.precio }}€</span>
                  <div class="flex gap-2">
                    <Toast/>
                    <Button icon="pi pi-shopping-cart" @click="show" label="Cómpralo ya!"
                            :disabled="item.stock === 'OUTOFSTOCK'"
                            class="flex-auto white-space-nowrap"></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>
