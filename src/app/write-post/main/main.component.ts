import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/core/models/post';
import { ProcessPostService } from 'src/app/core/services/process-post.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  postData: Post = { title: '', content: '' };
  postForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _processPost: ProcessPostService
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    this.processForm();
    console.log(this.postData);
    // console.log(
    //   `The title: ${this.postForm.get('title').value}, the content: ${
    //     this.postForm.get('content').value
    //   }`
    // );
    console.log(this._processPost.postPost(this.postData));
  }

  processForm() {
    this.postData.title = this.postForm.get('title').value;
    this.postData.content = this.postForm.get('content').value;
  }
}
