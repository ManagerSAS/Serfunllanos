<template>
    <ObituarioVillavo city="Granada"/>
</template>

<script>
import ObituarioVillavo from '~/components/Obituarios/slider/obituarioSlider';
export default {

    mounted(){
        // console.log(this.city)
    },
    components:{
        ObituarioVillavo
    },
}
</script>