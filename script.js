const app = Vue.createApp({
	data() {
		return {
			message: 'ciao amico mio',
			date: '2023-05-10',
			read: true,
		};
	},
	methods: {
		toggleRead() {
			this.read = !this.read;
		},
		changeDate() {
			this.date = '2000-05-10';
		},
		formatDate() {
			console.log('metodo');
			return this.date.split('-').reverse().join('/');
		}
	},
	computed: {
		formattedDate() {
			console.log('computed');
			return this.date.split('-').reverse().join('/');
		}
	},
	// watch: {
	// 	read(newValue, oldValue) {
	// 		console.log(oldValue, newValue);
	// 	}
	// },
});

app.mount('#app');