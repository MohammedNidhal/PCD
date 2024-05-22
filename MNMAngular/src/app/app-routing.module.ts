import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component';
import{HeaderComponent} from './header/header.component';
import{MedicalDataComponent} from './medical-data/medical-data.component';
import{OrderHistoryComponent} from './order-history/order-history.component';
import{SidenavComponent} from './sidenav/sidenav.component';
import{SettingsComponent} from './settings/settings.component';
import{OurAdviseComponent} from './our-advise/our-advise.component';
import{LoginComponent} from './login/login.component';
import{ProfileComponent} from './profile/profile.component';
import{SignupComponent} from './signup/signup.component';
import{NotificationsComponent} from './notifications/notifications.component';
import{MedicalDataRegistrationComponent} from './medical-data-registration/medical-data-registration.component';
const routes: Routes = [
  {path: 'Dashboard', component:DashboardComponent},
  {path: 'Header', component:HeaderComponent},
  {path: 'MedicalData', component:MedicalDataComponent},
  {path: 'OrderHistory', component:OrderHistoryComponent},
  {path: 'Sidenav', component:SidenavComponent},
  {path: 'Signup', component:SignupComponent},
  {path: 'Settings', component:SettingsComponent},
  {path: 'OurAdvise', component:OurAdviseComponent},
  {path: 'login', component:LoginComponent},
  {path: 'Profile', component:ProfileComponent},
  {path: 'notifications', component:NotificationsComponent},
  {path: 'MedicalDataRegistration', component:MedicalDataRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
