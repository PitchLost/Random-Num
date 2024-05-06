const app = Vue.createApp({
    data() {
        return {
            links: [
                { name: 'Random number generator', link: 'https://able-rail.cloudvent.net/' },
                { name: 'Kosovo Sheets', link: 'https://docs.google.com/spreadsheets/d/1O-EO8SEVfB-6qoxzBIxsO82soKP8axk1tnoc1yE2EqE/edit#gid=1160569927' },
                { name: '', link: '' },
                { name: '', link: '' }
            ]
        };
    },
    methods: {
        navigateUser(link) {
            // Implement navigation logic here
            window.open(link, '_blank'); // Opens link in a new tab
        }
    }
});

app.mount('#content');
