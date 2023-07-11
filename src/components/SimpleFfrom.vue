<template>
  <v-sheet width="300" class="mx-auto">
    <v-form @submit.prevent="signUp">
      <v-text-field
        v-model="formData.name"
        :rules="rules"
        label="Full name"
      ></v-text-field>
      <v-text-field
        v-model="formData.phone"
        :rules="rules"
        label=" Phone number"
      ></v-text-field>
      <v-text-field
        v-model="formData.email"
        :rules="rules"
        label="Email"
      ></v-text-field>
      <v-text-field
        v-model="formData.password"
        :rules="rules"
        label="Password"
      ></v-text-field>
      <v-text-field
        v-model="formData.confirmPassword"
        :rules="rules"
        label="Confirm Password"
      ></v-text-field>
      <v-btn type="submit" block class="mt-2">Sign up</v-btn>
    </v-form>
  </v-sheet>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, maxLength } from "@vuelidate/validators";

export default {
  data: () => ({
    formData: {
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  }),
  validation() {
    return {
      formData: {
        name: {required, minLength(3)},
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  methods: {
    signUp() {
      console.log(this.formData);
    },
  },
};
</script>
