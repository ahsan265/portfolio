import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { DropdownComponent } from './LibraryComponents/dropdown/dropdown.component';
import { ProgressBarComponent } from './LibraryComponents/progress-bar/progress-bar.component';
import { ReaderComponent } from './Modals/reader/reader.component';
import { ShareModalsComponent } from './Modals/share-modals/share-modals.component';
import { LoginComponent } from './Admin/login/login.component';
import { RegisterComponent } from './Admin/register/register.component';
import { ForgotPasswordComponent } from './Admin/forgot-password/forgot-password.component';
import { VerificationComponent } from './Admin/verification/verification.component';
import { UpdatePasswordComponent } from './Admin/update-password/update-password.component';
import { ProfileComponent } from './Admin/profile/profile.component';
import { UpdateImageComponent } from './Modals/update-image/update-image.component';
import { UserInformationConsoleComponent } from './Dashboard/user-information-console/user-information-console.component';
import { ChartWrapperComponent } from './Dashboard/chart-wrapper/chart-wrapper.component';
import { VisitorTableComponent } from './Dashboard/visitor-table/visitor-table.component';
import { UserManagerComponent } from './Admin/user-manager/user-manager.component';
import { DeleteUserComponent } from './Modals/delete-user/delete-user.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainComponent } from './pages/main/main.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { AboutComponent } from './pages/about/about.component';
import { TricksComponent } from './pages/tricks/tricks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    SearchBarComponent,
    CardsComponent,
    FooterComponent,
    DropdownComponent,
    ProgressBarComponent,
    ReaderComponent,
    ShareModalsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerificationComponent,
    UpdatePasswordComponent,
    ProfileComponent,
    UpdateImageComponent,
    UserInformationConsoleComponent,
    ChartWrapperComponent,
    VisitorTableComponent,
    UserManagerComponent,
    DeleteUserComponent,
    LoaderComponent,
    PrivacyPolicyComponent,
    MainComponent,
    BlogsComponent,
    AboutComponent,
    TricksComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
