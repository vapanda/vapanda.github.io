<script>
import Home from "@/components/Header.vue";
import FooterComponent from "@/components/Footer.vue";
import CatalogComponent from "@/components/Catalog.vue";
import CarouselComponent from "@/components/Carousel.vue";

export default {
  components: {CarouselComponent, CatalogComponent, FooterComponent, Home},
};

</script>

<template>
  <main>
    <div class="card">
      <Home/>
      <div class="align-items-center mb-5 mt-4 mr-5 ml-5">
        <CarouselComponent />
        <CatalogComponent />
      </div>
    </div>
  </main>
  <FooterComponent/>
</template>

