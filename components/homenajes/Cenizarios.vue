<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="8">
                <h2 class="color-blue-dark font-weight-bold mb-6">
                   Cenizarios:
                </h2>
                <p class="secondary--text">
                    Distinción y sobriedad en nuestros Cenizarios, que se visten de gala para albergar los sentimientos de muchas familias, para quienes custodiamos sus tesoros más preciados, representados en las memorias de sus seres queridos en un ambiente tranquilo y confortable
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="3"
                v-for="({title, subtitle, img}, index) in salas"
                :key="index"
            >
                <v-card class="rounded-xl card-shadow-2">
                    <v-img
                        :lazy-src="img"
                        :src="img"
                        height="200"
                    ></v-img>
                    <v-card-title> {{ title }}</v-card-title>
                    <v-card-subtitle> {{ subtitle }} </v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            salas:[
                {
                    title: 'Cenizario sencillo',
                    subtitle: 'Villavicencio',
                    img:'https://res.cloudinary.com/dbepipmro/image/upload/v1632414659/CenizarioSencillo_o9ubye.webp'
                },
                {
                    title: 'Cenizario doble',
                    subtitle: 'Villavicencio',
                    img:'https://res.cloudinary.com/dbepipmro/image/upload/v1632414665/CenizarioDoble_uun45g.webp'
                },
                {
                    title: 'Cenizario octagonal',
                    subtitle: 'Villavicencio',
                    img:'https://res.cloudinary.com/dbepipmro/image/upload/v1632414663/CenizarioExagonal_tenrwo.webp'
                },
            ]
        }
    }
}
</script>