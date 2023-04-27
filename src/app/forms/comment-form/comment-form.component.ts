import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'blog-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() submitLabel!: string; // required
  @Input() hasCancelButton: boolean = false;
  @Input() initialText: string = '';
  @Input() username: string = '';

  @ViewChild("textarea") set textareaRef(ref: ElementRef) {
    if (!!ref) {
      ref.nativeElement.focus();
    }
  }

  @Output() handleSubmit = new EventEmitter<string>();
  @Output() handleCancel = new EventEmitter<void>();

  form!: FormGroup;
  currentNumberCharacters: number = 0;
  maxCharacter: number = 256;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this._fb.group({
      title: [this.initialText, Validators.required],
    });
  }

  onSubmit(): void {
    this.handleSubmit.emit(this.form.value.title.trim());

    // Clear input
    this.form.reset();
  }

  calculateNumberCharacters(e: Event) {
    const textareaValue = e.target as HTMLTextAreaElement;
    this.currentNumberCharacters = textareaValue.textLength;

    if (this.currentNumberCharacters === this.maxCharacter) {

    }
  }
}
