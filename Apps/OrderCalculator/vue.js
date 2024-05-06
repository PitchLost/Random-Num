const app = Vue.createApp({
    data() {
        return {
        total: 0, 
        addedNums: [],

        divs: []


        };
    },
    methods: {
      combineNum(num) { 
        addedNums.push(num)
        console.log(addedNums)
      }
      
    }
});

app.mount('#app');
