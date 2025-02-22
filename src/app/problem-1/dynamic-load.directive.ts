import { ComponentFactoryResolver, Directive, ViewContainerRef } from '@angular/core';
import { DynamicLoadComponent } from './dynamic-load/dynamic-load.component';

@Directive({
  selector: '[appDynamicLoad]',
  standalone: true
})
export class DynamicLoadDirective {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  loadComponent() {
    this.viewContainerRef.clear();

    const componentRef = this.componentFactoryResolver.resolveComponentFactory(DynamicLoadComponent);

    this.viewContainerRef.createComponent(componentRef);
  }

}
