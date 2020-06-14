import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { LayoutModule } from "@angular/cdk/layout";
import { EmpDashComponent } from "./emp-dash/emp-dash.component";
import { GovtDashComponent } from "./govt-dash/govt-dash.component";
import { AdminAddEmployerComponent } from "./admin-add-employer/admin-add-employer.component";
import { AdminAddLabourerComponent } from "./admin-add-labourer/admin-add-labourer.component";
import { AdminViewLabourersComponent } from "./admin-view-labourers/admin-view-labourers.component";
import { AdminViewEmployersComponent } from "./admin-view-employers/admin-view-employers.component";
import { AdminViewEmployerComponent } from './admin-view-employer/admin-view-employer.component';
import { AdminEditEmployerComponent } from './admin-edit-employer/admin-edit-employer.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { FooterComponent } from './footer/footer.component';
import { AddContractComponent } from './add-contract/add-contract.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    EmpDashComponent,
    GovtDashComponent,
    AdminAddEmployerComponent,
    AdminAddLabourerComponent,
    AdminViewLabourersComponent,
    AdminViewEmployersComponent,
    AdminViewEmployerComponent,
    AdminEditEmployerComponent,
    AdminHeaderComponent,
    FooterComponent,
    AddContractComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
