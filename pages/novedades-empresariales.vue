<template>
	<v-container fluid>
		<v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Formulario/>
			</v-col>
		</v-row>
    </v-container>
</template>
<script>

import Formulario from '~/components/forms/novedadesEmpresariales.vue';

export default {
    components:{
        Formulario
    }
}
</script>