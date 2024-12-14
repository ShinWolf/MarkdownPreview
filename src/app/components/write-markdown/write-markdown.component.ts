import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';
import { RenderMarkdownComponent } from '../../render-markdown/render-markdown.component';

@Component({
  selector: 'app-write-markdown',
  imports: [FormsModule, RenderMarkdownComponent],
  templateUrl: './write-markdown.component.html',
  styleUrl: './write-markdown.component.scss',
})
export class WriteMarkdownComponent {
  wMd = '';

  convert = (value: string) => {
    return marked(value);
  };
}
