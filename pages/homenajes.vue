<template>
	<v-container fluid>
		<v-row justify="center" align="center" class="mt-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
		        <v-row>
					<v-col cols="12" sm="12" md="12" lg="8">
						<h1 class="color-blue-dark display-1 font-weight-bold mb-6">
							Homenajes:
						</h1>
						<p class="secondary--text">
							Gracias por confiar en Los Olivos "Un Homenaje al Amor", realizamos las siguientes preguntas de decisiones a fin de coordinar el homenaje
                            de despedidade de su ser querido y encargarnos de todo.
						</p>
					</v-col>
				</v-row>
			</v-col>
        </v-row>
		<v-row justify="center" align="center" class="mb-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
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