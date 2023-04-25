import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
  selector: 'blog-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  @Input() submitLabel!: string; // required
  @Input() hasCancelButton: boolean = false;
  @Input() initialText: string = '';

  @Output() handleSubmit = new EventEmitter<string>();
  @Output() handleCancel = new EventEmitter<void>();

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

    // Clear input
    this.form.reset();
  }

  public Editor = ClassicEditor;
  public onReady(editor: any) {
    console.log("CKEditor5 Angular Component is ready to use!", editor);
  }
  public onChange({ editor }: ChangeEvent) {
    // @ts-ignore
    const data = editor.getData();
    console.log(data);
  }

}
