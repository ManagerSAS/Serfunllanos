<template>
	<v-container fluid>
		<v-row justify="center" align="center" class="mt-md-15 mb-md-15 pa-md-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Welcome/>
        		<span id="registration"></span>
        		<span id="pay"></span>
			</v-col>
		</v-row>
		<v-row justify="center" align="center" class="mt-md-15 mb-md-15 pa-md-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Cards/>
			</v-col>
		</v-row>
		<v-row justify="center" align="center" class="mt-md-15 mb-md-15 pa-md-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Asistence/>
			</v-col>
		</v-row>
		<v-row  justify="center" align="center" class="mt-md-15 mb-md-15 pa-md-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Venues/>
			</v-col>
		</v-row>
		<v-row  justify="center" align="center" class="mt-md-15 mb-md-15 pa-md-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Advantage/>
			</v-col>
		</v-row>
		<v-row justify="center" align="center" class="mt-md-15 mb-md-15 pa-md-10 pa-md-0 pt-lg-8">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Formcontact/>
			</v-col>
		</v-row>
		<v-row justify="center" align="center" class="mt-md-15 mb-md-15 pa-md-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Certificates/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import Welcome from '~/components/index/Welcome.vue';
import Cards from '~/components/index/Cards.vue';
import Asistence from '~/components/index/Asistencias.vue';
import Venues from '~/components/index/Venues.vue';
import Advantage from '~/components/index/Advantage.vue';
import Formcontact from '~/components/index/FormContact.vue';
import Certificates from '~/components/index/Certificate.vue';

export default {
	components:{
		Welcome, Cards, Asistence, Venues, Advantage, Formcontact, Certificates
	}
}
</script>

<style lang="scss">

.color-blue-dark{
	color: #003B4C;
}
.btn-hover{
    transition: 250ms;
    &:hover{
        transform: scale(1.06);        
    }
}

.d-100{
    max-width: 100%;
}
.card-shadow{
	box-shadow: 1px 60px 55px -25px #00000018 !important;
}
.shadow-principal{
    box-shadow: 1px 2px 45px -8px rgba(0, 0, 0, 0.18) !important;
}
.card-shadow-2{
	box-shadow: 1px 35px 45px -25px rgba(0,0,0,0.09412) !important;
}


</style>
