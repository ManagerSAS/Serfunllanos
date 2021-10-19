<template>
    <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="8">
            <v-form ref="formHomenajes" autocomplete="off">
                <div>
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Datos del titular:
                    </h3>
                    <p class="secondary--text"> Por favor indique los siguientes datos de manera completa.</p>
                </div>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="nameTitular"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Nombre titular"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="address"
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
                            v-model="neighborhood"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Barrio"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="municipy"
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
                            v-model="cellphone"
                            type="number"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Telefono"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            color="teal darken-4"
                            label="Email"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <div>
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Datos del homenaje:
                    </h3>
                    <p class="secondary--text"> Por favor indique los siguientes datos de manera completa.</p>
                </div>
                <v-row>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="nameHomenaje"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Nombre completo"
                            hide-details
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="documento"
                            type="number"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="N° documento"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row class="mb-6">
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-select
                            v-model="afiliaty"
                            :items="afiliatys"
                            :rules="nameRules"
                            color="teal darken-4"
                            item-color="teal darken-4"
                            label="Afiliado a olivos"
                            hide-details
                        ></v-select>
                    </v-col>
                    <v-col cols="12" sm="12" md="12" lg="6">
                        <v-text-field
                            v-model="lugarFallecimiento"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Lugar de fallecimiento"
                            hide-details
                        ></v-text-field>
                    </v-col>
                </v-row>
                <div>
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Documentos:
                    </h3>                
                    <p class="secondary--text"> 
                        ¿Cuenta usted con el certificado de defunción y fotocopia de la cedula de su ser querido?
                        (Si la respuesta es negativa es importante tener estos documentos, le sugerimos tenerlo a la mano antes de entrar a la coordinación) 
                    </p>
                    <v-select
                        v-model="documents"
                        :items="documentos"
                        item-value="value"
                        item-text="text"
                        :rules="nameRules"
                        item-color="teal darken-4"
                        color="teal darken-4"
                        label="Documentos"
                        clearable
                    ></v-select>
                </div>
                <div class="mb-6">
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Prendas:
                    </h3>
                    <p class="secondary--text">
                        Deseamos rendir el más grande homenaje, por favor coordine con los demás familiares las prendas que desean colocarle a su ser querido, sugerimos la siguiente:    
                    </p>
                    <ul class="secondary--text mb-3">
                        <li>Hombre: Camisa y Camisilla de algodón, Pantalón, Correa, Chaqueta o Saco, y ropa interior.</li>
                        <li>Mujer: Blusa, Falda, Vestido, Ropa interior y Brasier.</li>
                    </ul>
                </div>
                <div>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Exequias:
                    </h3>
                    <p class="secondary--text">
                        Las exequias son la ceremonia religiosa que vamos a realizar en nombre de su ser querido, respetando los 
                        diferentes credos, por favor indíquenos si las exequias serán, Catolicas, Cristiana, Islámica, budista, Otra ¿cuál? 
                    </p>
                    <v-select
                        v-model="exequias"
                        :items="religiones"
                        :rules="nameRules"
                        item-color="teal darken-4"
                        color="teal darken-4"
                        label="Ceremonia religiosa"
                        @change="selectedReligion"
                    ></v-select>
                    <div v-show="showOther">
                        <v-text-field
                            v-model="other"
                            color="teal darken-4"
                            label="¿Cuál?"
                        ></v-text-field>
                    </div>
                </div>             
                <div>
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Templo religioso:
                    </h3>
                    <p class="secondary--text">
                        Basado en su respuesta anterior escriba los lugares donde ustedes quisieran que sean las exequias de su ser querido y la hora: 
                        (Por favor escriba 2 opciones ya que a veces los templos religiosos no cuentan con disponibilidad del día o la hora) 
                    </p>
                    <v-text-field
                        v-model="church"
                        :rules="nameRules"
                        class="mb-2"
                        color="teal darken-4"
                        label="Iglesia"
                        hint="Ejemplo: Iglesia 1, Iglesia 2"
                    ></v-text-field>
                    <p class="secondary--text"> Fecha sugerida para las exequias (no superior a 48 horas) </p>
                    <v-text-field
                        v-model="hour"
                        :rules="nameRules"
                        type="time"
                        color="teal darken-4"
                        label="Fecha"
                    ></v-text-field>
                </div>

                <div class="secondary--text mb-8">
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Decoración de sala:
                    </h3>
                    <p class="secondary--text"> 
                        En su plan usted puede elegir una de estas 3 opciones:
                    </p>
                    <ul class="secondary--text mb-3">
                        <li> Homenaje Fotográfico (Retablo grande que se colocará en la sala o se entregará en su domicilio en villavicencio). </li>
                        <li> Arreglo floral. </li>
                        <li> Arreglo floral con una foto pequeña. </li>
                    </ul>
                </div>

                <v-card class="rounded-xl mb-8 ">
                    <v-card-text>
                        <v-row align="center">
                            <v-col cols="12" sm="3">
                                <v-img
                                    class="rounded-xl img-principal"
                                    lazy-src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634140164/hi2ubdltoxs8vfriuxds.png"
                                    src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634140164/hi2ubdltoxs8vfriuxds.png"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-img
                                    class="rounded-xl"
                                    lazy-src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634135800/bmjdzbanoo43woe75ceg.jpg"
                                    src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634135800/bmjdzbanoo43woe75ceg.jpg"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-img
                                    class="rounded-xl"                                    
                                >
                                    <v-card color="grey lighten-2" height="188">
                                        <v-card-subtitle class="secondary--text text-center">
                                            Arreglo floral más <br> foto pequeña
                                        </v-card-subtitle>
                                        <v-card-title class="secondary--text justify-center">
                                            No hay foto
                                        </v-card-title>
                                    </v-card>
                                </v-img>
                            </v-col>
                            <v-col cols="12" sm="3" class="text-center">
                                <h3 class="color-blue-dark"> Un Homenaje al Amor</h3>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>

                <div class="mb-3">
                    <v-select
                        v-model="homenaje"
                        :items="homenajes"
                        :rules="nameRules"
                        item-text="text"
                        item-value="value"
                        color="teal darken-4"
                        item-color="teal darken-4"
                        clearable
                        label="Respuesta"
                        @change="selectedRetablo"
                    ></v-select>                        
                    <p class="secondary--text"> 
                        Si decide entrega en casa por favor escriba la dirección y el número de teléfono de la persona responsable (esto no tiene costo adicional, solo retablo)    
                    </p>
                    <v-text-field
                        v-model="addressDelivery"
                        color="teal darken-4"
                        label="Direccion de entrega"
                        hint="Ejemplo: Carrera 14 e # 22 - 28"
                        :disabled="isEditing"
                    ></v-text-field>
                </div>

                <div class="secondary--text mb-8">
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Articulos complementarios:
                    </h3>
                    <p class="mb-6"> 
                        Si deseas más información de estos artículos podrás preguntarles a nuestros coordinadores en cualquier momento    
                    </p>
                    <v-row>
                        <v-slide-group active-class="success" show-arrows>
                            <v-slide-item
                                v-for="({src, text}, index) in articlesAdd" 
                                :key="index"
                            >
                                <v-card                                    
                                    color="white"
                                    class="ma-2 rounded-xl"
                                    width="150"                                    
                                >
                                    <v-img
                                        :src="src"
                                        height="250"
                                    ></v-img>

                                    <v-card-text>
                                        {{ text }}
                                    </v-card-text>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-row>
                </div>
                
                <div class="mb-6">
                    <h3 class="color-blue-dark font-weivght-bold mb-3">
                        Destino final:
                    </h3>
                    <p class="secondary--text">
                        Es importante que conozca que si es muerte Violenta la cremación se permite únicamente si tiene orden de fiscalia.
                    </p>
                    <v-select
                        v-model="destinyFinal"
                        :items="destinoFinal"
                        :rules="nameRules"
                        item-color="teal darken-4"
                        color="teal darken-4"
                        label="Destino final"
                        hide-details
                    ></v-select>
                </div>

                <div class="mb-6">
                    <h3 class="color-blue-dark font-weight-bold mb-3">
                        Homenaje virtual:
                    </h3>
                    <p class="secondary--text">
                        En Los Olivos como parte de nuestros protocolos le entregaremos un vídeo de 30 segundos a su Whatsapp el cuál usted podrá 
                        compartir a sus familiares y amigos para indicarles todos los datos correspondientes al homenaje y ellos puedan acompañarlo 
                        en este momento. Por ello requerimos nos indique los parentescos para agregarlos en la oración.    
                    </p>
                    <v-text-field
                        v-model="kinship"
                        :rules="nameRules"
                        color="teal darken-4"
                        label="Parentescos"
                        hint="Ejemplo: hijo, padre, hermano"
                    ></v-text-field>
                </div>

                <v-card class="rounded-xl mb-8 ">
                    <v-card-text>
                        <v-row align="center">
                            <v-col cols="12" sm="9">
                                <h3 class="color-blue-dark font-weight-bold mb-3"> Cenizarios Av 40: </h3>
                                <p class="secondary--text">
                                    Contamos con un espacio humano, en el cual podrán permanecer las cenizas de su ser querido, si desea puede preguntarle a nuestro
                                    coordinador sobre este lugar que rinde el más grande homenaje al amor!    
                                </p>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-img
                                    class="rounded-xl"
                                    lazy-src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634404727/uzfdl6gfccay5fqbkprd.webp"
                                    src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634404727/uzfdl6gfccay5fqbkprd.webp"
                                    height="180"
                                ></v-img>
                            </v-col>                       
                        </v-row>
                    </v-card-text>
                </v-card>

                <v-card class="rounded-xl mb-8 ">
                    <v-card-text>
                        <v-row align="center">
                            <v-col cols="12" sm="6">
                                <h3 class="color-blue-dark font-weight-bold mb-3"> Salas Vip: </h3>
                                <p class="secondary--text"> En el tercer piso encontrará salas más amplias para las exequias de su ser querido </p>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-img
                                    class="rounded-xl img-principal"
                                    lazy-src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634402727/maqays8cjcmkoit0o05m.webp"
                                    src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634402727/maqays8cjcmkoit0o05m.webp"
                                    height="180"
                                ></v-img>
                            </v-col>
                            <v-col cols="12" sm="3">
                                <v-img
                                    class="rounded-xl"
                                    lazy-src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634402733/l5vicbnbgyj0znhogp3y.webp"
                                    src="https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634402733/l5vicbnbgyj0znhogp3y.webp"
                                    height="180"
                                ></v-img>
                            </v-col>                       
                        </v-row>
                    </v-card-text>
                </v-card>
                
                <v-row no-gutters align="center">
                    <v-col cols="6">
                        <v-checkbox
                            v-model="terminos"
                            :rules="nameRules"
                            color="teal darken-4"
                            label="Aceptar términos y condiciones"
                        > </v-checkbox>
                    </v-col>
                    <v-col cols="6" class="text-right">
                        <Nuxt-link target="_blank" to="/terminosycondiciones/privacidad-de-datos"> Ver términos y Condiciones</Nuxt-link>
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
        <Message :snackbar="snackbar" :color-snackbar="colorSnack" :message="message"/>
    </v-row>
