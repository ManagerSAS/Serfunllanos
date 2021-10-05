<template>
    <v-container fluid>    
		<v-row justify="center" align="center" class="mt-md-2 mb-md-15 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="12">
				<div>
                    <v-row justify="center">
                        <v-col cols="12" sm="12" md="12" lg="6" class="text-center">
                            <img src="~/static/nav/iconLogin.png" alt="" width="65px">
                            <h1 class="secondary--text pt-3 mb-6 display-1 font-weight-bold">
                                Selecciona la ciudad
                            </h1>
                            <v-form autocomplete="off">
                                <v-select
                                    v-model="city"
                                    :items="citys"
                                    item-color="teal darken-4"
                                    color="teal darken-4"
                                    rounded
                                    filled
                                    label="Selecciona la ciudad para mostrar los obiturios"
                                    @change="selectedCity"
                                ></v-select>
                            </v-form>
                        </v-col>
                    </v-row>                                   
                </div>
			</v-col>
		</v-row>
    </v-container>
</template>
<script>


export default {
    components:{
        // Obituarios
    },
    data(){
        return{
            showSearch: true,
            showSearchSmall: false,
            obituarios: false,
            city: '',
            citys:[
                'Villavicencio',
                'Acacias',
                'Granada', 
                'San Jose',
                'Yopal'
            ]
        }
    },
    methods:{
        selectedCity(param){
            console.log(param)
            // this.$router.push({name: 'obituarios-city', params:{ city: 'villavicencio' }})
        }
    }
}
</script>
<style lang="scss" scoped>
footer{
    display: none;
}
.olivos--text{
    color: #234b50;
}
.acortag-volver{
    text-decoration: none;
}
</style>