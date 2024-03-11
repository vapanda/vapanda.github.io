<script>
export default {
  name: "FooterComponent"
}
</script>

<template>
  <footer class="footer flex align-items-center justify-content-between p-1 mt-5 -mb-6 -mr-2 -ml-2">
    <div class="social-icons ml-3 mt-3">
      <a href="https://www.instagram.com/vapers.castellon/" target="_blank" rel="noopener noreferrer">
        <i class="pi pi-instagram"></i>
      </a>
      <a href="mailto:vapanda@gmail.com" target="_blank" rel="noopener noreferrer">
        <i class="pi pi-envelope"></i>
      </a>
    </div>

    <small class="ml-5">&copy; 2024 VAPANDA. Todos los derechos reservados.</small>

    <div class="location justify-content-center align-items-center mt-3">
      <i class="pi pi-map-marker"></i>
      <a href="https://maps.app.goo.gl/bSofr8Nd8JsTFcW17" target="_blank" rel="noopener noreferrer"
         class="text-white text-decoration-none">
        <span>¡Nuestra localización!</span>
      </a>
    </div>


  </footer>
</template>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 1rem;
}

.social-icons {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.social-icons a {
  color: #fff;
  margin-right: 1rem;
}

.location {
  margin-bottom: 1rem;
}

.location i {
  margin-right: 0.5rem;
}
</style>
