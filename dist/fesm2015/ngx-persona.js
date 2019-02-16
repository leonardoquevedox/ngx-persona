import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPersona {
    constructor() { }
}
NgxPersona.decorators = [
    { type: Component, args: [{
                selector: 'ngx-persona',
                template: "<article overlay-content >\n    <section message [innerHTML]=\"message\">\n    </section>\n    <img persona [src]=\"pic.src\" [width]=\"pic.width\" [height]=\"pic.height\" />\n</article>",
                styles: [""]
            }] }
];
NgxPersona.ctorParameters = () => [];
NgxPersona.propDecorators = {
    pic: [{ type: Input, args: ['pic',] }],
    message: [{ type: Input, args: ['message',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPersonaModule {
}
NgxPersonaModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NgxPersona],
                exports: [NgxPersona]
            },] }
];

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