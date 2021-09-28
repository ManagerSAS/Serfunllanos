<template>
    <div>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="8">
                <h1 class="color-blue-dark display-1 font-weight-bold mb-6">
                    Novedades de Afiliaciones Empresariales:
                </h1>
                <p class="secondary--text">
                    Estimado funcionario afiliado podrá inscribir todas las novedades que requiera, cada vez que registre una el sistema refrescará los campos de DATOS DE LA NOVEDAD y podrá inscribir otra sin tener que volver a colocar los DATOS DE LA EMPRESA cualquier inquietud comunicarse al siguiente número: XXX XXX XXXX 
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="8">
                <v-form ref="formNovelty" autocomplete="off">
                    <h3 class="color-blue-dark font-weight-bold mb-6">
                        Datos de la empresa: 
                    </h3>
                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="emailCompany"
                                :rules="emailRules"
                                color="teal darken-3"
                                label="Correo electronico"
                                hide-details
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="12" md="12" lg="6">
                            <v-text-field
                                v-model="nameCompany"
                                :rules="nameRules"
                                color="teal darken-3"
                                label="Nombre de la empresa"
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
                                label="Nombre del funcionario que radica"
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

                    <h3 class="color-blue-dark font-weight-bold">
                        Datos de la novedad: 
                    </h3>
                    <div class="pa-2 mb-6">
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

                    <v-row>
                        <v-col cols="12" sm="12" md="12" lg="12">
                            <p class="secondary--text">
                                De acuerdo con la Ley Estatutaria 1581 de 2.012 de Protección de Datos y con el Decreto 1377 de 2.013, le informamos que sus datos consignados en el presente formulario serán incorporados en una base de datos responsabilidad de SERFUNLLANOS LOS OLIVOS, siendo tratados con la finalidad de: Fines históricos, científicos o estadísticos, Gestión de estadísticas internas, Gestión administrativa, Gestión de clientes, Encuestas de opinión. De igual modo, se le informa que la base de datos en la que se encuentran sus datos personales es tratada cumpliendo con las medidas de seguridad definidas en la política de tratamiento desarrollada por SERFUNLLANOS LOS OLIVOS
                            </p>
                            <v-checkbox
                                :rules="nameRules"
                                color="teal darken-3"
                                required
                                label="Aceptar terminos y condiciones"
                                hide-details
                            ></v-checkbox>
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
                <v-list v-if="list != 0">
                    <v-list-item
                        v-for="({name, novelty}, i) in list"
                        :key="i"
                    >
                        <v-list-item-avatar>
                            <v-icon color="teal darken-4"> mdi-account </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title> {{ name }} </v-list-item-title>
                            <v-list-item-subtitle> {{ novelty }} </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <v-btn icon
                                @click="deleteItem(item)"
                            >
                                <v-icon color="red accent-3">mdi-close</v-icon>
                            </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
                <v-list v-else>
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-icon color="teal darken-4"> mdi-plus </v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="secondary--text"> No hay novedades </v-list-item-title>                            
                        </v-list-item-content>                        
                    </v-list-item>
                </v-list>
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
export default {
    data(){
        return{
            valid: true,


            emailCompany: '',
            nameCompany: '',
            funcionary: '',
            workCenter: '',

            list:[],

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
            typeNovelty:['Ingreso', 'Retiro'],

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
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
        }
    },    
    methods:{

        sendInfoNovelty(){
            this.$refs.formNovelty.validate()
        },
        
        addNewItem(){
            if(this.novelty !== '' && this.name !== '' && this.dateBirth !== '' && this.month !== '' && this.typeId !== ''  && this.numId !== '' && this.numPhone !== ''){

                this.list.unshift({
                    name: `${this.name}`,
                    id: `${this.typeId} ${this.numId}`,
                    date: `Fecha nacimiento: ${this.dateBirth}`,
                    phone: `${this.numPhone}`,
                    novelty: `Nodedad: ${this.novelty} - Mes: ${this.month}`,
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

        deleteItem(item){
            const i =  this.list.indexOf(item)
            if( i !== -1 ){
                this.list.splice(i, 1);
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