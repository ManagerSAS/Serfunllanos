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
        <v-row justify="center" align="center">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <v-row>
                    <v-col cols="1">
                        <h3 class="font-weight-bold color-blue-dark mb-6"> Empresariales: </h3>
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        
		<v-row justify="center" align="center" class="mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <CompanyFamily/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <CompanyUnidos10/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <CompanyUnidos/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>

import CompanyFamily from '~/components/plans/bussiness/plansCompanysFamily.vue';
import CompanyUnidos10 from '~/components/plans/bussiness/plansCompany10.vue';
import CompanyUnidos from '~/components/plans/bussiness/plansCompanyUnidos.vue';

export default {
    components:{
        CompanyFamily, CompanyUnidos10, CompanyUnidos
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