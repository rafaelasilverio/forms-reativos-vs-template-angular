import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideRouter } from '@angular/router';

import { FormTemplateComponent } from './app/form-template/form-template.component';
import { FormReativoComponent } from './app/form-reativo/form-reativo.component';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(FormsModule, ReactiveFormsModule),
    provideRouter([
      { path: 'template', component: FormTemplateComponent },
      { path: 'reativo', component: FormReativoComponent },
    ]),
  ],
});
