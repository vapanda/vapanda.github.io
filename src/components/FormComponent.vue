<script>
export default {
  name: "FormComponent",
  data() {
    return {
      formData: {
        nombre: '',
        telefono: '',
        email: '',
        mensaje: ''
      },
      isValidNombre: true,
      isValidTelefono: true,
      isValidEmail: true,
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      this.validateForm();

      if (this.isValidNombre && this.isValidTelefono && this.isValidEmail) {
        // Enviar datos a un correo electrónico
        const emailBody = `Nombre: ${this.formData.nombre}\nTeléfono: ${this.formData.telefono}\nCorreo Electrónico: ${this.formData.email}\nMensaje: ${this.formData.mensaje}`;
        window.location.href = `mailto:vapandavp@gmail.com?subject=Pedido VP Infinity&body=${encodeURIComponent(emailBody)}`;
      }
    },
    validateForm() {
      // Expresiones regulares para validar campos
      const nombreRegex = /^[a-zA-Z\s]+$/;
      const telefonoRegex = /^[0-9]{10}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Validar nombre
      this.isValidNombre = nombreRegex.test(this.formData.nombre.trim());

      // Validar teléfono
      this.isValidTelefono = telefonoRegex.test(this.formData.telefono.trim());

      // Validar correo electrónico
      this.isValidEmail = emailRegex.test(this.formData.email.trim());

      // Marcar el formulario como enviado
      this.submitted = true;
    },
  },
};
</script>

<template>
  <div class="align-items-center">
    <h1 class="flex justify-content-center">CONTACTA CON UN RESPONSABLE</h1>
    <form @submit.prevent="submitForm" class="w-33">
      <div class="p-fluid">
        <div class="p-field">
          <label for="nombre">Nombre</label>
          <InputText id="nombre" v-model="formData.nombre" :class="{ 'p-invalid': submitted && !isValidNombre }"
                     placeholder="Nombre y 1r Apellido"/>
          <small v-if="submitted && !isValidNombre" class="p-error">Ingrese un nombre válido</small>
        </div>

        <div class="p-field">
          <label for="phone">Teléfono</label>
          <InputText id="phone" v-model="formData.telefono" :class="{ 'p-invalid': submitted && !isValidTelefono }"
                     placeholder="123456789"/>
          <small v-if="submitted && !isValidTelefono" class="p-error">Ingrese un teléfono válido</small>
        </div>

        <div class="p-field">
          <label for="email">Correo electrónico</label>
          <InputText id="email" v-model="formData.email"
                     :class="{ 'p-invalid': submitted && !isValidEmail }" placeholder="userinfinity@example.com"/>
          <small v-if="submitted && !isValidEmail" class="p-error">Ingrese un correo electrónico válido</small>
        </div>

        <div class="p-field">
          <label for="mensaje">Mensaje</label>
          <Textarea id="mensaje" v-model="formData.mensaje"
                    placeholder="Hola, me gustaría comprar / reservar 3 vapers de 13k caladas de STRAWBERRY ICE..."/>
        </div>

        <div class="p-field">
          <Button type="submit" label="Enviar" icon="pi pi-send"/>
        </div>
      </div>
    </form>
  </div>
  <div class="flex justify-content-center mt-5">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49032.78812670234!2d-0.281125932542494!3d39.81710139169384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd600df5895c0557%3A0x1c02af723e136350!2s12600%20Vall%20de%20Ux%C3%B3%2C%20Castell%C3%B3n!5e0!3m2!1ses!2ses!4v1709823930401!5m2!1ses!2ses"
        width="1200" height="450" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>
</template>

<style scoped>
.p-field {
  margin-bottom: 1rem;
}
</style>