<template>
    <v-container fluid>
		<v-row justify="center" align="center" class="pt-12">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row align="center">
                    <v-col cols="4">
                        <img src="../static/logo.webp" alt="" width="181" class="mb-6"><br>
                    </v-col>
                    <v-col cols="8">
                        <span class="secondary--text"> En los Olivos Llanos Orientales atendemos y orientamos a nuestros afiliados para la coordinación de homenajes las 24 horas de día, los 365 días del año en el PBX 6 68 52 86 o nuestra línea 01 8000 915 286. </span>
                    </v-col>
                </v-row>
			</v-col>
		</v-row>
        <v-row justify="center" align="center" class="pt-12 pb-6">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row justify="center">
                    <v-col cols="12" sm="12" md="12" lg="4">
                        <p class="secondary--text mb-10">
                           <b> Dirección oficina principal: </b><br> Avenida 40 N° 20-05/15
                        </p>
                        <p class="secondary--text mb-10">
                            <b> Línea trámites administrativos: </b><br> (8) 6653986/87
                        </p>
                        <p class="secondary--text mb-10">
                            <b> Línea atención al cliente: </b><br> 01 8000 915 286 PBX 6 68 52 86
                        </p>
                        <p class="secondary--text mb-10">
                            <b> E-mail: </b><br> contactenosvillavicencio@losolivos.co
                        </p>
                        <img src="../static/supersolidaria.png" alt="" width="280">

                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="4">
                        <h3 class="secondary--text font-weight-bold mb-4">
                            Enlaces de intéres
                        </h3>
                        <div
                            v-for="({text, to}, index) in interesting"
                            :key="index"
                            class="pa-2"
                        >
                            <Nuxt-link class="link-interesting secondary--text" :to="to"> {{ text }} </Nuxt-link>
                        </div>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="4">
                        <h3 class="secondary--text font-weight-bold mb-4">
                            Enlaces de funcionarios
                        </h3>
                        <div
                            v-for="({text, to}, index) in funcionary"
                            :key="index"
                            class="pa-2"
                        >
                            <Nuxt-link class="link-interesting secondary--text" :to="to"> {{ text }} </Nuxt-link>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="pt-12 pb-6">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row justify="end">
                    <v-col cols="12" sm="6" class="text-right">
                        <span> ©copyright | Todos los derechos reservados 2021 By: </span>
                        <a href="htpps://www.agenciamanager.com"> Agencia Manager</a>
                    </v-col>                    
                </v-row>
            </v-col>
        </v-row>
	</v-container>
</template>
<script>
export default {
    data(){
        return{
            interesting:[
                { text: 'Actualización de datos', to: '/' },
                { text: 'Novedades empresariales', to: '/novedades-empresariales' },
                { text: 'Proteccion de datos', to: '/' },
                { text: 'Asistencias', to: '/' },
                { text: 'Seguros de vida', to: '/' },
                { text: 'Actualizacion RTE', to: '/' },
                { text: '¿Preguntas frecuentes?', to: '/' },

            ],
            funcionary:[
                { text: 'Normatividad Covid 19', to: '/' },
                { text: 'Afiliaciones', to: '/' },
                { text: 'Intranet', to: '/' },
                { text: 'ORFEO', to: '/' },
                { text: 'Los Olivos IG', to: '/' },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    ul{
        list-style: none;
    }
    .link-interesting{
        text-decoration: none;        
    }
</style>