<template>
  	<v-app>
		<v-app-bar
			color="white"
			class="pl-md-16 pr-md-16 border-header"
			app        
			flat
			height="80"
		>        
        	<v-app-bar-nav-icon class="d-md-flex d-lg-none"></v-app-bar-nav-icon>

        	<v-toolbar-title>
	            <img src="../static/nav/iconLogin.png" alt="" width="65px">
        	</v-toolbar-title>
        
        	<v-spacer></v-spacer>

			<NuxtLink 
				v-for="({ text, to }, index) in  btnsNav" 
				:key="index"
				:to="{ path: to }"
				class="s-acortag color-blue-dark d-none d-md-none d-lg-flex"    
			> {{ text }}
			</NuxtLink>

			<div class="box-search d-none d-md-flex">
				<v-text-field
					placeholder="Buscar"
					rounded
					filled
					hide-details
					append-icon="mdi-text-search"
					color="#003B4C"
				></v-text-field>
			</div>
    	</v-app-bar>

    	<v-main>
      		<v-container>
        		<Nuxt />
      		</v-container>
    	</v-main>

		<v-footer color="grey lighten-4">	
      		<v-container>
	      		<Footer/>
			</v-container>
	    </v-footer>
    
    
  </v-app>
</template>

<script>

import Footer from '../components/Footer.vue'

export default {
	components:{
		Footer,
	},
  	data () {
	    return {
			rightDrawer: null,

			fixed: false,
			btnsNav:[
				{ text: 'Inicio', to: '/' },
				{ text: 'Quienes somos', to: 'about' },
				{ text: 'Planes exequiales', to: 'plans' },
				{ text: 'Homenajes', to: 'homenaje'  },
				{ text: 'Sedes' },
				{ text: 'Pagos' },
				{ text: 'Noticias' },
			]
    	}
	}
}
</script>

<style lang="scss" scoped>

.border-header{
    border-bottom: 1px solid #80808033 !important;
    background-color: rgba(255,255,255,var(0.5));
}
.s-acortag{
    padding: 15px 15px;
    margin-right: 5px;
    text-decoration: none;
	color: #003B4C;
}
.color-blue-dark{
	color: #003B4C;
}
.box-search{
    width: 250px;
}
.header-logo{
	position: relative;
	left: 12.5rem;
}

</style>

