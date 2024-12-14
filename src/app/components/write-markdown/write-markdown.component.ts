import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { marked } from 'marked';

@Component({
  selector: 'app-write-markdown',
  imports: [FormsModule],
  templateUrl: './write-markdown.component.html',
  styleUrl: './write-markdown.component.scss',
})
export class WriteMarkdownComponent {
  wMd = '';

  convert = (value: string) => {
    return marked(value);
  };
}
