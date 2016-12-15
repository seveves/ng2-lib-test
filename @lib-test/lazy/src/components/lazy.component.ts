import { Component } from '@angular/core';

@Component({
    selector: 'lazy-component',
    template: `<h3>Lazy component</h3><p>This is some lazy content</p><shared-component></shared-component>`
})
export class LazyComponent {}