/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from './app/kkw.config'
import { KkwComponent } from './app/kkw.component'

bootstrapApplication(KkwComponent, appConfig)
    .catch((err) => console.error(err))
