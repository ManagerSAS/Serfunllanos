<template>
    <div>
        <v-row>
            <v-col>
                <h1 class="font-italic">
                    {{ city }}
                </h1>                
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="3">
                <v-card class="rounded-xl shadow-principal pa-2">
                    <v-card-title class="teal--text subtitle-1 font-weight-bold">
                        MARIA ADELINA RAMIREZ DE VACA
                        <v-spacer></v-spacer>
                        <img src="~/static/nav/iconLogin.png" alt="" width="25">
                    </v-card-title>
                    <v-card-subtitle>
                        Descansó en la paz del Señor
                    </v-card-subtitle>
                    <v-divider></v-divider>
                    <v-card-text>
                        <b>Fecha fallecimiento:</b> 2021-10-02 <br>
                        <b>Sala:</b> Residencial <br><br>

                        <b>Hora exequias:</b> 10:00 AM <br>
                        <b>Fecha exequias:</b> 2021-10-04 <br>
                        <b>Lugar exequias:</b> La libertad <br>
                        <b>Destino final:</b> La libertad 
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>
<script>
export default {
    props:{
        city:{
            type: String,
            required: true
        }
    },
    data(){
        return{
            // cityId: this.city
        }
    }
}
</script>