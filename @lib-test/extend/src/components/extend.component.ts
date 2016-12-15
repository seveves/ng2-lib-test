import { Component } from '@angular/core';

@Component({
    selector: 'extend-component',
    template: `<h3>Extend component</h3><p>This is extended content</p><shared-component></shared-component>`
})
export class ExtendComponent {}