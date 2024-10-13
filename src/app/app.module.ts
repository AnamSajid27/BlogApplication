import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import {MAT_CHIPS_DEFAULT_OPTIONS, MatChipsModule} from '@angular/material/chips';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CreatePostComponent } from './Pages/create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import {COMMA, ENTER, SPACE} from '@angular/cdk/keycodes';
import { ViewAllComponent } from './Pages/view-all/view-all.component';
import { ViewPostComponent } from './Pages/view-post/view-post.component';









@NgModule({


  declarations: [
    AppComponent,
    LandingPageComponent,
    CreatePostComponent,
    ViewAllComponent,
    ViewPostComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatChipsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    MatSnackBarModule,
    MatInputModule,
    
  ],
  providers: [ {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [COMMA, SPACE]
    }
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
