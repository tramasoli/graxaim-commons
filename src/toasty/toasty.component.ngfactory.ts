/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */


import * as import0 from './toasty.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from './toast.component.ngfactory';
import * as import3 from './toast.component';
import * as import4 from '@angular/common';
import * as import5 from './toasty.component';
import * as import6 from './toast-config.service';
import * as import7 from './toasty.service';
const styles_ToastyComponent:any[] = [import0.styles];
export const RenderType_ToastyComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_ToastyComponent,
  data: {}
}
);
function View_ToastyComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'gx-toast',([] as any[]),(null as any),[[
        (null as any),
        'closeToast'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('closeToast' === en)) {
        const pd_0:any = ((<any>co.closeToast(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },import2.View_ToastComponent_0,import2.RenderType_ToastComponent)),
      import1.ɵdid(24576,(null as any),0,import3.ToastComponent,([] as any[]),{toast: [
        0,
        'toast'
      ]
    },{closeToastEvent: 'closeToast'})
  ]
  ,(ck,v) => {
    const currVal_0:any = v.context.$implicit;
    ck(v,1,0,currVal_0);
  },(null as any));
}
export function View_ToastyComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵted((null as any),['       \n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),6,'div',[[
        'id',
        'toasty'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    import1.ɵdid(139264,(null as any),0,import4.NgClass,[
      import1.IterableDiffers,
      import1.KeyValueDiffers,
      import1.ElementRef,
      import1.Renderer
    ]
      ,{ngClass: [
        0,
        'ngClass'
      ]
    },(null as any)),
    import1.ɵpad(1),
    (l()(),import1.ɵted((null as any),['\n        '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_ToastyComponent_1)),
    import1.ɵdid(401408,(null as any),0,import4.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    (l()(),import1.ɵted((null as any),['\n    ']))
  ]
  ,(ck,v) => {
    var co:import5.ToastyComponent = v.component;
    const currVal_0:any = ck(v,3,0,co.position);
    ck(v,2,0,currVal_0);
    const currVal_1:any = co.toasts;
    ck(v,6,0,currVal_1);
  },(null as any));
}
function View_ToastyComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'gx-toasty',([] as any[]),(null as any),(null as any),(null as any),View_ToastyComponent_0,RenderType_ToastyComponent)),
    import1.ɵdid(57344,(null as any),0,import5.ToastyComponent,[
      import6.ToastyConfig,
      import7.ToastyService
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const ToastyComponentNgFactory:import1.ComponentFactory<import5.ToastyComponent> = import1.ɵccf('gx-toasty',import5.ToastyComponent,View_ToastyComponent_Host_0,{position: 'position'},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovZGV2L3Rlc3RlL2dyYXhhaW0tY29tbW9ucy9zcmMvdG9hc3R5L3RvYXN0eS5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovZGV2L3Rlc3RlL2dyYXhhaW0tY29tbW9ucy9zcmMvdG9hc3R5L3RvYXN0eS5jb21wb25lbnQudHMiLCJuZzovLy9DOi9kZXYvdGVzdGUvZ3JheGFpbS1jb21tb25zL3NyYy90b2FzdHkvdG9hc3R5LmNvbXBvbmVudC50cy5Ub2FzdHlDb21wb25lbnQuaHRtbCIsIm5nOi8vL0M6L2Rldi90ZXN0ZS9ncmF4YWltLWNvbW1vbnMvc3JjL3RvYXN0eS90b2FzdHkuY29tcG9uZW50LnRzLlRvYXN0eUNvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIiAgICAgICBcbiAgICA8ZGl2IGlkPVwidG9hc3R5XCIgW25nQ2xhc3NdPVwiW3Bvc2l0aW9uXVwiPlxuICAgICAgICA8Z3gtdG9hc3QgKm5nRm9yPVwibGV0IHRvYXN0IG9mIHRvYXN0c1wiIFt0b2FzdF09XCJ0b2FzdFwiIChjbG9zZVRvYXN0KT1cImNsb3NlVG9hc3QodG9hc3QpXCI+PC9neC10b2FzdD5cbiAgICA8L2Rpdj4iLCI8Z3gtdG9hc3R5PjwvZ3gtdG9hc3R5PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUNFUTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUF1RDtRQUFBO1FBQUE7TUFBQTtNQUF2RDtJQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7OztJQUF1QztJQUF2QyxTQUF1QyxTQUF2Qzs7Ozs7SUFGUjtNQUNJO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFpQjtJQUF1QjtJQUNwQztnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFtRzs7OztJQUR0RjtJQUFqQixTQUFpQixTQUFqQjtJQUNjO0lBQVYsU0FBVSxTQUFWOzs7OztJQ0ZSO2dCQUFBOzs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
