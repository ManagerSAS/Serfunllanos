<template>
    <div class="mb-5" >
        <img src="../../static/bannerformulario.png" width="100%">
        <v-row>
            <v-col cols="12" sm="12" md="11" lg="12">
                <v-row align="center" justify="center">
                    <v-col align="center" justify="center" cols="12" sm="8" md="10" lg="10">
                            <h2 class="text-raleway-verde mt-5 mb-5">TRANSFORMACIÓN DIGITAL SERFUNLLANOS</h2>
                            <p class="text-relaway">Nos interesa su conocimiento en tecnologías disruptivas.</p>
                    </v-col>
                </v-row>
                 <v-form ref="formHomenajes" autocomplete="off">
                <v-row align="center" justify="center">
                    <v-col cols="10" sm="3" md="5" lg="3">
                            <p class="text-relaway secondary--text">Nombre completo.</p>
                            <v-text-field
                                    v-model="nombre"
                                    :rules="nameRules"
                                    color="teal darken-4"
                                    label="Nombre titular"
                                    hide-details
                            ></v-text-field>
                    </v-col>
                    <v-col cols="10" sm="3" md="5" lg="3">
                            <p class="text-relaway secondary--text">Area </p>
                            <v-select
                                v-model="area"
                                :items="areas"
                                :rules="nameRules"
                                item-text="text"
                                item-value="value"
                                color="teal darken-4"
                                item-color="teal darken-4"
                                clearable
                                label="Respuesta"
                            ></v-select>      
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-col cols="10" sm="12" md="10" lg="6">
                        <p class="text-relaway secondary--text">¿Uso de herramientas de Google y Ofimática? (Indique por favor el nivel de conocimiento que tiene sobre la herramienta)</p>
                        <v-row>
                            <v-col>
                                <p>Programa</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/word.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                        Word - Procesador de texto
                                    </p>
                                </div>
                            </v-col>
                           <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlWord"  value="1"  type="radio" ><label> 1</label> 
                            </v-col>
                            <v-col cols="12" md="1" lg="1">
                                <input v-model="lvlWord"  value="2" type="radio"><label> 2</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlWord"  value="3" type="radio"><label> 3</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlWord"  value="4" type="radio"><label> 4</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlWord"  value="5" type="radio"><label> 5</label>  
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/excel.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                        Excel - Hojas de Calculo
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlExcel"  value="1" type="radio"><label> 1</label> 
                            </v-col>
                            <v-col cols="12" md="1" lg="1">
                                <input v-model="lvlExcel"  value="2" type="radio"><label> 2</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlExcel"  value="3" type="radio"><label> 3</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlExcel"  value="4" type="radio"><label> 4</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlExcel"  value="5" type="radio"><label> 5</label>  
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos//Power-Point.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                        Power Point
                                    </p>
                                </div>
                                <p></p>
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlPowerP" value="1" type="radio"><label> 1</label> 
                            </v-col>
                            <v-col cols="12" md="1" lg="1">
                                <input v-model="lvlPowerP" value="2" type="radio"><label> 2</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlPowerP" value="3" type="radio"><label> 3</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlPowerP" value="4" type="radio"><label> 4</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlPowerP" value="5" type="radio"><label> 5</label>  
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/Google-Drive.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Google Drive
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlDrive" value="1" type="radio"><label> 1</label> 
                            </v-col>
                            <v-col cols="12" md="1" lg="1">
                                <input v-model="lvlDrive" value="2" type="radio"><label> 2</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlDrive" value="3" type="radio"><label> 3</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlDrive" value="4" type="radio"><label> 4</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlDrive" value="5" type="radio"><label> 5</label>  
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/Google-Calendario.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Google Calendario
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlCalendar" value="1" type="radio"><label> 1</label> 
                            </v-col>
                            <v-col cols="12" md="1" lg="1">
                                <input v-model="lvlCalendar" value="2" type="radio"><label> 2</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlCalendar" value="3" type="radio"><label> 3</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlCalendar" value="4" type="radio"><label> 4</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlCalendar" value="5" type="radio"><label> 5</label>  
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="1" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/Meet.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                        Google Meet
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlMeet" value="1" type="radio"><label> 1</label> 
                            </v-col>
                            <v-col cols="12" md="1" lg="1">
                                <input v-model="lvlMeet" value="2" type="radio"><label> 2</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlMeet" value="3" type="radio"><label> 3</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlMeet" value="4" type="radio"><label> 4</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlMeet" value="5" type="radio"><label> 5</label>  
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/Fotos.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Google Fotos
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlFotos" value="1" type="radio"><label> 1</label> 
                            </v-col>
                            <v-col cols="12" md="1" lg="1">
                                <input v-model="lvlFotos" value="2" type="radio"><label> 2</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlFotos" value="3" type="radio"><label> 3</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlFotos" value="4" type="radio"><label> 4</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlFotos" value="5" type="radio"><label> 5</label>  
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/Formulario.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Google Formulario
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlForms" value="1" type="radio"><label> 1</label> 
                            </v-col>
                            <v-col cols="12" md="1" lg="1">
                                <input v-model="lvlForms" value="2" type="radio"><label> 2</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlForms" value="3" type="radio"><label> 3</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlForms" value="4" type="radio"><label> 4</label>  
                            </v-col>
                            <v-col cols="12"  md="1" lg="1">
                                <input v-model="lvlForms" value="5" type="radio"><label> 5</label>  
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <!-- administra  -->
                <v-row align="center" justify="center" v-if="area == 'Administración'">
                    <v-col cols="10" sm="10" md="10" lg="6">
                        <p class="text-relaway secondary--text">¿Señalas los sistemas de información y aplicativos que usa? (indique por favor si requiere capacitacion )</p>
                        <v-row>
                            <v-col>
                                <p>Programa</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/orfeo.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       ORFEO
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    v-model="CapOrfeo"
                                    :rules="nameRules"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/karing.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       KARING
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapKaring"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/sise.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       SISE
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    label="Requiere Capacitacion"
                                    v-model="CapSise"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logolivos.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Intranet
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapIntr"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logoGmail.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Gmail
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapGmail"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                
                <!-- Cartera -->
                <v-row align="center" justify="center" v-if="area == 'Cartera'">
                    <v-col cols="10" sm="10" md="10" lg="6">
                        <p class="text-relaway secondary--text">¿Señalas los sistemas de información y aplicativos que usa?</p>
                        <v-row>
                            <v-col>
                                <p>Programa</p>
                            </v-col>
                            <v-col>
                                <p>Requiere Capacitacion (Seleccione si o no)</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/orfeo.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       ORFEO
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    v-model="CapOrfeo"
                                    :rules="nameRules"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/karing.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       KARING
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapKaring"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/sise.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       SISE
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    label="Requiere Capacitacion"
                                    v-model="CapSise"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/crm.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       CRM
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapCrm"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logolivos.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Intranet
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapIntr"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/dispapeles.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Dispápeles
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapDisp"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logoGmail.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Gmail
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapGmail"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <!-- Contable -->
                <v-row align="center" justify="center" v-if="area == 'Contable'">
                    <v-col cols="10" sm="10" md="10" lg="6">
                        <p class="text-relaway secondary--text">¿Señalas los sistemas de información y aplicativos que usa?</p>
                        <v-row>
                            <v-col>
                                <p>Programa</p>
                            </v-col>
                            <v-col>
                                <p>Requiere Capacitacion (Seleccione si o no)</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/orfeo.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       ORFEO
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    v-model="CapOrfeo"
                                    :rules="nameRules"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/karing.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       KARING
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapKaring"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/sise.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       SISE
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    label="Requiere Capacitacion"
                                    v-model="CapSise"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                    
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logolivos.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Intranet
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapIntr"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/solidaria.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Olivos Web de Solidaria
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapSoli"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/dispapeles.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Dispápeles
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapDisp"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logoGmail.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Gmail
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapGmail"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <!-- Comercial -->
                <v-row align="center" justify="center" v-if="area == 'Comercial'">
                    <v-col cols="10" sm="10" md="10" lg="6">
                        <p class="text-relaway secondary--text">¿Señalas los sistemas de información y aplicativos que usa?</p>
                        <v-row>
                            <v-col>
                                <p>Programa</p>
                            </v-col>
                            <v-col>
                                <p>Requiere Capacitacion (Seleccione si o no)</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/orfeo.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       ORFEO
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    v-model="CapOrfeo"
                                    :rules="nameRules"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/sise.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       SISE
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    label="Requiere Capacitacion"
                                    v-model="CapSise"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/crm.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       CRM
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapCrm"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logolivos.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Intranet
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapIntr"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/solidaria.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Olivos Web de Solidaria
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapSoli"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logoGmail.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Gmail
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapGmail"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <!-- Gestión Documental -->
                <v-row align="center" justify="center" v-if="area == 'Gestión Documental'">
                    <v-col cols="10" sm="10" md="10" lg="6">
                        <p class="text-relaway secondary--text">¿Señalas los sistemas de información y aplicativos que usa?</p>
                        <v-row>
                            <v-col>
                                <p>Programa</p>
                            </v-col>
                            <v-col>
                                <p>Requiere Capacitacion (Seleccione si o no)</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/orfeo.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       ORFEO
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    v-model="CapOrfeo"
                                    :rules="nameRules"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/karing.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       KARING
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapKaring"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/sise.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       SISE
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    label="Requiere Capacitacion"
                                    v-model="CapSise"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logolivos.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Intranet
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapIntr"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logoGmail.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Gmail
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapGmail"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <!-- Homenajes -->
                <v-row align="center" justify="center" v-if="area == 'Homenajes'">
                    <v-col cols="10" sm="10" md="10" lg="6">
                        <p class="text-relaway secondary--text">¿Señalas los sistemas de información y aplicativos que usa?</p>
                        <v-row>
                            <v-col>
                                <p>Programa</p>
                            </v-col>
                            <v-col>
                                <p>Requiere Capacitacion (Seleccione si o no)</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style="display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/orfeo.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       ORFEO
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    v-model="CapOrfeo"
                                    :rules="nameRules"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/karing.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       KARING
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapKaring"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/sise.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       SISE
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    label="Requiere Capacitacion"
                                    v-model="CapSise"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logolivos.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Intranet
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapIntr"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logolivos.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Olivos LG
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapLG"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logoGmail.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Gmail
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapGmail"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <!-- Suscripción -->
                <v-row align="center" justify="center" v-if="area == 'Suscripción'">
                    <v-col cols="10" sm="10" md="10" lg="6">
                        <p class="text-relaway secondary--text">¿Señalas los sistemas de información y aplicativos que usa?</p>
                        <v-row>
                            <v-col>
                                <p>Programa</p>
                            </v-col>
                            <v-col>
                                <p>Requiere Capacitacion (Seleccione si o no)</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/orfeo.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       ORFEO
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    v-model="CapOrfeo"
                                    :rules="nameRules"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/karing.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       KARING
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapKaring"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/sise.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       SISE
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    label="Requiere Capacitacion"
                                    v-model="CapSise"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logolivos.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Intranet
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapIntr"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/dispapeles.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Dispápeles
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapDisp"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="5" md="6" lg="6">
                                <div  style=" display:inline-block; vertical-align:top;">
                                    <img src="../../static/logos/logoGmail.png" height="20" alt="img"/>
                                </div>
                                <div style="display:inline-block;">
                                    <p >
                                       Gmail
                                    </p>
                                </div>
                            </v-col>
                            <v-col cols="12" sm="5" md="4" lg="4">
                                <v-select
                                    :items="select"
                                    :rules="nameRules"
                                    v-model="CapGmail"
                                    label="Requiere Capacitacion"
                                    dense
                                    outlined
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>


                <v-row align="center" justify="center">
                    <v-col cols="10" sm="3" md="10" lg="6">
                            <p class="text-relaway secondary--text">Aplicativo de redes sociales y mensajería masiva usadas? .</p>
                            <v-text-field
                                    v-model="mensajeria"
                                    :rules="nameRules"
                                    color="teal darken-4"
                                    label="Escriba aqui"
                                    hide-details
                            ></v-text-field>
                    </v-col>
                </v-row>
                <v-row align="center" justify="center">
                    <v-col cols="10" sm="3" md="10" lg="6">
                            <p class="text-relaway secondary--text">¿Conoces alguna herramienta que le facilitaría su labor o sea importante para la empresa? .</p>
                            <v-text-field
                                    v-model="adicionales"
                                    :rules="nameRules"
                                    color="teal darken-4"
                                    label="Escriba aqui"
                                    hide-details
                            ></v-text-field>
                    </v-col>
                </v-row>
                </v-form>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="10" sm="3" md="5" lg="6">
                <Gcaptcha @captcha="verifyCaptcha"/>
            </v-col>
        </v-row>
        <v-row align="center" justify="center">
            <v-col cols="10" sm="3" md="5" lg="6">
                <v-btn 
                    rounded
                    class="card-shadow"
                    dark
                    color="teal darken-3"
                    @click="enviar"
                >
                    Enviar Formulario
                    </v-btn>
            </v-col>
        </v-row>
        <v-snackbar
            class="pb-8"
            :timeout="3000"
            :value="snackbar"
            :color="colorSnack"
            rounded="pill"
        > {{ message }} </v-snackbar>
    </div>
