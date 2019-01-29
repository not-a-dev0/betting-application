import { NgModule } from '@angular/core';

import { BettingapplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BettingapplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BettingapplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BettingapplicationSharedCommonModule {}
