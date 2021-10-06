<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="7">
            <p class="secondary--text">Diligencia tu solicitud de auxilios de acuerdo a la información que se encuentra en la derecha</p>
            <v-form ref="formAuxilios">
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-select
                            v-model="typeRequest"
                            prepend-icon="mdi-file-document-edit-outline"
                            :items="requests"
                            :item-color="style.colorInput"
                            :color="style.colorInput"
                            :rules="nameRules"
                            label="Tipo de trámite *"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-menu
                            v-model="date1"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            :rules="nameRules"
                            transition="scale-transition"
                            offset-y
                            min-width="auto"
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-text-field
                                    v-model="date"
                                    label="Fecha de prestación del homenaje*"
                                    prepend-icon="mdi-calendar"
                                    :color="style.colorInput"
                                    :rules="nameRules"
                                    v-bind="attrs"
                                    v-on="on"
                                    hide-details
                                ></v-text-field>
                            </template>
                            <v-date-picker
                                v-model="date"
                                :color="style.colorInput"
                                :rules="nameRules"
                                @input="date1 = false"
                            ></v-date-picker>
                        </v-menu>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="SedeHomenaje"
                            label="Sede donde se prestó el homenaje*"
                            prepend-icon="mdi-city-variant-outline"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="LugarHomenaje"
                            label="Lugar de destino final o inhumación *"
                            prepend-icon="mdi-map-marker-circle"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="NombreFallecido"
                            label="Nombre del fallecido *"
                            prepend-icon="mdi-account-outline"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="NombreAfiliado"
                            label="Nombres del afiliado o solicitante *"
                            prepend-icon="mdi-account-outline"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="ApellidosAfiliado"
                            label="Apellidos del afiliado o solicitante *"
                            prepend-icon="mdi-account-outline"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="CedulaAfiliado"
                            label="Cédula del afiliado o solicitante *"
                            type="number"
                            prepend-icon="mdi-numeric"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="CelularAfiliado"
                            label="Celular del afiliado a solicitante *"
                            prepend-icon="mdi-numeric"
                            type="number"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="DireccionAfiliado"
                            label="Dirección del afiliado o solicitante *"
                            prepend-icon="mdi-map-marker-check-outline"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <v-text-field
                            v-model="EmailAfiliado"
                            label="Email del afiliado o solicitante *"
                            prepend-icon="mdi-email-outline"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>                    
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <v-text-field
                            v-model="EmpresaAfiliado"
                            label="Empresa o fondo por el cual está afiliado *"
                            prepend-icon="mdi-city-variant-outline"
                            :color="style.colorInput"
                            :rules="nameRules"
                            hide-details
                        ></v-text-field>
                    </v-col>                    
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <p class="secondary--text"> Adjunte su documentación* Recuerda que debes subir un unico archivo con toda la informacion.</p>
                        <v-file-input
                            accept=".pdf"
                            v-model="file"
                            label="Adjuntar archivo *"
                            :color="style.colorInput"
                            truncate-length="50"
                            hide-details
                        ></v-file-input>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <v-checkbox
                            v-model="checkbox"
                            :color="style.colorInput"
                            :rules="nameRules"
                            label="Estoy de acuerdo con los términos y condiciones de privacidad y tratamiento de datos"
                            hide-details
                        ></v-checkbox>
                        <a class="ml-8" href="#">Ver Términos y Condiciones</a>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <Gcaptcha @captcha="verifyCaptcha"/>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="12">
                        <v-btn
                            :color="style.colorInput"
                            rounded
                            dark
                            @click="sendInfoNovelty"
                        > Enviar Información </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="5">
            <List/>
        </v-col>
        <Message :snackbar="snackbar" :colorSnackbar="colorSnackbar" :message="message"/>
    </v-row>
</template>
<script>

// import uploadImage from '../../helpers/uploadImage'
import Gcaptcha from '../recaptcha.vue'
import Post from '../../post/post'
import Message from '../messages/message1.vue'
import List from './listAuxilios.vue'

export default {
    components:{
        List, Gcaptcha, Message
    },
    data(){
        return{
            snackbar: false,
            message: '',
            colorSnackbar: '',

            style:{
                colorInput: 'teal darken-3'
            },
            requests:[
                'Auxilio Funerario',
                'Auxilio Osario o Cenizario',
                'Auxilio Repatriación de Cenizas',
                'Auxilio por Fallecimiento en el Exterior Afiliado Principal',
                'Auxilio por Desaparición'
            ],
            date1: false,
            checkbox: false,


            typeRequest: '',
            date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            SedeHomenaje: '',
            LugarHomenaje: '',
            NombreFallecido: '',
            NombreAfiliado: '',
            ApellidosAfiliado: '',
            CedulaAfiliado: '',
            CelularAfiliado: '',
            DireccionAfiliado: '',
            EmailAfiliado: '',
            EmpresaAfiliado: '',
            file: null,

            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            
            resCaptcha: false,

        }
    },    
    methods:{

        async sendInfoNovelty(){



            if( this.typeRequest !== '' && this.date !== '' && this.SedeHomenaje !== '' && this.LugarHomenaje !== '' && this.NombreFallecido !== ''  
                && this.NombreAfiliado !== '' && this.ApellidosAfiliado !== '' && this.CedulaAfiliado !== '' && this.CelularAfiliado !== '' 
                && this.DireccionAfiliado !== '' && this.EmailAfiliado !== '' && this.EmpresaAfiliado !== '' && this.resCaptcha === true ){
                
                // const response = await uploadImage( this.file )

                const data = {
                    typeRequest: this.typeRequest,
                    date: this.date,
                    SedeHomenaje: this.SedeHomenaje,
                    LugarHomenaje: this.LugarHomenaje,
                    NombreFallecido: this.NombreFallecido,
                    NombreAfiliado: this.NombreAfiliado,
                    ApellidosAfiliado: this.ApellidosAfiliado,
                    CedulaAfiliado: this.CedulaAfiliado,
                    CelularAfiliado: this.CelularAfiliado,
                    DireccionAfiliado: this.DireccionAfiliado,
                    EmailAfiliado: this.EmailAfiliado,
                    EmpresaAfiliado: this.EmpresaAfiliado,                    
                }

                await Post.postFormAuxilios( data )

                this.snackbar = true
                this.colorSnackbar = 'green accent-4'
                this.message = 'Se envio tu solicitud'
                setTimeout(()=>{ this.snackbar = false },3000)
                this.$refs.formAuxilios.reset()
                    
            }else{            
                this.snackbar = true
                this.colorSnackbar = 'red accent-3'
                this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
                setTimeout(()=>{ this.snackbar = false },3000)
                            
                this.$refs.formAuxilios.validate()
                setTimeout(()=>{ this.$refs.formAuxilios.resetValidation() },5000)
            }   

        },

        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
            }
        },
                
        addNewItem(){
            
        },

        
    },
}
</script>
<style lang="scss" scoped>
.bg-list{
    background-color: #003b4c0f;
}
</style>