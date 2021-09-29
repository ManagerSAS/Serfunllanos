<template>
    <v-alert
        
        border="left"
        colored-border
        color="teal darken-3"
        elevation="3"
    >
        <b>Nota:</b> {{ message }}                            
    </v-alert>
</template>
<script>
export default {
    props:{
        message:{
            type: String,
            required: true
        }
    }
}
</script>