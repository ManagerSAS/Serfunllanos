<template>
    <v-container fluid>
		<v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Welcome/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Salas/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Cenizarios/>
            </v-col>
        </v-row> 
         <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <PlansVitalicios/>
            </v-col>
        </v-row>       
    </v-container>
</template>
<script>


import Welcome from '~/components/homenajes/Welcome.vue';
import Salas from '~/components/homenajes/SalasVip.vue';
import Cenizarios from '~/components/homenajes/Cenizarios.vue';
import PlansVitalicios from '~/components/homenajes/PlansVitalicios.vue';

export default {
    components:{
        Welcome, Salas, Cenizarios, PlansVitalicios
    },
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
</style>