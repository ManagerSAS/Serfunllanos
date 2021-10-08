<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="8">
                <v-form ref="formHomenajes" autocomplete="off">
                    <h3 class="color-blue-dark font-weivght-bold mb-6">
                        Datos del titular:
                    </h3>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Nombre titular"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Direccion"
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Barrio"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Municipio"
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mb-6">
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Telefono"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Email"
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <h3 class="color-blue-dark font-weivght-bold mb-6">
                        Documentos:
                    </h3>
                    <v-row class="mb-2">
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <span class="secondary--text"> Debe traer el certificado de defunción y cedula del fallecido para iniciar el homenaje </span>
                            <v-select
                                :items="documentos"
                                :rules="nameRules"
                                item-color="teal darken-4"
                                color="teal darken-4"
                                label="Certificado"
                                clearable
                                @change="selectedDocuments"
                            ></v-select>
                            <v-alert
                                v-show="showMessage"
                                class="secondary--text"
                                border="left"
                                colored-border
                                color="yellow darken-2"
                                elevation="2"
                            > Si su respuesta es No debe comunicarse con el asesor de Los Olivos </v-alert>
                        </v-col>
                    </v-row>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Prendas:
                    </h3>
                    <v-row class="mb-6">
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <ul class="secondary--text mb-3">
                                <li>Hombre: Camisa y Camisilla de algodón, Pantalón, Correa, Chaqueta o Saco.</li>
                                <li>Mujer: Blusa, Falda, Vestido, Ropa interior y Brasier .</li>
                            </ul>
                            <v-select
                                :items="ropa"
                                :rules="nameRules"
                                item-color="teal darken-4"
                                color="teal darken-4"
                                label="Certificado"
                                hide-details
                            ></v-select>
                        </v-col>
                    </v-row>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Exequias:
                    </h3>
                    <v-row class="mb-6">
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <span class="secondary--text"> Por favor indicanos la creencia religiosa o credo: </span>
                            <v-select
                                :items="religiones"
                                :rules="nameRules"
                                item-color="teal darken-4"
                                color="teal darken-4"
                                label="Religion"
                                @change="selectedReligion"
                            ></v-select>
                            <div v-show="showOther">
                                <v-text-field
                                    v-model="other"
                                    color="teal darken-4"
                                    label="Cual"
                                ></v-text-field>
                            </div>
                        </v-col>
                    </v-row>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Iglesias:
                    </h3>
                    <v-row class="mb-6">
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <span class="secondary--text"> Indique el nombre de la iglesia o centro religioso preferido y otra opcional: </span>
                            <v-text-field
                                :rules="nameRules"
                                class="mb-2"
                                color="teal darken-4"
                                label="Iglesia"
                                hint="Ejemplo: Iglesia 1, Iglesia 2"
                            ></v-text-field>
                            <span class="secondary--text"> Fecha sugerida para las exequias (no superior a 48 horas) </span>
                            <v-text-field
                                :rules="nameRules"
                                type="time"
                                color="teal darken-4"
                                label="Fecha"
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Video:
                    </h3>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <span class="secondary--text"> Indicar parentescos de invitación a las exequias </span>
                            <v-text-field
                                :rules="nameRules"
                                color="teal darken-4"
                                label="Parentescos"
                                hint="Ejemplo:"
                            ></v-text-field>                            
                        </v-col>
                    </v-row>
                    <v-row class="mb-6">
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <span class="secondary--text"> Desea los siguientes artículos para su velación: </span>
                            <v-select
                                :items="articulos"
                                :rules="nameRules"
                                item-color="teal darken-4"
                                color="teal darken-4"
                                label="Artículo"
                                hide-details
                                @change="articles"
                            ></v-select>
                            <div v-show="showArticle">                                
                                <v-img
                                    class="rounded-lg mt-6"
                                    width="180"
                                    src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1633553909/mtrpyrsyzubxi6mc2swq.jpg"
                                ></v-img>
                            </div>
                        </v-col>
                    </v-row>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Destino final:
                    </h3>
                    <v-row class="mb-6">
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <span class="secondary--text"> Es importante que conozca que si es muerte Violenta la cremación se permite únicamente si tiene orden de fiscalia. </span>
                            <v-select
                                :items="destinoFinal"
                                :rules="nameRules"
                                item-color="teal darken-4"
                                color="teal darken-4"
                                label="Destino final"
                                hide-details
                            ></v-select>
                        </v-col>
                    </v-row>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Cenizarios:
                    </h3>
                    <v-row class="mb-6">
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <span class="secondary--text"> ¿ Si la opción es cremación le gustaria conocer los cenizarios en la sede Los Olivos Villavicencio ? </span>
                            <v-select
                                :items="cenizarios"
                                :rules="nameRules"
                                item-color="teal darken-4"
                                color="teal darken-4"
                                label="Cenizarios"
                                hide-details
                            ></v-select>
                        </v-col>
                    </v-row>
                    <!-- captcha -->
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <Gcaptcha @captcha="verifyCaptcha"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <v-btn
                                rounded
                                class="card-shadow"
                                dark
                                color="teal darken-3"
                                @click="sendFormHomenajes"
                            > Enviar información </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>
<script>
import Gcaptcha from '../recaptcha.vue'

export default {   
    components:{
        Gcaptcha
    },
    data(){
        return{
            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],


            documentos: ['Si', 'No'],
            showMessage: false,

            ropa: ['Si', 'No'],

            religiones: ['Católico', 'Cristiano', 'Otro'],
            other: '',
            showOther: false,

            showArticle: false,
            articulos: [
                'Retablo (Villavicencio) 38 x 59cm', 
                'Bonsai (Yopal)', 
                'Flores en cascada', 
                'Arreglo floral + portarretrato'
            ],

            destinoFinal:['Inhumación', 'Cremación'],
            cenizarios: ['Si', 'No'],
        }
    },
    methods:{
        sendFormHomenajes(){
            this.$refs.formHomenajes.validate()
            setTimeout(()=>{
                this.$refs.formHomenajes.resetValidation()
            }, 5000)
        },
        selectedDocuments(param){
            if(param === 'No'){
                this.showMessage = true
            }else{
                this.showMessage = false
            }
        },
        selectedReligion(param){
            if(param === 'Otro'){
                this.showOther = true
            }else{
                this.showOther = false
                this.other = ''
            }
        },
        articles(param){
            if(param === 'Retablo (Villavicencio)'){
                this.showArticle = true
            }else{
                this.showArticle = false
            }
        }
    },
}
</script>