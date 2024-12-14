import { Component } from '@angular/core';
import { WriteMarkdownComponent } from './components/write-markdown/write-markdown.component';

@Component({
  selector: 'app-root',
  imports: [WriteMarkdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'PreviewMarkdown';
}
