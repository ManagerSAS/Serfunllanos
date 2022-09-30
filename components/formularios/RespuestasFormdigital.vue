<template>
    <div>
        <table id="tableID">
            <thead>
                <tr>
                <th class="text-left">
                    Nombre
                </th>
                <th class="text-left">
                    Area
                </th>
                <th class="text-left">
                    Nivel Word
                </th>
                <th class="text-left">
                    Nivel Excel
                </th>
                <th class="text-left">
                    Nivel Power point
                </th>
                <th class="text-left">
                    Nivel Drive
                </th>
                <th class="text-left">
                    Nivel Calendario
                </th>
                <th class="text-left">
                    Nivel Meet
                </th>
                <th class="text-left">
                    Nivel Fotos
                </th>
                <th class="text-left">
                    Nivel Formulario
                </th>
                <th class="text-left">
                    Capacitación Orfeo
                </th>
                <th class="text-left">
                    Capacitación Karing
                </th>
                <th class="text-left">
                    Capacitación Sise
                </th>
                <th class="text-left">
                    Capacitación Intranet
                </th>
                <th class="text-left">
                    Capacitación CRM
                </th>
                <th class="text-left">
                    Capacitación Olivos LG
                </th>
                <th class="text-left">
                    Capacitación Web Solidaria
                </th>
                <th class="text-left">
                    Capacitación Dispapeles
                </th>
                <th class="text-left">
                    App Mensajerias
                </th>
                <th class="text-left">
                    App Adicionales
                </th>
                </tr>
            </thead>
            <tbody>
                <tr
                v-for="(programs,index) in datos"
                :key="index"
                >
                    <td>{{ programs.nombre }}</td>
                    <td>{{ programs.area }}</td>
                    <td>{{programs.lvlWord}}</td>
                    <td>{{programs.lvlExcel}}</td>
                    <td>{{programs.lvlPowerP}}</td>
                    <td>{{programs.lvlDrive}}</td>
                    <td>{{programs.lvlCalendar}}</td>
                    <td>{{programs.lvlMeet}}</td>
                    <td>{{programs.lvlFotos}}</td>
                    <td>{{programs.lvlForms}}</td>
                    <td>{{programs.CapOrfeo}}</td>
                    <td>{{programs.CapKaring}}</td>
                    <td>{{programs.CapSise}}</td>
                    <td>{{programs.CapIntr}}</td>
                    <td>{{programs.CapCrm}}</td>
                    <td>{{programs.CapLG}}</td>
                    <td>{{programs.CapSoli}}</td>
                    <td>{{programs.CapDisp}}</td>
                    <td>{{programs.mensajeria}}</td>
                    <td>{{programs.adicionales}}</td>

                </tr>
            </tbody>
        </table>

    <!-- <v-btn @click="exportTableToExcel('tblData', 'members-data')"> -->

    
    </div>
  
</template>
<script>
import Post from '../post/post'
// import TableToExcel from 'jquery.tableToExcel.js'
export default {
    data(){
        return{

            datos:[]
        }
    },
    mounted(){
        this.ConsoltarFomulario()
    },
    methods:{
        async ConsoltarFomulario(){
            
            const response = await Post.getFormulario();  
            response.data.results.forEach((element) => {
                this.datos.push({
                    nombre: element.nombre,
                    area: element.area,
                    lvlWord: element.lvlWord,
                    lvlExcel: element.lvlExcel,
                    lvlPowerP: element.lvlPowerP,
                    lvlDrive: element.lvlDrive,
                    lvlCalendar: element.lvlCalendar,
                    lvlMeet: element.lvlMeet,
                    lvlFotos: element.lvlFotos,
                    lvlForms: element.lvlForms,
                    CapOrfeo: element.CapOrfeo,
                    CapKaring: element.CapKaring,
                    CapSise: element.CapSise,
                    CapIntr: element.CapIntr,
                    CapCrm:element.CapCrm,
                    CapLG:element.CapLG,
                    CapSoli:element.CapSoli,
                    CapDisp:element.CapDisp,
                    mensajeria: element.mensajeria,
                    adicionales: element.adicionales,
                })
               
            }); 
                console.log(this.datos)
        },
         
    },

}

</script>