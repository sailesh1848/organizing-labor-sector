import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { ModuleWithProviders } from "@angular/core";
import {
  MAT_LABEL_GLOBAL_OPTIONS,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
} from "@angular/material/core";
import { MatIconRegistry } from "@angular/material/icon";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatRippleModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { DomSanitizer } from "@angular/platform-browser";

const MaterialComponents = [
  MatButtonModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatStepperModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatNativeDateModule,
];
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
})
export class MaterialModule {
  constructor(
    public matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    this.matIconRegistry.addSvgIcon(
      "Add",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Add.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "Employer",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/Employers.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "labourer",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/labourer.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "govt",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/GOVT Users.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "reports",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/Reports.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "notify",
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "../assets/Notification.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      "edit",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/edit.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "approve",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/approve.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "reject",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/reject.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "pending",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/pending.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "addmore",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/addmore.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "save",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/save.svg")
    );

    this.matIconRegistry.addSvgIcon(
      "view",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/view.svg")
    );
  }
}
