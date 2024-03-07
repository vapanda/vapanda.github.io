<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import CatalogComponent from "@/components/CatalogComponent.vue";
import CarouselComponent from "@/components/CarouselComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {FooterComponent, CarouselComponent, CatalogComponent, HeaderComponent}
};

</script>

<template>
  <main>
    <div class="card">
      <HeaderComponent/>
      <div class="align-items-center mb-5 mt-4 mr-5 ml-5">
        <CarouselComponent/>
        <CatalogComponent/>
      </div>
    </div>
  </main>
  <FooterComponent/>
</template>

