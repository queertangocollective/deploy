# @queertangocollective/ember-cli-deploy-plugin

This addon is a [ember-cli-deploy](https://ember-cli-deploy.com) plugin that helps with deploying apps using an api and public keys. This plugin is intended to be used in a plugin-pack, which makes it easy to deploy ember apps with as little fuss as necessary.

This plugin requires the following configuration to run properly:

| Variable  | What is it? |
|-----------|-------------|
| `api_key` | The Queer Tango Collective `API_KEY` that was given to you in the administration interface. |
| `api_hostname` | The name of the api that this plugin should communicate to. 9 times out of 10, this is `api.queertangocollective.org` |
| `git_url` | The github URL of your project so links can be created in the administration site for people to review changes made |


