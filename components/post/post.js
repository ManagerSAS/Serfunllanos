import olivosApi from '../api/olivosApi'

const forms = '/api/v1/forms'

export default {
    
    postFormNoveltys( data ){
        olivosApi.post( forms + '/novedades-empresariales', data)
            .then( response => response.json())
    },

    postFormAuxilios( data ){
        olivosApi.post( forms + '/auxilios-funerarios', data)
            .then( response => response.json())
    }
}