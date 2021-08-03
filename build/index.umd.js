(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['just-render'] = {}));
}(this, (function (exports) { 'use strict';

    function render(content, ...datas) {
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
    }

    exports['default'] = render;
    exports.render = render;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
