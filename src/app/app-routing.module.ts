import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { AdminAddLabourerComponent } from "./admin-add-labourer/admin-add-labourer.component";
import { AdminViewLabourersComponent } from "./admin-view-labourers/admin-view-labourers.component";
import { AdminViewEmployersComponent } from "./admin-view-employers/admin-view-employers.component";
import { AdminViewEmployerComponent } from "./admin-view-employer/admin-view-employer.component";
import { AdminAddEmployerComponent } from "./admin-add-employer/admin-add-employer.component";
import { AdminEditEmployerComponent } from "./admin-edit-employer/admin-edit-employer.component";

const routes: Routes = [
  { path: "", component: AdminDashboardComponent },
  { path: "add-labour", component: AdminAddLabourerComponent },
  { path: "add-employer", component: AdminAddEmployerComponent },
  { path: "view-employers", component: AdminViewEmployersComponent },
  { path: "view-employer", component: AdminViewEmployerComponent },
  { path: "edit-employer", component: AdminEditEmployerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
