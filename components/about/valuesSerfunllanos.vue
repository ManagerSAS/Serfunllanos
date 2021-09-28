<template>
    <div class="mt-15 mb-15">
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="6">
                <h2 class="display-1 olivos--text font-weight-bold">
                    Valores Serfunllanos
                </h2>
            </v-col>
        </v-row>
        <v-row class="mt-15">
            <v-col 
                v-for="({icon, title, description}, index) in values"
                :key="index"
                cols="12" sm="12" md="12" lg="6">
                <v-card class="rounded-xl pa-3 card-shadow-2">
                    <v-row>
                        <v-col cols="2">
                            <v-card class="rounded-xl text-center pa-6 box-shadow-green" outlined color="teal darken-2" dark>
                                <v-icon>
                                    {{ icon }} mdi-24px
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
            values:[
                {
                    icon: 'mdi-account',
                    title: 'Respeto',
                    description: 'Nuestras acciones corresponden con las necesidades éticas y morales de nuestra comunidad, los intereses sociales y económicos de nuestros colaboradores y empresas asociadas, así como con el cumplimiento de nuestras obligaciones frente al Estado.'
                },
                {
                    icon: 'mdi-account',
                    title: 'Rentabilidad',
                    description: 'Nuestras acciones corresponden con las necesidades éticas y morales de nuestra comunidad, los intereses sociales y económicos de nuestros colaboradores y empresas asociadas, así como con el cumplimiento de nuestras obligaciones frente al Estado.'
                },
                {
                    icon: 'mdi-account',
                    title: 'Responsabilidad',
                    description: 'Asumimos nuestras funciones con la responsabilidad y cumplimiento que garantiza nuestra propia satisfacción, la de nuestros clientes y los resultados esperados por nuestras empresas asociadas.'
                },
                {
                    icon: 'mdi-account',
                    title: 'Honestidad',
                    description: 'La honradez, disciplina y constancia rigen nuestra conducta y comportamiento con todos nuestros relacionados y comunidad en general.'
                },
                {
                    icon: 'mdi-account',
                    title: 'Productividad',
                    description: 'Nuestras acciones están encaminadas al uso óptimo de los recursos disponibles para obtener buenos resultados y más de lo planeado en el menor tiempo posible.'
                },
                {
                    icon: 'mdi-account',
                    title: 'Competitividad',
                    description: 'Las mejores prácticas de calidad, ambientales ,organizacionales, de mercado y desarrollo de personal asegurarán nuestra mejor oferta de servicios en cualquier condición de mercado.'
                },
            ]
        }
    }
}
</script>