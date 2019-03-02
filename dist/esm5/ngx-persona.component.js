/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Assistant with message.
 */
import { Component, Input } from '@angular/core';
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
export { NgxPersona };
if (false) {
    /** @type {?} */
    NgxPersona.prototype.pic;
    /** @type {?} */
    NgxPersona.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBlcnNvbmEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXBlcnNvbmEvIiwic291cmNlcyI6WyJuZ3gtcGVyc29uYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBRWhEO0lBV0k7SUFBZ0IsQ0FBQzs7Z0JBWHBCLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsNkxBQXlDOztpQkFFNUM7Ozs7c0JBSUksS0FBSyxTQUFDLEtBQUs7MEJBQ1gsS0FBSyxTQUFDLFNBQVM7O0lBR3BCLGlCQUFDO0NBQUEsQUFaRCxJQVlDO1NBTlksVUFBVTs7O0lBRW5CLHlCQUFzQjs7SUFDdEIsNkJBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBBc3Npc3RhbnQgd2l0aCBtZXNzYWdlLlxuICovXG5cbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1wZXJzb25hJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25neC1wZXJzb25hLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbmd4LXBlcnNvbmEuY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neFBlcnNvbmEge1xuICAgIFxuICAgIEBJbnB1dCgncGljJykgcGljOiBhbnlcbiAgICBASW5wdXQoJ21lc3NhZ2UnKSBtZXNzYWdlOiBzdHJpbmdcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iXX0=