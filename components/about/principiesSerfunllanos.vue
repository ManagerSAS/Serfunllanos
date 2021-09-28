<template>
    <div class="mt-15 mb-15">
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="6">
                <h2 class="display-1 olivos--text font-weight-bold">
                    Principios Serfunllanos
                </h2>
            </v-col>
        </v-row>
        <v-row class="mt-15">

            <v-col 
                v-for="({ icon, title, description }, index) in principies"
                :key="index"
                cols="12" sm="12" md="12" lg="6"
            >
                <v-card class="rounded-xl pa-3 card-shadow-2">
                    <v-row align="center">
                        <v-col cols="2">
                            <v-card class="rounded-xl text-center pa-6 box-shadow-green" outlined color="teal darken-2" dark>
                                <v-icon>
                                    {{ icon }} 
                                </v-icon>
                            </v-card>
                        </v-col>
                        <v-col cols="10" class="secondary--text">
                            <h3> {{ title }} </h3>
                            <span> {{ description }} </span>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>        
    </div>
</template>
<script>
export default {
    data(){
        return{
            principies:[
                {
                    icon: 'mdi-account',
                    title: 'Trabajo en equipo',
                    description: 'Las bases de nuestras acciones son : El diseño y oferta integral de planes y servicios, las sinergias entre las áreas de la organización.',
                },
                {
                    icon: 'mdi-hand-heart',
                    title: 'Responsabilidad y Compromiso',
                    description: 'Asumimos la responsabilidad y cumplimiento que garantiza nuestra propia satisfacción, la de nuestros clientes y resultados.',
                },
                {
                    icon: 'mdi-flag',
                    title: 'Liderazgo',
                    description: 'Estamos atentos en la búsqueda de oportunidades de desarrollo en los planes, servicios y las necesidades de nuestros clientes.',
                },
                {
                    icon: 'mdi-eye',
                    title: 'Transparencia',
                    description: 'Todos nuestros actos administrativos son diáfanos y visibles a la luz de nuestros clientes.',
                },
                {
                    icon: 'mdi-emoticon-happy',
                    title: 'Pasión por excelencia',
                    description: 'Nuestro trabajo diario se guía por la calidad y el mejoramiento continuo de nuestros productos y servicios.',
                },
            ]
        }
    }
}
</script>
