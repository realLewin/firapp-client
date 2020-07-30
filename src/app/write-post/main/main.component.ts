import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/core/models/post';
import { ProcessPostService } from 'src/app/core/services/process-post.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  postData: Post = { title: '', content: '' };
  postForm: FormGroup;
  @ViewChild('file') currentFile: ElementRef;
  imageUrl: string[] = [];
  uploadImageUrl: string = '';
  // sampleImageUrl: string = 'https://i.ytimg.com/vi/bbIRfQ6K87M/maxresdefault.jpg'
  // sampleImage: string = `url(${this.sampleImageUrl})`;
  divStyle: object = {};

  constructor(
    private fb: FormBuilder,
    private _processPost: ProcessPostService,
    private sanitizer: DomSanitizer
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
    console.log(this._processPost.postPost(this.postData));
  }

  processForm() {
    this.postData.title = this.postForm.get('title').value;
    this.postData.content = this.postForm.get('content').value;
  }

  // Display the image when user upload it
  updateImageDisplay() {
    const input: HTMLInputElement = this.currentFile.nativeElement;
    const curFiles = input.files;
    if (curFiles.length === 0) {
      console.log('no file chosed');
    } else {
      for (let i = 0; i < curFiles.length; i++) {
        this.imageUrl.push(URL.createObjectURL(curFiles[i]));
        console.log(this.imageUrl);
      }
    }
  }

  // Sanitize the image url;
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  changeImage() {
    const input: HTMLInputElement = this.currentFile.nativeElement;
    const curFiles = input.files;
    if (curFiles.length === 0) {
      console.log('no file chosed');
    } else {
      this.uploadImageUrl = URL.createObjectURL(curFiles[0]);
    }

    this.divStyle = {
      'background-image': `url(${this.uploadImageUrl})`,
    };
  }

  // The firebase storage simple example to upload image;
  // uploadFile(event) {
  //   const file = event.target.files[0];
  //   const filePath = 'name-your-file-path-here';
  //   const ref = this.storage.ref(filePath);
  //   const task = ref.put(file);
  // }
}
