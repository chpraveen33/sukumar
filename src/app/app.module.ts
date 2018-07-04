import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { AdsComponent } from './ads/ads.component';
import { MessagesComponent } from './messages/messages.component';
import { PaymentsComponent } from './payments/payments.component';
import { SettingsComponent } from './settings/settings.component';
import { SentComponent } from './sent/sent.component';
import { ArchiveComponent } from './archive/archive.component';
import { HistoryComponent } from './history/history.component';
import { EInvoicesComponent } from './e-invoices/e-invoices.component';
import { ReceiptsComponent } from './e-invoices/receipts/receipts.component';
import { Footer1Component } from './footer1/footer1.component';
import { NavbarComponent } from './navbar/navbar.component';


const router : Routes = [{path:'footer',component : FooterComponent},
{path:'myaccount',component :  MyaccountComponent},
{path:'ads',component :  AdsComponent},
{path:'messages',component : MessagesComponent},
{path:'payments',component :  PaymentsComponent},
{path:'settings',component : SettingsComponent},
{path:'sent',component : SentComponent},
{path:'archive',component : ArchiveComponent },
{path:'history',component : HistoryComponent },
{path:'e-invoices',component : EInvoicesComponent },
{path:'footer1',component : Footer1Component}]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MyaccountComponent,
    AdsComponent,
    MessagesComponent,
    PaymentsComponent,
    SettingsComponent,
    SentComponent,
    ArchiveComponent,
    HistoryComponent,
    EInvoicesComponent,
    ReceiptsComponent,
    Footer1Component,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
