<template>
  	<v-app>
		<v-app-bar
			color="white"
			class="pl-16 pr-16 border-header"
			app        
			flat
			height="80"
		>        
        	<v-app-bar-nav-icon class="d-none"></v-app-bar-nav-icon>

        	<v-toolbar-title>
	            <img src="../static/nav/iconLogin.png" alt="" width="65px">
        	</v-toolbar-title>
        
        	<v-spacer></v-spacer>

			<NuxtLink 
				v-for="({ text, to }, index) in  btnsNav" 
				:key="index"
				:to="{ path: to }"
				class="s-acortag color-blue-dark"    
			> {{ text }}
			</NuxtLink>

			<div class="box-search">
				<v-text-field
					placeholder="Buscar"
					rounded
					filled
					hide-details
					append-icon="mdi-text-search"
					color="#003B4C"
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"></path></svg>
				</v-text-field>
			</div>
    	</v-app-bar>

    	<v-main>
      		<v-container>
        		<Nuxt />
      		</v-container>
    	</v-main>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <!-- <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data () {
    return {
		btnsNav:[
			{ text: 'Inicio', to: '/' },
			{ text: 'Quienes somos', to: 'about' },
			{ text: 'Planes' },
			{ text: 'Homenajes' },
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
</style>

