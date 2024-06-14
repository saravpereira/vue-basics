<template>
    <Form @submit="onSubmit" :validation-schema="formSchema">
        <div class="mb-3">
            <label for="name">Name</label>
            <!-- <Field name="name" 
            placeholder="Enter your name"
            :rules=[isRequired,validateName]
            class="form-control"
            /> -->
            <Field name="name" 
            placeholder="Enter your name"
            class="form-control"
            />
            <ErrorMessage name="name" as="div" v-slot="{message}">
              <div class="alert alert-danger" role="alert">
                {{ message }}
              </div>
            </ErrorMessage>
        </div>

        <button class="btn btn-primary">
          Submit
        </button>
    </Form>
      

</template>

<script setup>
  import {Field, Form, ErrorMessage } from 'vee-validate';
  import * as yup from 'yup';

  const formSchema = yup.object({
    name: yup.string().required('Thee name is required').max(5, 'Sorry a max of 5')
  })

  const onSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm()
  }

  // const isRequired = (value) => {
  //   if(!value) {
  //     return 'This field is required'
  //   }
  //   return true
  // }

  // const validateName = (value) => {
  //   if(value !== "Steve"){
  //     return true
  //   }

  //   return 'You are not allowed Steve!'
  // }

</script>