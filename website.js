const app = Vue.createApp({
    data() {
        return {
            links: [
                { name: 'Random number generator', link: 'https://able-rail.cloudvent.net/' },
                { name: 'Kosovo Sheets', link: 'https://docs.google.com/spreadsheets/d/1O-EO8SEVfB-6qoxzBIxsO82soKP8axk1tnoc1yE2EqE/edit#gid=1160569927' },
                { name: 'Card Sheets', link: 'https://docs.google.com/spreadsheets/d/1DeCPlOKo2OK9BgFeN3G8Dv-vTwx7K7PCWnnUeGAxxdY/edit#gid=0' },
                { name: 'Order Calculator', link: '' }
            ]
        };
    },
    methods: {
        navigateUser(link) {
            window.open(link, '_blank'); // Opens link in a new tab
        }
    }
});

app.mount('#content');
