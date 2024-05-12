import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HeadingComponent } from './components/heading/heading.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PieChartMedalsPerCountryComponent } from './components/pie-chart-medals-per-country/pie-chart-medals-per-country.component';


@NgModule({
  declarations: [AppComponent, NotFoundComponent, DashboardComponent,
    HeadingComponent, SpinnerComponent, PieChartMedalsPerCountryComponent,
  ],
  imports: [BrowserModule, BrowserAnimationsModule, 
    AppRoutingModule, HttpClientModule, NgxChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
