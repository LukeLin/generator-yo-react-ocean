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
        let {appName} = this.props;

        appName = appName.replace(/^\w/, function(a){ return a.toUpperCase() });

        this.fs.copyTpl(
            this.templatePath('actions.js'),
            this.destinationPath(`./common/pages/${ appName }/actions.js`),
            {appName}
        );
        this.fs.copyTpl(
            this.templatePath('reducers.js'),
            this.destinationPath(`./common/pages/${ appName }/reducers.js`),
            {appName}
        );

        this.fs.copyTpl(
            this.templatePath('clientInitialize.js'),
            this.destinationPath(`./client/js/pages/${ appName }/render${ appName }.js`),
            {appName}
        );

        this.fs.copyTpl(
            this.templatePath('Page.js'),
            this.destinationPath(`./common/pages/${ appName }/Page.js`),
            {appName}
        );

        this.fs.copyTpl(
            this.templatePath('serverRoute.js'),
            this.destinationPath(`./server/controllers/${ appName }Controller.js`),
            {appName}
        );
    },

    install: function () {
        // this.installDependencies();
    }
});
