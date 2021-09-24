import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { NzIconModule } from 'ng-zorro-antd/icon';

import { NZ_I18N, fa_IR } from 'ng-zorro-antd/i18n';

@NgModule({
    exports: [
        NzLayoutModule,
        NzTableModule,
        NzModalModule,
        NzButtonModule,
        NzNotificationModule,
        NzToolTipModule,
        NzIconModule
    ],
    providers: [{ provide: NZ_I18N, useValue: fa_IR }],
})
export class AppNgZorroAntdModule {

}
