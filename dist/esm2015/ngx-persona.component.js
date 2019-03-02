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
export class NgxPersona {
    constructor() { }
}
NgxPersona.decorators = [
    { type: Component, args: [{
                selector: 'ngx-persona',
                template: "<article overlay-content>\n  <img persona [src]=\"pic.src\" [width]=\"pic.width\" [height]=\"pic.height\" />\n  <section message [innerHTML]=\"message\"></section>\n</article>\n",
                styles: [""]
            }] }
];
NgxPersona.ctorParameters = () => [];
NgxPersona.propDecorators = {
    pic: [{ type: Input, args: ['pic',] }],
    message: [{ type: Input, args: ['message',] }]
};
if (false) {
    /** @type {?} */
    NgxPersona.prototype.pic;
    /** @type {?} */
    NgxPersona.prototype.message;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXBlcnNvbmEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXBlcnNvbmEvIiwic291cmNlcyI6WyJuZ3gtcGVyc29uYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBUWhELE1BQU07SUFLRixnQkFBZ0IsQ0FBQzs7O1lBWHBCLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsNkxBQXlDOzthQUU1Qzs7OztrQkFJSSxLQUFLLFNBQUMsS0FBSztzQkFDWCxLQUFLLFNBQUMsU0FBUzs7OztJQURoQix5QkFBc0I7O0lBQ3RCLDZCQUFpQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gQXNzaXN0YW50IHdpdGggbWVzc2FnZS5cbiAqL1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtcGVyc29uYScsXG4gICAgdGVtcGxhdGVVcmw6ICduZ3gtcGVyc29uYS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25neC1wZXJzb25hLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hQZXJzb25hIHtcbiAgICBcbiAgICBASW5wdXQoJ3BpYycpIHBpYzogYW55XG4gICAgQElucHV0KCdtZXNzYWdlJykgbWVzc2FnZTogc3RyaW5nXG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIl19