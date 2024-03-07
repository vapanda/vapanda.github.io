<script>
export default {
  name: "HeaderComponent"
}
</script>

<template>
  <Toolbar class="bg-white">
    <template #center>
      <RouterLink to="/">
      <img src="../images/vpanda.png" height="50">
      </RouterLink>
    </template>

    <template #end>
      <RouterLink to="/contact">
      <Button icon="pi pi-phone" class="mr-2"/>
      </RouterLink>
    </template>
  </Toolbar>
</template>