</template>
<script>

import Post from '../../post/post'
import Message from '../messages/message1.vue'
import Gcaptcha from '../recaptcha.vue'

export default {   
    components:{
        Gcaptcha, Message
    },
    data(){
        return{

            nameRules: [
                v => !!v || 'Campo requerido',
            ],
            emailRules: [
                v => /.+@.+\..+/.test(v) || '',
            ],
            
            // Datos del titular
            nameTitular: '',
            address: '',
            neighborhood: '',
            municipy: '',
            cellphone: '',
            email: '',

            // datos del homenaje
            nameHomenaje: '',
            documento: '',
            afiliaty: '',
            afiliatys: [ { value: '1', text: 'Si' }, { value: '0', text: 'No' } ],
            lugarFallecimiento: '',

            // documentos
            documents: '',
            documentos: [ { value: '1', text: 'Si' }, { value: '0', text: 'No' } ],
            
            // exequias
            exequias: '',
            religiones: ['Católico', 'Cristiano', 'Islámica', 'Budista', 'Otro'],
            showOther: false,
            other: '',
            
            // articulos
            articlesAdd: [
                { text: 'Homenaje fotográfico', src: 'https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634140164/hi2ubdltoxs8vfriuxds.png' },
                { text: 'Bonsái', src: 'https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634135748/g11uv8eamd7owstvl0z0.jpg' },
                { text: 'Baúl del duelo', src: 'https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634135777/mnzadgoxvk20ophp3bvo.jpg' },
                { text: 'Arreglo floral', src: 'https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634135800/bmjdzbanoo43woe75ceg.jpg' },
                { text: 'Bono savime', src: 'https://res.cloudinary.com/olivos-villavicencio/image/upload/v1634135827/pfkdw2nsj9sc9wogpovo.jpg' },
            ],

            // templo religioso
            church: '',
            hour: '',
            homenaje: '',
            homenajes: [ 
                {value: '1', text: 'Homenaje fotógrafico (Retablo de 58cm x 36cm)'}, 
                {value: '2', text: 'Arreglo floral'},
                {value: '3', text: 'Arreglo floral y foto pequeña'}
            ],
            addressDelivery: '',

            // destino final
            destinyFinal: '',
            destinoFinal:['Inhumación', 'Cremación'],

            // parentescos
            kinship: '',

            // cenizarios
            cenizarios: [ 'Cenizario Sencillo', 'Cenizario Doble','Cenizario Octagonal'],

            // terminos
            terminos: false,
            
            // captcha
            resCaptcha: false,

            // message send form
            snackbar: false,
            message: '',
            colorSnack: '',

            // isEditing
            isEditing: true

        }
    },
    methods:{
        async sendFormHomenajes(){

            if(this.nameTitular !== '' && this.address !== '' && this.neighborhood !== '' && this.municipy !== '' && this.cellphone !== '' && this.email !== '' &&
                this.nameHomenaje !== '' && this.documento !== '' && this.afiliaty !== '' && this.lugarFallecimiento !== '' && this.documents !== '' &&
                this.exequias !== '' && this.article !== '' && this.church !== '' && this.hour !== '' && this.homenaje !== '' && 
                this.destinyFinal !== '' && this.kinship !== '' && this.resCaptcha !== false){

                const datas = {
                    nombre_titular: this.nameTitular,
                    direccion: this.address,
                    barrio: this.neighborhood,
                    municipio: this.municipy,
                    telefono: this.cellphone,
                    email: this.email,
                    nombre_homenaje: this.nameHomenaje,
                    n_documento: this.documento,
                    afiliado: this.afiliaty,
                    lugar_fallecimiento: this.lugarFallecimiento,
                    documentos: this.documents,
                    exequias: this.exequias,
                    otro: this.other,
                    iglesia: this.church,
                    hora_exequias: this.hour,
                    retablo: this.homenaje,
                    direccion_entrega: this.addressDelivery,
                    destino_final: this.destinyFinal,
                    parentescos: this.kinship,
                    fecha_registro: this.$moment().format('YYYY-MM-DD HH:mm:ss')
                }
                const { data } = await Post.postFormHomenajes( datas )

                if(data.error === false){
                    this.snackbar = true
                    this.colorSnack = 'green accent-4'
                    this.message = 'Se envio tu solicitud de homenaje.'
                    setTimeout(()=>{ this.snackbar = false },3000)
                    this.$refs.formHomenajes.reset()
                }else{
                    this.snackbar = true
                    this.colorSnack = 'red accent-3'
                    this.message = 'Ops! algo no salio bien'
                    setTimeout(()=>{ this.snackbar = false },3000)
                    this.$refs.formHomenajes.reset()
                }

                
            }else{

                this.snackbar = true
                this.colorSnack = 'red accent-3'
                this.message = 'Asegurate de diligenciar todos los campos incluyendo el captcha'
                setTimeout(()=>{ this.snackbar = false },3000)

                this.$refs.formHomenajes.validate()
                setTimeout(()=>{ this.$refs.formHomenajes.resetValidation() }, 5000)
            }
        },

        selectedRetablo(param){
            if(param === '1'){
                this.isEditing = false
            }else{
                this.isEditing = true
            }
        },

        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
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
    },
}
</script>

<style lang="scss" scoped>
// .img-principal{
    
// }
</style>