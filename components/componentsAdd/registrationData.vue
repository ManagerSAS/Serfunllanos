<template>
    <div>
        <v-row justify="center">
            <v-col cols="12" sm="12" md="12" lg="6" class="text-center">
                <img src="~/static/nav/iconLogin.png" alt="" width="65px">
                <h1 class="secondary--text pt-3 mb-6 display-1 font-weight-bold">
                    Buscar registro
                </h1>
                <v-form autocomplete="off">
                    <v-text-field
                        color="teal darken-4"
                        rounded
                        filled
                        label="Escribe el nombre de la persona o numero de identificación"
                        hint="Presiona 'Enter' para iniciar la busqueda"
                    ></v-text-field>
                </v-form>
            </v-col>
        </v-row>        
    </div>
</template>