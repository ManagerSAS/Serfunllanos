<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="8">
                <h1 class="color-blue-dark display-1 font-weight-bold mb-6">
                    Novedades de Afiliaciones Empresariales:
                </h1>
                <p class="secondary--text">
                    Estimado cliente por este medio podrá inscribir todas las novedades que requiera, cualquier inquietud por favor comunicarse al área de cartera teléfonos 6653986 - 6653987
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="8">
                <v-form ref="formNovelty" autocomplete="off">
                    <v-row class="mb-3">
                        <v-col cols="12">
                            <Note :message="msgNote"/>
                        </v-col>                        
                    </v-row>
                    <h3 class="color-blue-dark font-weight-bold mb-6">
                        Datos de la empresa: 
                    </h3>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="emailCompany"
                                :rules="emailRules"
                                color="teal darken-3"
                                label="Correo electronico *"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="nameCompany"
                                :rules="nameRules"
                                color="teal darken-3"
                                label="Nombre de la empresa *"
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row class="mb-8">
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="funcionary"
                                :rules="nameRules"
                                color="teal darken-3"
                                label="Nombre del funcionario que radica *"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="workCenter"
                                color="teal darken-3"
                                label="Centro de trabajo (opcional):"
                                hide-details
                            ></v-text-field>
                        </v-col>
                    </v-row>                    

                    <!-- list noveltys -->
                    <v-expansion-panels class="mb-6 rounded-xl">
                        <v-expansion-panel class="rounded-xl">
                            <v-expansion-panel-header expand-icon="mdi-menu-down pa-1">
                                <h4 class="color-blue-dark font-weight-bold">
                                    Agregar novedad: 
                                </h4>
                            </v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <h3 class="color-blue-dark font-weight-bold">
                                    Datos de la novedad: 
                                </h3>
                                <div class="pa-2"> 
                                    <v-row>
                                        <v-col cols="12">
                                            <v-select
                                                v-model="novelty"
                                                :items="typeNovelty"
                                                item-color="teal darken-3"
                                                color="teal darken-3"
                                                label="Tipo de novedad"
                                                hide-details
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12" lg="5">
                                            <v-text-field
                                                v-model="name"
                                                color="teal darken-3"
                                                label="Nombre y apellidos"
                                                hide-details
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12" lg="3">
                                            <v-text-field
                                                v-model="dateBirth"
                                                type="date"
                                                color="teal darken-3"
                                                label="Fecha Nacimiento"
                                                hide-details
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12" lg="4">
                                            <v-select
                                                v-model="month"
                                                :items="itemsMonths"
                                                item-color="teal darken-3"
                                                color="teal darken-3"
                                                label="Mes apartir de cuando aplica"
                                                hide-details
                                            ></v-select>
                                        </v-col>                        
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12" sm="12" md="12" lg="2">
                                            <v-select
                                                v-model="typeId"
                                                :items="itemsTypeId"
                                                item-color="teal darken-3"
                                                color="teal darken-3"
                                                label="Tipo documento"
                                                hide-details
                                            ></v-select>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12" lg="6">
                                            <v-text-field
                                                v-model="numId"
                                                type="number"
                                                color="teal darken-3"
                                                label="N° de Documento"
                                                hide-details
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="12" md="12" lg="4">
                                            <v-text-field
                                                v-model="numPhone"
                                                type="number"
                                                color="teal darken-3"
                                                label="Numero de telefono"
                                                hide-details
                                            ></v-text-field>
                                        </v-col>                        
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-btn
                                                rounded
                                                outlined
                                                color="teal darken-3"
                                                @click="addNewItem"
                                            > Agregar novedad </v-btn>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panels>

                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <ul class="secondary--text">
                                <li> Podrá adjuntar un archivo si lo requiere, formatos permitidios: Excel(.xls .xlsx) o PDF </li>
                                <li> Si cuenta con un listado en excel con esta información podrá adjuntarlo y omitir la novedad.</li>
                                <li> Si cuenta con un PDF asegurese de que contenga toda la información</li>
                            </ul>
                            <v-file-input
                                type="file"
                                accept=".pdf, .xls, .xlsx"
                                color="teal darken-3"
                                label="Adjuntar archivo(s)"
                                @change="onSelectedFiles"
                            ></v-file-input>
                        </v-col>
                    </v-row>            
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <p class="secondary--text">
                                De acuerdo con la Ley Estatutaria 1581 de 2.012 de Protección de Datos y con el Decreto 1377 de 2.013, le informamos que sus datos consignados en el presente formulario serán incorporados en una base de datos responsabilidad de SERFUNLLANOS LOS OLIVOS, siendo tratados con la finalidad de: Fines históricos, científicos o estadísticos, Gestión de estadísticas internas, Gestión administrativa, Gestión de clientes, Encuestas de opinión. De igual modo, se le informa que la base de datos en la que se encuentran sus datos personales es tratada cumpliendo con las medidas de seguridad definidas en la política de tratamiento desarrollada por SERFUNLLANOS LOS OLIVOS
                            </p>
                            <v-checkbox
                                v-model="termsConditions"
                                :rules="nameRules"
                                color="teal darken-3"
                                required
                                label="Aceptar términos y condiciones *"
                                hide-details
                            ></v-checkbox>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <!-- captcha -->
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
                                @click="sendInfoNovelty"
                            > Enviar información </v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>

            <v-col cols="12" sm="12" md="12" lg="4">
                <h3 class="color-blue-dark font-weivght-bold mb-6">
                    Listado novedades:
                </h3>
                <List :list="list"/>
            </v-col>    
        </v-row>
        <v-snackbar
            class="pb-8"
            :timeout="3000"
            :value="snackbar"
            :color="colorSnackbar"
            rounded="pill"
        > {{ message }} </v-snackbar>
    </div>
