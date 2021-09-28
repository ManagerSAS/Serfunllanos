<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="6">
                <h2 class="color-blue-dark font-weight-bold mb-6">
                   Salas Vip:
                </h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col 
                v-for="({title, subtitle, img}, index) in salas"
                :key="index"
                cols="12" sm="12" md="12" lg="3"
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
                    title: 'Sala Diamante',
                    subtitle: 'Villavicencio',
                    img:'https://res.cloudinary.com/dbepipmro/image/upload/v1632410784/SalaDiamante_nzxuxn.webp'
                },
                {
                    title: 'Sala Presidencial',
                    subtitle: 'Villavicencio',
                    img:'https://res.cloudinary.com/dbepipmro/image/upload/v1632411367/SalaPresidencial_s6gfvh.webp'
                },
                {
                    title: 'Sala Vip',
                    subtitle: 'Acacias',
                    img:'https://res.cloudinary.com/dbepipmro/image/upload/v1632411537/salaVip_z1wuta.webp'
                },
                {
                    title: 'Sala Presidencial',
                    subtitle: 'Yopal',
                    img:'https://res.cloudinary.com/dbepipmro/image/upload/v1632411767/sala3_rc72ex.webp'
                },
                {
                    title: 'Sala Presidencial',
                    subtitle: 'Granada',
                    img:'https://res.cloudinary.com/dbepipmro/image/upload/v1632412059/Sala3_uxmnaq.webp'
                }
            ]
        }
    }
}
</script>