</template>
<script>

import Post from '../post/post'
import Gcaptcha from '../forms/recaptcha.vue'

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

            nombre:'',
            mensajeria:'',
            adicionales:'',

            lvlWord:'',
            lvlExcel:'',
            lvlPowerP:'',
            lvlDrive:'',
            lvlCalendar:'',
            lvlMeet:'',
            lvlFotos:'',
            lvlForms:'',

            CapOrfeo:'',
            CapKaring:'',
            CapSise:'',
            CapCrm:'',
            CapLG:'',
            CapIntr:'',
            CapSoli:'',
            CapDisp:'',
            CapGmail:'',

            area: '',
            areas: [ 
                'Administración', 
                'Cartera',
                'Comercial',
                'Contable', 
                'Gestión Documental',
                'Homenajes',
                'Suscripción',

            ],
            select:[
                'Si',
                'No'
            ],
            snackbar: false,
            message: '',
            colorSnack: '',

            resCaptcha: true,
        }
    },
    methods:{
        verifyCaptcha(response){
            if(response){
                this.resCaptcha = response
            }
        },
        async enviar(){

            if(this.area === 'Administración'){
                if(this.nombre !== '' && this.CapOrfeo !== '' && this.CapKaring !== '' && this.CapSise !== '' && this.CapIntr!== '' && this.mensajeria !=='' && this.adicionales !== '' && this.lvlWord!==''&& this.lvlExcel!==''&& this.lvlPowerP!==''&& this.lvlDrive!==''&& this.lvlCalendar!==''&& this.lvlMeet!==''&& this.lvlFotos!==''&&  this.lvlForms!=='' && this.CapGmail!== '' && this.resCaptcha !== false){
                    
                    const datas ={
                        nombre: this. nombre,
                        area: this.area,
                        lvlWord: this.lvlWord,
                        lvlExcel: this.lvlExcel,
                        lvlPowerP: this.lvlPowerP,
                        lvlDrive: this.lvlDrive,
                        lvlCalendar: this.lvlCalendar,
                        lvlMeet: this.lvlMeet,
                        lvlFotos: this.lvlFotos,
                        lvlForms: this.lvlForms,
                        CapOrfeo: this.CapOrfeo,
                        CapKaring: this.CapKaring,
                        CapSise: this.CapSise,
                        CapIntr: this.CapIntr,
                        CapCrm:this.CapCrm,
                        CapLG:this.CapLG,
                        CapSoli:this.CapSoli,
                        CapDisp:this.CapDisp,
                        CapGmail:this.CapGmail,
                        mensajeria: this.mensajeria,
                        adicionales: this.adicionales,
                    }

                    const { data } = await Post.postFormTransfor( datas )

                    if(data.error === false){
                        this.snackbar = true
                        this.colorSnack = 'green accent-4'
                        this.message = 'Se envio la informacion.'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                        
                    }else{
                        this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = 'No se pudo enviar la informacion'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                    }

                }else{
                    this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = '¡Por favor llenar todos los campos'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                }
            }
            if(this.area ===  'Cartera'){
                if(this.nombre !== '' && this.CapOrfeo !== '' && this.CapKaring !== '' && this.CapSise !== '' && this.CapIntr!== '' && this.CapCrm !== '' && this.CapDisp !== '' && this.mensajeria !=='' && this.adicionales !== '' && this.lvlWord!==''&& this.lvlExcel!==''&& this.lvlPowerP!==''&& this.lvlDrive!==''&& this.lvlCalendar!==''&& this.lvlMeet!==''&& this.lvlFotos!==''&&  this.lvlForms!=='' && this.CapGmail!== '' && this.resCaptcha !== false){

                    const datas ={
                        nombre: this. nombre,
                        area: this.area,
                        lvlWord: this.lvlWord,
                        lvlExcel: this.lvlExcel,
                        lvlPowerP: this.lvlPowerP,
                        lvlDrive: this.lvlDrive,
                        lvlCalendar: this.lvlCalendar,
                        lvlMeet: this.lvlMeet,
                        lvlFotos: this.lvlFotos,
                        lvlForms: this.lvlForms,
                        CapOrfeo: this.CapOrfeo,
                        CapKaring: this.CapKaring,
                        CapSise: this.CapSise,
                        CapIntr: this.CapIntr,
                        CapCrm:this.CapCrm,
                        CapLG:this.CapLG,
                        CapSoli:this.CapSoli,
                        CapDisp:this.CapDisp,
                        CapGamail:this.CapGmail,
                        mensajeria: this.mensajeria,
                        adicionales: this.adicionales,
                    }

                    const { data } = await Post.postFormTransfor( datas )
                    if(data.error === false){
                        this.snackbar = true
                        this.colorSnack = 'green accent-4'
                        this.message = 'Se envio la informacion.'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                        
                    }else{
                        this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = 'No se pudo enviar la informacion'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                    }

                }else{
                    this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = '¡Por favor llenar todos los campos'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                }
            }

            if(this.area === 'Comercial'){
                if(this.nombre !== '' && this.CapOrfeo !== '' && this.CapSise !== '' && this.CapIntr!== '' && this.CapCrm !== '' && this.CapSoli !== '' && this.mensajeria !=='' && this.adicionales !== '' && this.lvlWord!==''&& this.lvlExcel!==''&& this.lvlPowerP!==''&& this.lvlDrive!==''&& this.lvlCalendar!==''&& this.lvlMeet!==''&& this.lvlFotos!==''&&  this.lvlForms!=='' && this.CapGmail!== '' && this.resCaptcha !== false){

                    const datas ={
                        nombre: this. nombre,
                        area: this.area,
                        lvlWord: this.lvlWord,
                        lvlExcel: this.lvlExcel,
                        lvlPowerP: this.lvlPowerP,
                        lvlDrive: this.lvlDrive,
                        lvlCalendar: this.lvlCalendar,
                        lvlMeet: this.lvlMeet,
                        lvlFotos: this.lvlFotos,
                        lvlForms: this.lvlForms,
                        CapOrfeo: this.CapOrfeo,
                        CapKaring: this.CapKaring,
                        CapSise: this.CapSise,
                        CapIntr: this.CapIntr,
                        CapCrm:this.CapCrm,
                        CapLG:this.CapLG,
                        CapSoli:this.CapSoli,
                        CapDisp:this.CapDisp,
                        CapGamail:this.CapGmail,
                        mensajeria: this.mensajeria,
                        adicionales: this.adicionales,
                    }

                    const { data } = await Post.postFormTransfor( datas )
                    if(data.error === false){
                        this.snackbar = true
                        this.colorSnack = 'green accent-4'
                        this.message = 'Se envio la informacion.'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                        
                    }else{
                        this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = 'No se pudo enviar la informacion'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                    }

                }else{
                    this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = '¡Por favor llenar todos los campos'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                }
            }

            if(this.area === 'Contable'){
                if(this.nombre !== '' && this.CapOrfeo !== '' && this.CapKaring !== '' && this.CapSise !== '' && this.CapIntr!== '' && this.CapSoli !== '' && this.CapDisp !== '' && this.mensajeria !=='' && this.adicionales !== '' && this.lvlWord!==''&& this.lvlExcel!==''&& this.lvlPowerP!==''&& this.lvlDrive!==''&& this.lvlCalendar!==''&& this.lvlMeet!==''&& this.lvlFotos!==''&&  this.lvlForms!=='' && this.CapGmail!== '' && this.resCaptcha !== false){

                    const datas ={
                        nombre: this. nombre,
                        area: this.area,
                        lvlWord: this.lvlWord,
                        lvlExcel: this.lvlExcel,
                        lvlPowerP: this.lvlPowerP,
                        lvlDrive: this.lvlDrive,
                        lvlCalendar: this.lvlCalendar,
                        lvlMeet: this.lvlMeet,
                        lvlFotos: this.lvlFotos,
                        lvlForms: this.lvlForms,
                        CapOrfeo: this.CapOrfeo,
                        CapKaring: this.CapKaring,
                        CapSise: this.CapSise,
                        CapIntr: this.CapIntr,
                        CapCrm:this.CapCrm,
                        CapLG:this.CapLG,
                        CapSoli:this.CapSoli,
                        CapDisp:this.CapDisp,
                        CapGamail:this.CapGmail,
                        mensajeria: this.mensajeria,
                        adicionales: this.adicionales,
                    }

                    const { data } = await Post.postFormTransfor( datas )
                    if(data.error === false){
                        this.snackbar = true
                        this.colorSnack = 'green accent-4'
                        this.message = 'Se envio la informacion.'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                        
                    }else{
                        this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = 'No se pudo enviar la informacion'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                    }

                }else{
                    this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = '¡Por favor llenar todos los campos'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                }
            }

            if(this.area === 'Gestión Documental'){
                if(this.nombre !== '' && this.CapOrfeo !== '' && this.CapKaring !== '' && this.CapSise !== '' && this.CapIntr!== '' && this.mensajeria !=='' && this.adicionales !== '' && this.lvlWord!==''&& this.lvlExcel!==''&& this.lvlPowerP!==''&& this.lvlDrive!==''&& this.lvlCalendar!==''&& this.lvlMeet!==''&& this.lvlFotos!==''&&  this.lvlForms!=='' && this.CapGmail!== '' && this.resCaptcha !== false){
                    const datas ={
                        nombre: this. nombre,
                        area: this.area,
                        lvlWord: this.lvlWord,
                        lvlExcel: this.lvlExcel,
                        lvlPowerP: this.lvlPowerP,
                        lvlDrive: this.lvlDrive,
                        lvlCalendar: this.lvlCalendar,
                        lvlMeet: this.lvlMeet,
                        lvlFotos: this.lvlFotos,
                        lvlForms: this.lvlForms,
                        CapOrfeo: this.CapOrfeo,
                        CapKaring: this.CapKaring,
                        CapSise: this.CapSise,
                        CapIntr: this.CapIntr,
                        CapCrm:this.CapCrm,
                        CapLG:this.CapLG,
                        CapSoli:this.CapSoli,
                        CapDisp:this.CapDisp,
                        CapGamail:this.CapGmail,
                        mensajeria: this.mensajeria,
                        adicionales: this.adicionales,
                    }

                    const { data } = await Post.postFormTransfor( datas )
                    if(data.error === false){
                        this.snackbar = true
                        this.colorSnack = 'green accent-4'
                        this.message = 'Se envio la informacion.'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                        
                    }else{
                        this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = 'No se pudo enviar la informacion'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                    }

                }else{
                    this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = '¡Por favor llenar todos los campos'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                }
            }

            if(this.area === 'Homenajes'){
                if(this.nombre !== '' && this.CapOrfeo !== '' && this.CapKaring !== '' && this.CapSise !== '' && this.CapIntr!== '' && this.CapLG !=='' && this.mensajeria !=='' && this.adicionales !== '' && this.lvlWord!==''&& this.lvlExcel!==''&& this.lvlPowerP!==''&& this.lvlDrive!==''&& this.lvlCalendar!==''&& this.lvlMeet!==''&& this.lvlFotos!==''&&  this.lvlForms!=='' && this.CapGmail!== '' && this.resCaptcha !== false){

                    const datas ={
                        nombre: this. nombre,
                        area: this.area,
                        lvlWord: this.lvlWord,
                        lvlExcel: this.lvlExcel,
                        lvlPowerP: this.lvlPowerP,
                        lvlDrive: this.lvlDrive,
                        lvlCalendar: this.lvlCalendar,
                        lvlMeet: this.lvlMeet,
                        lvlFotos: this.lvlFotos,
                        lvlForms: this.lvlForms,
                        CapOrfeo: this.CapOrfeo,
                        CapKaring: this.CapKaring,
                        CapSise: this.CapSise,
                        CapIntr: this.CapIntr,
                        CapCrm:this.CapCrm,
                        CapLG:this.CapLG,
                        CapSoli:this.CapSoli,
                        CapDisp:this.CapDisp,
                        CapGamail:this.CapGmail,
                        mensajeria: this.mensajeria,
                        adicionales: this.adicionales,
                    }

                    const { data } = await Post.postFormTransfor( datas )
                    if(data.error === false){
                        this.snackbar = true
                        this.colorSnack = 'green accent-4'
                        this.message = 'Se envio la informacion.'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                        
                    }else{
                        this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = 'No se pudo enviar la informacion'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                    }

                }else{
                    this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = '¡Por favor llenar todos los campos'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                }
            }

            if(this.area === 'Suscripción'){
                if(this.nombre !== '' && this.CapOrfeo !== '' && this.CapKaring !== '' && this.CapSise !== '' && this.CapIntr!== '' && this.CapDisp !== '' && this.mensajeria !=='' && this.adicionales !== '' && this.lvlWord!==''&& this.lvlExcel!==''&& this.lvlPowerP!==''&& this.lvlDrive!==''&& this.lvlCalendar!==''&& this.lvlMeet!==''&& this.lvlFotos!==''&&  this.lvlForms!=='' && this.CapGmail!== '' && this.resCaptcha !== false){

                    const datas ={
                        nombre: this. nombre,
                        area: this.area,
                        lvlWord: this.lvlWord,
                        lvlExcel: this.lvlExcel,
                        lvlPowerP: this.lvlPowerP,
                        lvlDrive: this.lvlDrive,
                        lvlCalendar: this.lvlCalendar,
                        lvlMeet: this.lvlMeet,
                        lvlFotos: this.lvlFotos,
                        lvlForms: this.lvlForms,
                        CapOrfeo: this.CapOrfeo,
                        CapKaring: this.CapKaring,
                        CapSise: this.CapSise,
                        CapIntr: this.CapIntr,
                        CapCrm:this.CapCrm,
                        CapLG:this.CapLG,
                        CapSoli:this.CapSoli,
                        CapDisp:this.CapDisp,
                        CapGamail:this.CapGmail,
                        mensajeria: this.mensajeria,
                        adicionales: this.adicionales,
                    }

                    const { data } = await Post.postFormTransfor( datas )
                    if(data.error === false){
                        this.snackbar = true
                        this.colorSnack = 'green accent-4'
                        this.message = 'Se envio la informacion.'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                        
                    }else{
                        this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = 'No se pudo enviar la informacion'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                    }

                }else{
                    this.snackbar = true
                        this.colorSnack = 'red accent-3'
                        this.message = '¡Por favor llenar todos los campos'
                        setTimeout(()=>{ this.snackbar = false },3000)
                        this.$refs.formHomenajes.reset()
                }
            }

            if(this.nombre=== '' && this.area=== '' && this.lvlWord=== '' && this.lvlExcel=== '' && this.lvlPowerP=== '' && this.lvlDrive=== '' && this.lvlCalendar=== '' && this.lvlMeet=== '' && this.lvlFotos=== '' && this.lvlForms=== '' && this.CapOrfeo=== '' && this.CapKaring=== '' && this.CapSise=== '' && this.CapIntr=== '' && this.CapCrm=== '' && this.CapLG=== '' && this.CapSoli=== '' && this.mensajeria=== '' && this.adicionales && this.CapGmail === ''){
                this.snackbar = true
                this.colorSnack = 'red accent-3'
                this.message = '¡Por favor llenar todos los campos'
                setTimeout(()=>{ this.snackbar = false },3000)
            }
        }
    }
}
</script>