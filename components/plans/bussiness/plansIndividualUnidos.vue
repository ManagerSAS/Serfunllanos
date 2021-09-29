<template>
    <div>
        <v-row class="mb-15" align="center" justify="center">
            <v-col cols="12" sm="12" md="6" class="secondary--text">
                <h1 class="display-1 font-weight-bold color-blue-dark mb-6"> Plan Unidos</h1>
                <p>
                    Diseñado para que puedas proteger a 6 integrantes de tu núcleo familiar hasta el 4to grado de consanguinidad y hasta el 2do grado de afinidad.
                </p>
                <ul class="mb-6">
                    <li> Afiliado principal sin límite de edad.  </li>
                    <li> 6 beneficiarios hasta los 74 años.  </li>
                </ul>
                <v-btn
                    class="shadow-principal btn-hover"
                    rounded
                    color="blue accent-3"
                    dark                    
                >
                    Adquirir plan mi familia
                </v-btn>
            </v-col>
            <v-col cols="12" sm="12" md="6" class="secondary--text text--right">
                <v-img
                    lazy-src="https://res.cloudinary.com/dbepipmro/image/upload/v1632346824/planUnidosIndividual_gfmlvy.png"
                    src="https://res.cloudinary.com/dbepipmro/image/upload/v1632346824/planUnidosIndividual_gfmlvy.png"
                    width="550"
                ></v-img>
            </v-col>
        </v-row>

        <v-row>
            <v-col>
                <h3 class="font-weight-bold color-blue-dark"> Cobertura: </h3>
                <p class="secondary--text"> Aplica términos y condiciones. </p>
            </v-col>
        </v-row>

        <v-row class="mt-10 mb-15">

            <v-col 
                cols="12" sm="12" md="3" 
                class="secondary--text"
                v-for="({title, icon, list}, index) in coberturaMiFamilia10"
                :key="index"    
            >
                <v-card class="rounded-xl card-shadow" height="340">
                    <div class="pl-4 pt-4 mb-2">
                        <v-card width="84" class="rounded-xl box-shadow-blue pa-5 text-center" color="blue accent-3" dark>
                            <v-icon>
                                {{ icon }}
                            </v-icon>
                        </v-card>
                    </div>
                    <v-card-title class="color-blue-dark">
                        {{ title }}
                    </v-card-title>
                    <v-card-text>
                        <v-divider class="mb-4"></v-divider>
                        <ul>
                            <li 
                                v-for="(item, i) in list"
                                :key="i"                                
                            > {{ item }} </li>                            
                        </ul>
                    </v-card-text>                    
                </v-card>            
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            coberturaMiFamilia10:[
                {
                    title: 'Despedida',
                    icon: 'mdi-hand-heart mdi-36px',
                    list:[
                        'Cinta membretada.',
                        'Transporte para acompañantes.',
                        'Carroza fúnebre.',
                        'Cremación o inhumación por 4 años con los convenios que tenga la red nacional Los Olivos. '
                    ]
                },
                {
                    title: 'Desprendimiento',
                    icon: 'mdi-human-handsdown mdi-36px',
                    list:[
                        'Atención las 24 horas',
                        'Arreglo estético.',
                        'Cofre.',
                        'Traslado Nacional.'
                    ]
                },
                {
                    title: 'Acogida',
                    icon: 'mdi-mother-heart mdi-36px',
                    list:[
                        'Sala de velación.',
                        'Velación Virtual.',
                        'Acompañamiento musical.',
                        'Arreglo floral.'
                    ]
                },
                {
                    title: 'Renacimiento',
                    icon: 'mdi-human-handsup mdi-36px',
                    list:[
                        'Misa mensual y anual.',
                        'Encuentros de apoyo y duelo. ',
                    ]
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.acortag-volver{
    text-decoration: none;
}
</style>