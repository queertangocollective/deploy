/* jshint node: true */
'use strict';

const CoreObject = require('core-object');
const RSVP       = require('rsvp');
const fs         = require('fs');
const crypto     = require('crypto');
const execSync   = require('child_process').execSync;
const request    = require('request');

module.exports = class extends CoreObject {

  init(options) {
    this._plugin = options.plugin;
    this.context = options.context;
  }

  readConfig(key) {
    return this._plugin.readConfig(key);
  }

  log(text) {
    return this._plugin.log(text);
  }

  gitSha() {
    return execSync('git rev-parse HEAD').toString().trim();
  }

  notify() {
    let index = this.getIndexContent();
    let signature = this.sign(index);

    let data = {
      api_key: this.readConfig('api_key'),
      git_sha: this.gitSha(),
      git_url: this.readConfig('git_url'),
      signature: signature,
      html: index
    };

    // notify the backend
    return new RSVP.Promise((resolve, reject) => {
      let endpoint = `https://${this.readConfig('api_hostname')}/builds`;

      let requestOptions = Object.assign({
        method: 'POST',
        uri: endpoint,
        form: data
      }, this.readConfig('requestOptions'));

      this.log('Notifying ' + endpoint + '...');

      request(requestOptions, function(error, response, body) {
        if (error) {
          this.log('Unable to reach endpoint ' + endpoint + ': ' + error.message, { color: 'red' });
          this.log(body, { color: 'red' });
          reject(error.message);
        } else {
          let code = response.statusCode;

          if (code.toString().charAt(0) === '4') {
            return reject('Rejected with code ' + code + '\n' + body);
          }

          this.log('Successfully deployed to front end builds server', { color: 'green' });
          resolve(body);
        }
      });
    });
  }

  sign(index) {
    let keyFile = this.readConfig('privateKey');

    return crypto
      .createSign('RSA-SHA256')
      .update(index)
      .sign(fs.readFileSync(keyFile), 'base64');
  }

  getIndexContent() {
    let dist = this.context.distDir;
    return fs.readFileSync(`${dist}/index.html`).toString();
  }
}
