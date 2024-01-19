const {createApp} = Vue
const app = createApp({
    data(){
        return{
            saluto: "Hello there",
            image: "https://i.gifer.com/72uG.gif",
            risposta: "General Vue"
        }
    }
})
app.mount("#root")