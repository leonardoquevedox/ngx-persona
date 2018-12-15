/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Directive module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NgxPersona } from './ngx-persona.component'

@NgModule({
    imports: [CommonModule],
    declarations: [NgxPersona],
    exports: [NgxPersona]
})
export class NgxPersonaModule { }