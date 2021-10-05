<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="8">
                <h2 class="color-blue-dark font-weight-bold mb-6">
                   Cenizarios
                </h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col 
                v-for="({title, subtitle, img}, index) in cenizarios"
                :key="index"
                cols="12" sm="4" md="3" lg="3"        
            >
                <v-card class="rounded-xl card-shadow pa-5">
                    <v-card class="rounded-xl" elevation="8">
                        <v-img
                            :lazy-src="img"
                            :src="img"
                            height="350"
                            class="pa-2 "
                        ></v-img>
                    </v-card>
                    <v-card-title class="subtitle-1"> {{ title }} </v-card-title>
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
            cenizarios:[
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