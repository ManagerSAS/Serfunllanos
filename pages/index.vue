<template>
	<v-container fluid>
		<v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Welcome/>
			</v-col>
		</v-row>
		<v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Cards/>
			</v-col>
		</v-row>
		<v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0 pt-lg-8">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Asistence/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import Welcome from '~/components/index/Welcome.vue';
import Cards from '~/components/index/Cards.vue';
import Asistence from '~/components/index/Asistencias.vue';

export default {
	components:{
		Welcome, Cards, Asistence
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

</style>
