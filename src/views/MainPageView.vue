<script>
import Home from "@/components/HomeComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {FooterComponent, Home},
};

</script>

<template>
  <main>
    <div class="card">
      <Home/>
    </div>
  </main>
  <FooterComponent/>
</template>

