import { Component } from '@angular/core';

@Component({
    selector: 'sub-lazy-component',
    template: `<h3>Sub Lazy component</h3><p>This is some sub lazy content</p><shared-component></shared-component>`
})
export class SubLazyComponent {}