import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'blog-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() submitLabel!: string;
  @Input() hasCancelButton: boolean = false;
  @Input() initialText: string = '';

  @Output() handleSubmit = new EventEmitter<string>();

  form!: FormGroup;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.form = this._fb.group({
      title: [this.initialText, Validators.required],
    });
  }

  onSubmit(): void {
    this.handleSubmit.emit(this.form.value.title);
    this.form.reset();
  }

}
