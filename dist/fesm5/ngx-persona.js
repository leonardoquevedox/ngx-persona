import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPersona = /** @class */ (function () {
    function NgxPersona() {
    }
    NgxPersona.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-persona',
                    template: "<article overlay-content>\n  <img persona [src]=\"pic.src\" [width]=\"pic.width\" [height]=\"pic.height\" />\n  <section message [innerHTML]=\"message\"></section>\n</article>\n",
                    styles: [""]
                }] }
    ];
    NgxPersona.ctorParameters = function () { return []; };
    NgxPersona.propDecorators = {
        pic: [{ type: Input, args: ['pic',] }],
        message: [{ type: Input, args: ['message',] }]
    };
    return NgxPersona;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxPersonaModule = /** @class */ (function () {
    function NgxPersonaModule() {
    }
    NgxPersonaModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [NgxPersona],
                    exports: [NgxPersona]
                },] }
    ];
    return NgxPersonaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxPersonaModule, NgxPersona as ɵa };

//# sourceMappingURL=ngx-persona.js.map