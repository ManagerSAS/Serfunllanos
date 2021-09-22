<template>
    <v-container fluid>
		<v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Welcome/>
            </v-col>
        </v-row>
        <v-row id="empresariales" justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0" >
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Cards/>
            </v-col>
        </v-row>
        <v-row id="empresariales" justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0" >
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Asistances/>
            </v-col>
        </v-row>
        <v-row id="empresariales" justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0" >
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Insurances/>
            </v-col>
        </v-row>        
    </v-container>
</template>
<script>
import Welcome from '~/components/plans/Welcome.vue';
import Cards from '~/components/plans/CardsBussinessIndividual.vue';
import Asistances from '~/components/plans/Asistances.vue';
import Insurances from '~/components/plans/lifeInsurances.vue';


export default {
    components:{
        Welcome, Cards, Asistances, Insurances
    },
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.bg-map{
    background-image: url('https://res.cloudinary.com/dbepipmro/image/upload/v1632170476/map_tpx0lm.jpg');
    background-size: 100%;
}

</style>