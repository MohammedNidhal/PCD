import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms' ;
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { MedicalDataComponent } from './medical-data/medical-data.component';
import { SettingsComponent } from './settings/settings.component';
//Adding modules for side navbar and icons 
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule } from '@angular/material/menu';
import {MatIconModule } from '@angular/material/icon';
import {MatDividerModule } from '@angular/material/divider';
import {MatListModule } from '@angular/material/list';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ProfileComponent } from './profile/profile.component';
import { OurAdviseComponent } from './our-advise/our-advise.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ChartModule } from 'angular-highcharts';
import { DeliveryTrackOrderComponent } from './delivery-track-order/delivery-track-order.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SignupDeliveryComponent } from './signup-delivery/signup-delivery.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    OrderHistoryComponent,
    MedicalDataComponent,
    SettingsComponent,
    ProfileComponent,
    OurAdviseComponent,
    MainFooterComponent,
    ClientListComponent,
    DeliveryTrackOrderComponent,
    NotificationsComponent,
    SignupDeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, //For session control
    BrowserAnimationsModule,// for the dashboard 
    MatSidenavModule,// for the dashboard 
    MatToolbarModule,// for the dashboard 
    MatMenuModule,// for the dashboard 
    MatIconModule,// for the dashboard 
    MatListModule,// for the dashboard 
    MatDividerModule,// for the dashboard 
    ChartModule 
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
