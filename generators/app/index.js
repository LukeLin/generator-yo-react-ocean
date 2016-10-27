'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the mind-blowing ' + chalk.red('generator-yo-test') + ' generator!'
    ));

    var prompts = [{
        type: 'input',
        name: 'appName',
        message: 'Give your app a name: ',
        default: 'yoAppName'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
        this.templatePath('action.js'),
        this.destinationPath('action.js'),
        {appName: this.props.appName}
    );
  },

  install: function () {
    this.installDependencies();
  }
});
