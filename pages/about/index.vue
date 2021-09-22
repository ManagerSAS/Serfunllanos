<template>
    <v-container fluid>
		<v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <History/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Cards/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-md-0 bg-map">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Redolivos/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Values/>
            </v-col>
        </v-row>
        <v-row justify="center" align="center" class="mt-15 mb-15 pa-10 pa-md-0">
			<v-col cols="12" sm="12" md="12" lg="12" xl="9">
                <Principies/>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import History from '~/components/about/aboutDescription.vue';
import Cards from '~/components/about/cardsVisionMision.vue';
import Redolivos from '~/components/about/redOlivos.vue';
import Values from '~/components/about/valuesSerfunllanos.vue';
import Principies from '~/components/about/principiesSerfunllanos.vue';

export default {
    components:{
        History, Cards, Redolivos, Values, Principies
    },
}
</script>
<style lang="scss">
.olivos--text{
    color: #234b50;
}
.bg-map{
    background-image: url('https://res.cloudinary.com/dbepipmro/image/upload/v1632170476/map_tpx0lm.jpg');
    background-size: 100%;
}
</style>