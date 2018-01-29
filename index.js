/* jshint node: true */
'use strict';
const BasePlugin = require('ember-cli-deploy-plugin');
const passwdUser = require('passwd-user');

const BuildNotifier = require('./lib/build-notifier');

module.exports = {
  name: '@queertangocollective/deploy',

  createDeployPlugin() {
    const HOME = passwdUser.sync(process.getuid()).homedir;

    const DeployPlugin = BasePlugin.extend({
      name: 'qtc',

      defaultConfig: {
        privateKey: `${HOME}/.ssh/id_rsa`,
        requestOptions: {}
      },

      requiredConfig: [
        'apiKey',
        'apiHostname',
        'gitUrl'
      ],

      didUpload(context) {
        let notifier = new BuildNotifier({
          plugin: this,
          context: context
        });

        return notifier.notify();
      }
    });

    return new DeployPlugin();
  }
};
