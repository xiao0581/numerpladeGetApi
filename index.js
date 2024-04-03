const baseUrl = "https://v1.motorapi.dk/vehicles"
const config = {
    headers: {
        "X-AUTH-TOKEN": "x98hu4r9v78ugti6ke29zwfzt8ny4l8y", 
        
    }
};
Vue.createApp({
    data() {
        return {           
             bil: null,
            numerplade: null
           
        }
    },
    methods: {

        async getByReg(numerplade) {
            const url = baseUrl + "/" + numerplade
            try {
                const res = await axios.get(url,config)
                this.bil = await res.data
            } catch (e) {
                this.bil = null
            }
        },
    
    }



}).mount("#app")