</template>
<script>

import Gcaptcha from '../recaptcha.vue'
import Note from '../notas.vue'
import UploadImage from '../../helpers/uploadImage'
import Post from '../../post/post'
import List from './listNovedades.vue'

export default {
    components:{
        Note, Gcaptcha, List
    },
    data(){
        return{

            msgNote: 'SEÑOR EMPRESARIO si usted va a reportar las novedades por medio de un listado adjunto, tome la opción adjuntar archivos y omita los datos de la novedad.',

            emailCompany: '',
            nameCompany: '',
            funcionary: '',
            workCenter: '',
            files: null,

            // list noveltys
            list: [],

            // type id
            typeId:'',
            itemsTypeId: ['C.C','C.E','P.E.P'],

            // number id
            numId: '',

            // date birth
            dateBirth: '',

            // number cellphone
            numPhone: '',

            // type novelty
            novelty: '',
            typeNovelty:['Afiliacion', 'Retiro'],

            // month
            month: '',
            itemsMonths: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', ],

            name: '',

            snackbar: false,
            message: '',
            colorSnackbar: '',

            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],

            termsConditions: false,
            resCaptcha: true,
        }
    },    
    methods:{

        async sendInfoNovelty(){
            let file;
            let list;

            if(this.emailCompany !== '' && this.nameCompany !== '' && this.funcionary !== '' && this.termsConditions && this.resCaptcha === true){
                
                if(this.files !== '') file = await UploadImage( this.files )            
                if(this.list !== 0) list = this.list
                
                const data = {
                    center: this.workCenter,
                    company: this.nameCompany,
                    email: this.emailCompany,
                    funcionary: this.funcionary,
                    file,
                    list,
                }

                const response = await Post.postFormNoveltys( data )
                if(response){
                    this.snackbar = true
                    this.colorSnackbar = 'green accent-4'
                    this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
                    setTimeout(()=>{
                        this.snackbar = false 
                    },3000)
                    this.$refs.formNovelty.validate()
                }

                                    
            }else{
                this.snackbar = true
                this.colorSnackbar = 'red accent-3'
                this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
                setTimeout(()=>{
                    this.snackbar = false 
                },3000)
                this.$refs.formNovelty.validate()
            }           
        },

        onSelectedFiles( event ){
            this.files = event
        },

        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
            }
        },
        
        
        addNewItem(){
            if(this.novelty !== '' && this.name !== '' && this.dateBirth !== '' && this.month !== '' && this.typeId !== ''  && this.numId !== '' && this.numPhone !== ''){

                this.list.unshift({
                    date: this.dateBirth,
                    id: this.numId,
                    month: this.month,
                    name: this.name,
                    novelty: this.novelty,
                    phone: this.numPhone,
                    typeId: this.typeId,
                })

                this.name = ''
                this.typeId = ''
                this.numId = ''
                this.dateBirth = ''
                this.numPhone = ''
                this.novelty = ''
                this.month = ''

            }else{
                this.snackbar = true
                this.colorSnackbar = 'red accent-3'
                this.message = 'Asegurate de diligenciar los datos de la novedad.'

                setTimeout(()=>{
                   this.snackbar = false 
                },3000)
            }
        },

        
    },
}
</script>
<style lang="scss" scoped>
.bg-list{
    background-color: #003b4c0f;
}
</style>