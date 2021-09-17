<template>
    <v-row align="center" class="mt-15">
        <v-col cols="12" sm="12" md="12" lg="5" xl="5">
            <div class="rounded-xl">
                <v-carousel
                    cycle
                    hide-delimiters
                    show-arrows-on-hover
                    class="rounded-xl"
                    height="600"

                >
                                
                    <v-carousel-item
                        v-for="({src}, i) in slides"
                        :key="i"
                        :src="src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    >
                    </v-carousel-item>
                </v-carousel>

            </div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
            <div class="ml-0 ml-md-15 pl-md-6">
                <div class="mb-6">
                    <h1>Exclusivas Asistencias <br> para ti y toda tu familia.</h1>
                    <p>Hay momentos únicos para vivirlos una y otra vez.</p>
                    <p>Adquiere grandes beneficios en tu plan de previsión exequial, ven y Conoce el complemento ideal para la protección y tranquilidad en los momentos más importantes de tu vida y la de tu familia. </p>
                </div>
                <div class="mb-6">
                    <v-btn 
                        class="teal accent-3 shadow-principal btn-hover"
                        rounded
                        dark
                        large
                    >
                        Conoce todas las asistencias
                    </v-btn>
                </div>

            </div>
        </v-col>
    </v-row>
</template>
<script>

export default{

    data(){
        return{
            cycle: false,
            slides: [
                { text:'Asistencia Medica', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631825541/Doctora_rtmqb8.jpg' },
                { text:'Asistencia desempleo', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631831727/Personal_gcvquy.jpg'  },
                { text:'Asistencia Tercera Edad', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631831727/Tercera_Edad_lmgdec.jpg'  },
                { text:'Asistencia Para Mascota', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631831728/Mascota_lssv2t.jpg'  },
                { text:'Asistencia Telefonica', to: '', src: 'https://res.cloudinary.com/dbepipmro/image/upload/v1631831728/Telefonica_kcyeu7.jpg'  },
            ],
        }
    }

}
</script>
