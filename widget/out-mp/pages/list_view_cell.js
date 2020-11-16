const mp = require('miniprogram-render');
const createPage = require('../base.js');
const config = require('../../config');

function init(window, document) {
	require('./page.js')(window, document);
}

const pageObject = {
    onLoad(query) {
        // TODO
    },
    onReady() {
        // TODO
    },
    onShow() {
        // TODO
    },
    onHide() {
        // TODO
    }
};

Page(createPage(mp, config, init, pageObject));