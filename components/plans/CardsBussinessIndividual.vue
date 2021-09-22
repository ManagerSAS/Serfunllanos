<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="6">
            <v-card class="rounded-xl card-shadow">
                <div class="pl-4 pt-4 mb-2">
                    <v-card width="84" class="rounded-xl box-shadow-blue pa-5 text-center" color="blue accent-3" dark>
                        <v-icon>
                            mdi-city-variant-outline mdi-36px
                        </v-icon>
                    </v-card>
                </div>
                <v-card-title class="color-blue-dark">
                    Empresariales
                </v-card-title>
                <v-card-text>
                    <v-divider class="mb-4"></v-divider>
                    <p>
                        Diseñado para que puedas proteger tu núcleo familiar básico, según tu estado civil (Casado o Soltero), y así garantizar la tranquilidad de cada uno de los miembros de tu familia.                     
                    </p> 
                    <ul>
                        <li> Plan Mi Familia </li>
                        <li> Plan Unidos 10 </li>
                        <li> Plan Unidos </li>
                    </ul>
                </v-card-text>
                <div class="pa-4">
                    <v-btn rounded outlined color="blue accent-4" to="/plans/bussiness">
                        Ver planes
                    </v-btn>
                </div>
            </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6">
            <v-card class="rounded-xl card-shadow">
                <div class="pl-4 pt-4 mb-2">
                    <v-card width="84" class="rounded-xl box-shadow-blue pa-5 text-center" color="blue accent-3" dark>
                        <v-icon>
                            mdi-account-group mdi-36px
                        </v-icon>
                    </v-card>
                </div>
                <v-card-title class="color-blue-dark">
                    Individuales
                </v-card-title>
                <v-card-text>
                    <v-divider class="mb-4"></v-divider>
                    <p>
                        Diseñado para que puedas proteger tu núcleo familiar básico, según tu estado civil (Casado o Soltero), y así garantizar la tranquilidad de cada uno de los miembros de tu familia. 
                    </p>
                    <ul>
                        <li> Plan Unidos 10 </li>
                        <li> Plan Plenitud </li>
                        <li> Plan Unidos </li>
                    </ul>
                </v-card-text>
                <div class="pa-4">
                    <v-btn rounded outlined color="blue accent-4" to="/plans/individual">
                        Ver planes
                    </v-btn>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>
<style lang="scss">
.degrade-blue{
    background-image: radial-gradient(circle at 120.71% 50%, #be5af5 0, #a04ff4 16.67%, #7944f3 33.33%, #3c3cf2 50%, #0037f1 66.67%, #0034ef 83.33%,  100%);
}
</style>