var crel = require('crel');

module.exports = function(Slide, opts) {
  Slide.prototype.npm = function(pkgName) {
    this.el.appendChild(crel('code', pkgName));

    return this;
  };
};
