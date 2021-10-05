<template>
    <v-snackbar
        class="pb-8"
        :timeout="3000"
        :value="snackbar"
        :color="colorSnackbar"
        rounded="pill"
    > {{ message }} </v-snackbar>
</template>
<script>
export default {
    props:{
        snackbar:{
            type: Boolean,
            required: true
        },
        message:{
            type: String,
            required: true
        },
        colorSnackbar:{
            type: String,
            required: true
        }
    }
}
</script>