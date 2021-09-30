<template>
    <v-list v-if="listNoveltys != 0">
        <v-list-item
            v-for="(item, i) in listNoveltys"
            :key="i"
        >
            <v-list-item-avatar>
                <v-icon color="teal darken-4"> mdi-account </v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title> {{ item.name }} </v-list-item-title>
                <v-list-item-subtitle> {{ item.novelty }} </v-list-item-subtitle>
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
</template>
<script>
export default {
    props:{
        list:{
            type: Array,
            required: true
        }
    },
    data(){
        return{
            listNoveltys: this.list
        }
    },
    methods:{    
        deleteItem(item){
            const i =  this.listNoveltys.indexOf(item)
            if( i !== -1 ){
                this.listNoveltys.splice(i, 1);
            }
        },
    }
}
</script>