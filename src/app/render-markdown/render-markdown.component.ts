import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'app-render-markdown',
  imports: [],
  templateUrl: './render-markdown.component.html',
  styleUrl: './render-markdown.component.scss',
})
export class RenderMarkdownComponent {
  @Input() value = '';

  convert = () => {
    return marked(this.value);
  };
}
