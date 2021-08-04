(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    module.exports = function render(content, ...datas) {
        if (typeof content === 'object') {
            content = Array.from(content);

            for (let index in content) {
                content[index] = content[index].replace("\r\n", "\n").split("\n");

                for (let line in content[index]) {
                    content[index][line] = content[index][line].trim();
                }

                content[index] = content[index].join('').trim();

                let data = datas.shift();

                if (undefined !== data) content[index] += data;
            }

            content = content.join('');
        }

        const template = document.createElement('template');
        template.innerHTML = content;

        return template.content.cloneNode(true)
    };

})));
