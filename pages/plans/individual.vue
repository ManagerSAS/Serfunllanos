<template>
    <v-container fluid>
        <v-row justify="center" align="center" class="mt-15">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row>
                    <v-col cols="12">
                        <Nuxt-link class="acortag-volver" to="/plans#empresariales"> 
                            <v-icon color="blue darken-2"> mdi-arrow-left </v-icon>
                            Volver 
                        </Nuxt-link>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
		<v-row justify="center" align="center" class="mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <IndividualFamily/>
            </v-col>
        </v-row>        
    </v-container>
</template>
<script>

import IndividualFamily from '~/components/plans/bussiness/plansIndividualUnidos.vue';

export default {
    components:{
        IndividualFamily,
    },
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.acortag-volver{
    text-decoration: none;
}
</style>