import service from '@/middleware/service'

export default {
    get3Words(params) {
        return service.getEndpoint(`https://api.what3words.com/v3/convert-to-3wa?coordinates=${params.coordinates}&key=${params.key}`)
    },

    // getUnsafeEmployeeList(params){
    //     debugger
    //     return service.getEndpoint(`/api/Message/GetUnsafeEmployee/${params}`)
    // }
}