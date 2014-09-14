var crel = require('crel');
var insertcss = require('insert-css');
var fs = require('fs');

/**
  # shaz-npm

  A [shaz](https://github.com/DamonOehlman/shaz) plugin for calling out npm
  packages in your slides.

  ## Example Usage

  <<< examples/simple.js
**/

module.exports = function(Slide, opts) {
  insertcss((opts || {}).css || fs.readFileSync(__dirname + '/style.css'));

  Slide.prototype.npm = function(pkgName) {
    this.svg(fs.readFileSync(__dirname + '/images/npm-logo.svg'));
    this.bgSize('20%');

    this.el.classList.add('npm');
    this.el.appendChild(
      crel('div', { class: 'npm-package' },
        crel('a', { href: 'https://npmjs.org/' + pkgName },
          crel('code', pkgName)
        )
      )
    );

    return this;
  };
};
