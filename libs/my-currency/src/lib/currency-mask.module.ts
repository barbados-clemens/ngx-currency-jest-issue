import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskDirective } from './currency-mask.directive';
import {
  CURRENCY_MASK_CONFIG,
  CurrencyMaskConfig,
} from './currency-mask.config';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [CurrencyMaskDirective],
  exports: [CurrencyMaskDirective],
})
export class MyCurrencyModule {
  static forRoot(
    config: CurrencyMaskConfig
  ): ModuleWithProviders<MyCurrencyModule> {
    return {
      ngModule: MyCurrencyModule,
      providers: [
        {
          provide: CURRENCY_MASK_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
