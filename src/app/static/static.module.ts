import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';
import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { HttpClient } from '@angular/common/http';

//ngx-markdown setup (following https://github.com/jfcere/ngx-markdown)
import { MarkdownModule, MarkedOptions, MarkedRenderer } from 'ngx-markdown';
export function markedOptions(): MarkedOptions {
  const renderer = new MarkedRenderer();
  renderer.blockquote = (text: string) => {
    return '<blockquote class="blockquote"><p>' + text + '</p></blockquote>';
  };
  return {
    renderer: renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  };
}

@NgModule({
  imports: [
    SharedModule,
    StaticRoutingModule,

    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptions
      }
    })
  ],
  declarations: [AboutComponent, HomeComponent, Home2Component]
})
export class StaticModule {}
