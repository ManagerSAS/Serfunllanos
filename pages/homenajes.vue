<template>
	<v-container fluid>
		<v-row justify="center" align="center" class="mt-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="9" lg="9" xl="9">
		        <v-row>
					<v-col cols="12" sm="12" md="12" lg="10">
						<h1 class="color-blue-dark display-1 font-weight-bold mb-6">
							Homenajes:
						</h1>
						<p class="secondary--text">
							Para lograr un proceso más humano en la atención del homenaje de su ser querido queremos que tenga presente la siguiente información antes de ingresar a la coordinación del servicio.
						</p>
					</v-col>
				</v-row>
			</v-col>
        </v-row>
		<v-row justify="center" align="center" class="mb-15 pa-md-0">
			<v-col cols="12" sm="12" md="9" lg="9" xl="9">
				<Formulario/>
			</v-col>
		</v-row>
    </v-container>
</template>
<script>

import Formulario from '../components/forms/homenajes/homenajes-olivos.vue';

export default {
    components:{
        Formulario
    }
}
</script>