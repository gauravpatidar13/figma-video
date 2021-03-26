import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule} from '@angular/core';
import {NbAuthModule,NbDummyAuthStrategy} from '@nebular/auth';
const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];
export const NB_CORE_PROVIDERS = [
  ...NbAuthModule.forRoot({

    strategies: [
      NbDummyAuthStrategy.setup({
        name: 'email',
        delay: 3000,
      }),
    ],
    forms: {
      login: {
        socialLinks: socialLinks,
      },
      register: {
        socialLinks: socialLinks,
      },
    },
  }).providers
]
@NgModule({
    imports: [
      CommonModule,
    ],
    exports: [
      NbAuthModule,
    ],
    declarations: [],
  })
  export class CoreModule {
    static forRoot(): ModuleWithProviders<CoreModule> {
      return {
        ngModule: CoreModule,
        providers: [
          ...NB_CORE_PROVIDERS,
        ],
      };
    }
  }