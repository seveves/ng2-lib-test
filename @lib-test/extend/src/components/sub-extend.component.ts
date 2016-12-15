import { Component } from '@angular/core';

@Component({
    selector: 'sub-extend-component',
    template: `<h3>Sub Extend component</h3><p>This is sub extended content</p><shared-component></shared-component>`
})
export class SubExtendComponent {}