import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PanierComponent } from './panier/panier.component';
import { SnackbarComponent } from './contact/contact.component';
import { ProduitService } from './services/produit.service';

import { BoutiqueComponent } from './boutique/boutique.component';
import { AuthComponent } from './auth/auth.component';
import { NewUserComponent } from './new-user/new-user.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { DetailsProduitComponent } from './boutique/details-produit/details-produit.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatBadgeModule} from '@angular/material/badge';

import { ContactService } from './services/contact.service';
import { PanierService } from './services/panier.service';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');




const appRoutes : Routes = [
  {path: 'index', component : MainComponent
  },
  {path: 'panier', component : PanierComponent
  },
  {path: 'produits', component : BoutiqueComponent
  },
  {path: 'produits/:id', component : DetailsProduitComponent
  },
  {path: 'contact', component : ContactComponent
  },
  {path: 'auth', component : AuthComponent
  },
  {path: '404', component : FourOFourComponent
  },
  {path: '', component : MainComponent
  },
  {path: '**', redirectTo : "404"
  },

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PanierComponent,
    BoutiqueComponent,
    DetailsProduitComponent,
    AuthComponent,
    NewUserComponent,
    FourOFourComponent,
    ContactComponent,
    SnackbarComponent,
    FooterComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration:"enabled"}),

    MatFormFieldModule,
    MatSelectModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatCardModule,
    MatChipsModule,
    MatSnackBarModule,
    MatBadgeModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [
    ProduitService,
    ContactService,
    PanierService,
    {
      provide: LOCALE_ID,
      useValue: 'fr' // pour changer le "." en "," 
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
