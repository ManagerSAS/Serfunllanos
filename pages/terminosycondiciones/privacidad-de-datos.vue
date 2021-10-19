<template>
	<v-container fluid>
		<v-row justify="center" align="center" class="pa-md-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
				<Terminos/>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>

import Terminos from '~/components/terminos/privacidad-datos.vue';

export default {
	components:{
        Terminos
	}
}
</script>
