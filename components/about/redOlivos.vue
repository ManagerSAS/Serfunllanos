<template>
    <div class="mt-15 mb-15">
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="6" xl="6">
                <div>
                    <h2 class="display-1 olivos--text font-weight-bold">
                        Red Olivos
                    </h2>
                </div>
            </v-col>
        </v-row>

        <v-row class="mt-15 mb-15">
            <v-col cols="12" sm="12" md="12" lg="6" xl="6">
                
                <v-card class="rounded-xl card-shadow-2 mb-6" color="teal darken-3" dark>
                    <v-card-title>
                        Serfunllanos
                        <v-spacer></v-spacer>
                        <v-icon> mdi-map-marker-outline mdi-36px </v-icon>
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="mb-6"></v-divider>
                        Villavicencio, Yopal, Granada, Acacias, Puerto Gaitán, Cumaral, Aguazul, Paz de Ariporo, Inirida, San José del Guaviare.
                    </v-card-text>
                </v-card>

                <v-card class="rounded-xl card-shadow-2 mb-6">
                    <v-card-title class="olivos--text">
                        Region caribe
                        <v-spacer></v-spacer>
                        <v-icon color="teal accent-4"> mdi-map-marker-outline mdi-36px </v-icon>
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="mb-6"></v-divider>
                        Barranquilla, Cartagena, Monteria, Rioacha, Santa Marta, Valledupar.                        
                    </v-card-text>
                </v-card>

                <v-card class="rounded-xl card-shadow-2 mb-6">
                    <v-card-title class="olivos--text">
                        Santander
                        <v-spacer></v-spacer>
                        <v-icon color="teal accent-4"> mdi-map-marker-outline mdi-36px </v-icon>
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="mb-6"></v-divider>
                        Barrancabermeja, Bucaramanga, Cúcuta.
                    </v-card-text>
                </v-card>
                <v-card class="rounded-xl card-shadow-2 mb-6">
                    <v-card-title class="olivos--text">
                        Costa pacifica
                        <v-spacer></v-spacer>
                        <v-icon color="teal accent-4"> mdi-map-marker-outline mdi-36px </v-icon>
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="mb-6"></v-divider>
                        Cáli, Palmira, Pasto, Tulúa.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="12" lg="6" xl="6">
                <v-card class="rounded-xl card-shadow-2 mb-6">
                    <v-card-title class="olivos--text">
                        Zona centro
                        <v-spacer></v-spacer>
                        <v-icon color="teal accent-4"> mdi-map-marker-outline mdi-36px </v-icon>
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="mb-6"></v-divider>
                        Bogotá, Duitama, Ibague, Neiva, Tunja
                    </v-card-text>
                </v-card>
                
                <v-card class="rounded-xl card-shadow-2 mb-6">
                    <v-card-title class="olivos--text">
                        Antioquia
                        <v-spacer></v-spacer>
                        <v-icon color="teal accent-4"> mdi-map-marker-outline mdi-36px </v-icon>
                    </v-card-title>
                    <v-card-text>
                        Medellin.
                    </v-card-text>
                </v-card>

                <v-card class="rounded-xl card-shadow-2 mb-6">
                    <v-card-title class="olivos--text">
                        Eje cafetero
                        <v-spacer></v-spacer>
                        <v-icon color="teal accent-4"> mdi-map-marker-outline mdi-36px </v-icon>
                    </v-card-title>
                    <v-card-text>
                        Armenia, Manizales, Pereira.
                    </v-card-text>
                </v-card>

            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data() {
        return{
            cycle: false,
            slides: [
                { text:'Asistencia Medica', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631825541/Doctora_rtmqb8.jpg' },
                { text:'Asistencia desempleo', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631831727/Personal_gcvquy.jpg'  },
                { text:'Asistencia Tercera Edad', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631831727/Tercera_Edad_lmgdec.jpg'  },
                { text:'Asistencia Para Mascota', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631831728/Mascota_lssv2t.jpg'  },
                { text:'Asistencia Telefonica', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631831728/Telefonica_kcyeu7.jpg'  },
            ],
            caribe:['Barranquilla','Cartagena', 'Monteria']
        }        
    },
}
</script>