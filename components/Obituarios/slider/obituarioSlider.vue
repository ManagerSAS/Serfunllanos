<template>
    <v-container>
        <v-row>
            <v-col cols="12" style="font-size: 30px" class="mb-10 mt-10 text-center text-uppercase text-raleway-verde">
                <h2>OBITUARIOS SEDE {{city}}</h2>
            </v-col>
        </v-row>
        <v-row v-if="obituarios.length === 0">
            <v-col cols="12" style="font-size: 20px" class="mb-10 mt-10 text-center text-uppercase text-raleway-verde">
                <h2>No hay Obituarios para mostrar para la ciudad de {{city}}</h2>
            </v-col>
        </v-row>
        <v-row v-if="obituarios.length">
            <v-col cols="12" lg="7" align="center">
                <v-row>
                    <v-col cols="12" style="background-color: #ECECEC;" class="rounded-lg ml-3">
                        <div  align="center"  class="text-center justify-center text-raleway-verde">
                            <h2>Un homenaje al amor</h2>
                        </div>
                        <p align="center" style="color: #489791;"  class="text-comfortaa text-center justify-center px-10 mx-10">“Dios de misericordia y amor, ponemos en tus manos amorosas a nuestra ser querido  
                        que has llamado de esta vida a tu santa presencia y permite que la luz de tu amor
                        ilumine nuestro camino y fortalezca nuestro corazón”</p>
                    </v-col>
                </v-row>
                <v-progress-linear
                    v-show="loading"
                    indeterminate
                    color="green"
                ></v-progress-linear>
                <v-row>
                    <v-col cols="12">
                        <div class="justify-center ml-3" >
                            <v-carousel
                                hide-delimiter-background
                                delimiter-icon="mdi-minus"
                                show-arrows-on-hover
                                height="650"
                                v-if="obituarios.length"                                
                                >
                                    <v-carousel-item v-for="(obituarios ,index) in obituarios" :key="index" class="contObituario mt-8">
                                         <v-row>
                                            <v-col cols="12" lg="12" class="mt-5">
                                                <div class="text-raleway text-center white--text font-weight-bold text-capitalize" style="font-size: 50px;">{{obituarios.nombreCompleto}}</div>
                                                <div class="text-raleway text-center font-italic white--text" style="font-size: 20px;">Descansa en la paz del señor</div>
                                            </v-col>        
                                        </v-row> 
                                        <v-row>
                                            <v-col cols="12" lg="5" class="justify-end" align="center">
                                                <div  class="circulogrande">
                                                    <div >
                                                        <img class="fotohomenajegrande" :src="obituarios.foto" v-if="obituarios.foto != 0" >
                                                    </div>
                                                </div>
                                            </v-col>
                                            <v-col cols="12" lg="5" class="mt-8">
                                                <div class="text-comfortaa text-left mb-1 " style="font-size: 18px;"><span style="color: #FCF0A5;">Fecha fallecimiento: </span>   {{obituarios.fecha_fallecimiento}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 18px;"><span style="color: #FCF0A5;">Sede: </span>   {{obituarios.sede}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 18px;"><span style="color: #FCF0A5;">Nombre sala: </span>   {{obituarios.nombre_sala}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 18px;"><span style="color: #FCF0A5;">Salida sala: </span>   {{obituarios.salida_sala}}</div>
                                                <v-divider style="width: 200px;" class="mt-3 mb-3"></v-divider>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 18px;"><span style="color: #FCF0A5;">Hora exequias: </span>   {{obituarios.hora_exequias}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 18px;"><span style="color: #FCF0A5;">Fecha exequias: </span>   {{obituarios.fecha_exequias}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 18px;"><span style="color: #FCF0A5;">Lugar exequias: </span>   {{obituarios.lugar_exequias}}</div>
                                                <div class="text-comfortaa text-left  mb-1" style="font-size: 18px;"><span style="color: #FCF0A5;">Destino final: </span>   {{obituarios.destino_final_cementerio}}</div>
                                            </v-col>
                                        </v-row> 
                                    </v-carousel-item>
                            </v-carousel>
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" md="5" lg="4" class="ml-5 rounded-lg " style="background-color: #ECECEC; height: 800px;">
                <VueSlickCarousel v-bind="settings" v-if="obituarios.length">
                    <div v-for="(Contenido ,index) in obituarios" :key="index" class="ml-8 mt-5 fondoSlider">
                        <div >
                            <v-row>
                                <v-col cols="12" lg="11" >
                                    <div class="text-raleway text-center white--text font-weight-bold text-capitalize">{{Contenido.nombreCompleto}}</div>
                                    <div class="text-raleway text-center font-italic white--text" style="font-size: 10px;">Descansa en la paz del señor</div>
                                </v-col>        
                            </v-row>
                            <v-row>
                                <v-col cols="12" lg="4" class="justify-end" align="center">
                                    <div  class="circuloPequeño ml-5">
                                        <img class="fotohomenaje" v-if="Contenido.foto != 0" :src="Contenido.foto" >
                                    </div>
                                </v-col>
                                <v-col cols="12" lg="6"  class="ml-5">
                                    <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Fecha fallecimiento: </span>   {{Contenido.fecha_fallecimiento}}</div>
                                    <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Sede: </span>   {{Contenido.sede}}</div>
                                    <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Nombre sala: </span>   {{Contenido.nombre_sala}}</div>
                                    <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Salida sala: </span>   {{Contenido.salida_sala}}</div>
                                    <v-divider style="width: 200px;" class="mt-3 mb-3"></v-divider>
                                    <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Hora exequias: </span>   {{Contenido.hora_exequias}}</div>
                                    <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Fecha exequias: </span>   {{Contenido.fecha_exequias}}</div>
                                    <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Lugar exequias: </span>   {{Contenido.lugar_exequias}}</div>
                                    <div class="text-comfortaa text-left mb-1 description" ><span class="titulos">Destino final: </span>   {{Contenido.destino_final_cementerio}}</div>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </VueSlickCarousel>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>

import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Post from '../../post/post'
export default {
     components: { VueSlickCarousel },
    props: ['city'],  
    data(){
        return{
            obituarios:[],
            loading: false,
            settings  :{
                "dots": true,
                "infinite": true,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "vertical": true,
                "verticalSwiping": true,
                "responsive": [
                {
                    "breakpoint": 1024,
                    "settings": {
                    "slidesToShow": 1,
                    "infinite": true,
                    }
                },
                {
                    "breakpoint": 600,
                    "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1,
                    "initialSlide": 2
                    }
                },
                {
                    "breakpoint": 480,
                    "settings": {
                    "slidesToShow": 1,
                    "slidesToScroll": 1
                    }
                }
                ] 
    },
        }
    },
    mounted(){
        this.selectedCity()
    
    },
    methods:{
        async selectedCity(){
            this.loading = true;
            const response = await Post.getObituarios(this.city); 
            console.log(response) 
            response.results.forEach((element) => {
                this.obituarios.push({
                    nombreCompleto: element.nombreCompleto,
                    fecha_fallecimiento: element.fecha_fallecimiento,
                    nombre_sala: element.nombre_sala,
                    hora_exequias: element.hora_exequias,
                    fecha_exequias: element.fecha_exequias,
                    lugar_exequias: element.lugar_exequias,
                    foto: 'https://res.cloudinary.com/olivos-villavicencio/image/upload/v1654633635/nslmesbhlemnvfyjcxsv.jpg',
                    destino_final_cementerio: element.destino_final_cementerio,
                    ciudad: this.city
                })  
            }); 
            if(this.obituarios.length !== 0 ) {
                    this.loading = false;
                }else{
                    this.loading = false;
                    
                }
                console.log(this.obituarios)
        },
         
    },
    }

</script>