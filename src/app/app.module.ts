import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './components/home/home.component';
import { SlideHomeComponent } from './components/home/slide-home/slide-home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { ProgrammeHomeComponent } from './components/home/programme-home/programme-home.component';
import { AboutHomeComponent } from './components/home/about-home/about-home.component';
import { DomainHomeComponent } from './components/home/domain-home/domain-home.component';
import { EquipeHomeComponent } from './components/home/equipe-home/equipe-home.component';
import { EventHomeComponent } from './components/home/event-home/event-home.component';
import { LastNewsHomeComponent } from './components/home/last-news-home/last-news-home.component';
import { PatnerHomeComponent } from './components/home/patner-home/patner-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SlideAboutComponent } from './components/about/slide-about/slide-about.component';
import { AboutAboutComponent } from './components/about/about-about/about-about.component';
import { VisionMissionAboutComponent } from './components/about/vision-mission-about/vision-mission-about.component';
import { MixtAboutComponent } from './components/about/mixt-about/mixt-about.component';
import { DomainComponent } from './components/domain/domain.component';
import { ProgrammsComponent } from './components/programms/programms.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { DepartmentHomeComponent } from './components/home/department-home/department-home.component';
import { DepartmentComponent } from './components/department/department.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BlogComponent } from './components/blog/blog.component';
import { BlogSlideComponent } from './components/blog/blog-slide/blog-slide.component';
import { BlogContentComponent } from './components/blog/blog-content/blog-content.component';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { EventsComponent } from './components/events/events.component';
import { EventSlideComponent } from './components/events/event-slide/event-slide.component';
import { EventDetailsComponent } from './components/events/event-details/event-details.component';
import { EventDialogComponent } from './components/events/event-dialog/event-dialog.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SlideHomeComponent,
    AboutComponent,
    HeaderComponent,
    ProgrammeHomeComponent,
    AboutHomeComponent,
    DomainHomeComponent,
    EquipeHomeComponent,
    EventHomeComponent,
    LastNewsHomeComponent,
    PatnerHomeComponent,
    FooterComponent,
    SlideAboutComponent,
    AboutAboutComponent,
    VisionMissionAboutComponent,
    MixtAboutComponent,
    DomainComponent,
    ProgrammsComponent,
    NewsLetterComponent,
    DepartmentHomeComponent,
    DepartmentComponent,
    BlogComponent,
    BlogSlideComponent,
    BlogContentComponent,
    EventsComponent,
    EventSlideComponent,
    EventDetailsComponent,
    EventDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
