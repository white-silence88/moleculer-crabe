const ApiService = require("moleculer-web");

module.exports = {
  name: 'greeter',
  version: 'v1',

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service metadata
	 */
	metadata: {

	},

	/**
	 * Service dependencies
	 * dependencies: [],
	*/

	/**
	 * Actions
	 */
	actions: {

		hello(ctx) {
      this.broker.call('$node.stats')
        .then((res) => console.log(res));
			return 'Hello Moleculer';
		},

		welcome: {
			params: {
				name: 'string'
			},
			handler(ctx) {
				return `Welcome, ${ctx.params.name}`;
			}
		}
	},

	events: {

	},

	/**
	 * Methods
	 */
	methods: {

	},

	/**
	 * Service created lifecycle event handler
	 */
	created() {

	},

	/**
	 * Service started lifecycle event handler
	 */
	started() {

	},

	/**
	 * Service stopped lifecycle event handler
	 */
	stopped() {

	}
};
