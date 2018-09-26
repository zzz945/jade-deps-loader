const jade = require('jade');
const loaderUtils = require('loader-utils');

module.exports = function jadeDependencies(content) {
    if (this.cacheable) {
        this.cacheable();
    }

    const options = { filename: this.resourcePath };
    const query = loaderUtils.getOptions(this);
    const vueOptions = this.options.__vueOptions__ && this.options.__vueOptions__.template;
    Object.assign(options, query, vueOptions);

    const deps = jade.compileClientWithDependenciesTracked(content, options).dependencies;
    const len = deps.length;
    if (len) {
        for (let i = 0; i < len; i++) {
            this.addDependency(deps[i]);
        }
    }
    return content;
};
