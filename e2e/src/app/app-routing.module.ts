import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminAddLabourerComponent } from "./admin-add-labourer/admin-add-labourer.component";
import { AdminViewLabourersComponent } from "./admin-view-labourers/admin-view-labourers.component";
import { AdminViewEmployersComponent } from "./admin-view-employers/admin-view-employers.component";
import { AdminViewEmployerComponent } from "./admin-view-employer/admin-view-employer.component";
import { AdminAddEmployerComponent } from "./admin-add-employer/admin-add-employer.component";
import { AdminEditEmployerComponent } from "./admin-edit-employer/admin-edit-employer.component";
import { DummyComponent } from "./dummy/dummy.component";
import { EmpDashComponent } from "./emp-dash/emp-dash.component";
import { GovtDashComponent } from "./govt-dash/govt-dash.component";
import { AddContractComponent } from "./add-contract/add-contract.component";
import { GovAddEmployerComponent } from "./gov-add-employer/gov-add-employer.component";
import { GovAddLabourComponent } from "./gov-add-labour/gov-add-labour.component";
import { GovViewEmployersComponent } from "./gov-view-employers/gov-view-employers.component";
import { GovViewLabourersComponent } from "./gov-view-labourers/gov-view-labourers.component";
import { GovViewContractsComponent } from "./gov-view-contracts/gov-view-contracts.component";
import { EmpAddConComponent } from "./emp-add-con/emp-add-con.component";
import { GovtViewContractComponent } from './govt-view-contract/govt-view-contract.component';

const routes: Routes = [
  { path: "", redirectTo: "/dummy", pathMatch: "full" },
  { path: "admin", redirectTo: "/dummy/admin", pathMatch: "full" },
  { path: "emp", redirectTo: "/dummy/emp", pathMatch: "full" },
  { path: "gov", redirectTo: "/dummy/gov", pathMatch: "full" },
  { path: "dummy", component: DummyComponent },
  { path: "dummy/admin", component: AdminDashboardComponent },
  { path: "dummy/emp", component: EmpDashComponent },
  { path: "dummy/emp/add-contract", component: EmpAddConComponent },
  { path: "dummy/gov", component: GovtDashComponent },
  { path: "dummy/admin/add-labour", component: AdminAddLabourerComponent },
  { path: "dummy/admin/add-employer", component: AdminAddEmployerComponent },
  { path: "dummy/gov/add-labour", component: GovAddLabourComponent },
  { path: "dummy/gov/add-employer", component: GovAddEmployerComponent },
  {
    path: "dummy/admin/view-employers",
    component: AdminViewEmployersComponent,
  },
  {
    path: "dummy/gov/view-employers",
    component: GovViewEmployersComponent,
  },
  {
    path: "dummy/admin/view-lbrs",
    component: AdminViewLabourersComponent,
  },
  {
    path: "dummy/gov/view-lbrs",
    component: GovViewLabourersComponent,
  },
  {
    path: "dummy/gov/view-cons",
    component: GovViewContractsComponent,
  },
  { path: "view-employer", component: AdminViewEmployerComponent },
  { path: "edit-employer", component: AdminEditEmployerComponent },
  { path: "view-contract", component: GovtViewContractComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
