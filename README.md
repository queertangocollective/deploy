# @queertangocollective/deploy

This addon is a [ember-cli-deploy](https://ember-cli-deploy.com) plugin that helps with deploying apps using an api and public keys. This plugin is intended to be used in a plugin-pack, which makes it easy to deploy ember apps with as little fuss as necessary.

This plugin requires the following configuration to run properly:

| Variable  | What is it? |
|-----------|-------------|
| `api_key` | The Queer Tango Collective `API_KEY` that was given to you in the administration interface. |
| `api_hostname` | The name of the api that this plugin should communicate to. 9 times out of 10, this is `api.queertangocollective.org` |
| `git_url` | The github URL of your project so links can be created in the administration site for people to review changes made |


### Installation

* `git clone <repository-url>`
* `cd my-addon`
* `npm install`

### Linting

* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

#### License

This project is licensed under the [Apache 2.0](LICENSE.md).
