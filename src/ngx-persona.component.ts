/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Assistant with message.
 */

import { Component, Input } from '@angular/core'

@Component({
    selector: 'ngx-persona',
    templateUrl: 'ngx-persona.component.html',
    styleUrls: ['ngx-persona.component.scss']
})

export class NgxPersona {
    
    @Input('pic') pic: any
    @Input('message') message: string

    constructor() { }
}
