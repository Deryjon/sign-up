<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="signUp">
      <v-text-field
        v-model="formData.name"
        :error-messages="v$.formData.name.$errors[0]?.$message"
        label="Full name"
      ></v-text-field>
      <v-text-field
        v-model="formData.phone"
        :error-messages="v$.formData.phone.$errors[0]?.$message"
        label=" Phone number"
      ></v-text-field>
      <v-text-field
        v-model="formData.email"
        :error-messages="v$.formData.email.$errors[0]?.$message"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="formData.password"
        :error-messages="v$.formData.password.$errors[0]?.$message"
        label="Password"
      ></v-text-field>
      <v-text-field
        v-model="formData.confirmPassword"
        :error-messages="v$.formData.confirmPassword.$errors[0]?.$message"
        label="Confirm Password"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Sign up</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  integer,
  sameAs,
} from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data: () => ({
    formData: {
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  }),
  validations() {
    return {
      formData: {
        name: { required, minLength: minLength(3), maxLength: maxLength(20) },
        phone: { required, integer, maxLength: maxLength(13) },
        email: { required, email },
        password: {
          required,
          minLength: minLength(8),
          maxLength: maxLength(20),
        },
        confirmPassword: { sameAs: sameAs(this.formData.password) },
      },
    };
  },
  methods: {
    async signUp() {
      console.log(this.v$);
      const isValid = await this.v$.$validate();
      if (!isValid) return;
    },
  },
};
</script>
