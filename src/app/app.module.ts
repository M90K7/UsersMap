import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppNgZorroAntdModule } from "./ng-zorro-antd.module";
import { DynamicModule } from "ng-dynamic-component";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import * as cmp from "components";

@NgModule({
  declarations: [
    AppComponent,
    cmp.HeaderComponent,
    cmp.FooterComponent,
    cmp.TableViewComponent,
    cmp.MapViewComponent,
    cmp.UsersComponent,
    cmp.UsersOperationComponent,
    cmp.UserMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // Nz Modules
    AppNgZorroAntdModule,
    DynamicModule,
    LeafletModule,
    // App Modules
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
