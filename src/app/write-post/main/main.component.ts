import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/core/models/post';
import { ProcessPostService } from 'src/app/core/services/process-post.service';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewInit {
  postData: Post = { title: '', content: '', imagePath: '' };
  postForm: FormGroup;
  @ViewChild('file') currentFile: ElementRef;
  input: HTMLInputElement;
  curFiles: FileList;
  imageUrl: string[] = [];
  uploadImageUrl: string = '';
  // sampleImageUrl: string = 'https://i.ytimg.com/vi/bbIRfQ6K87M/maxresdefault.jpg'
  // sampleImage: string = `url(${this.sampleImageUrl})`;
  divStyle: object = {};

  constructor(
    private fb: FormBuilder,
    private _processPost: ProcessPostService,
    private sanitizer: DomSanitizer,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.postForm = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngAfterViewInit(): void {
    this.input = this.currentFile.nativeElement;
  }

  // Subnit the form
  onSubmit() {}

  // Updata image when user upload;
  changeImage() {
    this.curFiles = this.input.files;
    if (this.curFiles.length === 0) {
      console.log('no file chosed');
    } else {
      this.uploadImageUrl = URL.createObjectURL(this.curFiles[0]);
    }

    this.divStyle = {
      'background-image': `url(${this.uploadImageUrl})`,
    };
  }

  // Upload all the thing to the server and firebase;
  async upload() {
    this.processForm();

    this.curFiles = this.input.files;
    const file = this.curFiles[0];
    this.postData.imagePath = 'images/' + file.name;

    console.log(this.postData);

    const httpPost: Observable<string> = this._processPost.postPost(
      this.postData
    );
    httpPost.subscribe((m) => {
      this.uploadImage().then((m) => {
        if (m) {
          this.onUploadComplete();
        } else {
          console.log('error');
        }
      });
    });
  }

  // ------ The worry method;
  // Upload the post title and content;
  // uploadPost(): Promise<boolean> {
  //   const httpPost: Observable<string> = this._processPost.postPost(
  //     this.postData
  //   );
  //   let result: string = '';
  //   let promise: Promise<boolean>;
  //   httpPost.subscribe((m) => {
  //     if (m === 'suc') {
  //       promise = new Promise((resolve, reject) => {
  //         resolve(true);
  //       });
  //     } else {
  //       promise = new Promise((resolve, reject) => {
  //         resolve(false);
  //       });
  //     }
  //   });
  //   return promise;
  // }

  // Upload the post image to firebase;
  async uploadImage(): Promise<boolean> {
    this.curFiles = this.input.files;
    const file = this.curFiles[0];
    const filePath = 'images/' + file.name;
    const storageRef = this.storage.ref(filePath);
    const task = storageRef.put(file);
    let result: boolean = false;
    await task.then((m) => (result = true)).catch((m) => (result = false));
    return result;
  }

  // Get the form data
  processForm() {
    this.postData.title = this.postForm.get('title').value;
    this.postData.content = this.postForm.get('content').value;
  }

  onUploadComplete() {
    console.log('upload complete!');
  }
}

// The firebase storage simple example to upload image;
// uploadFile(event) {
//   const file = event.target.files[0];
//   const filePath = 'name-your-file-path-here';
//   const ref = this.storage.ref(filePath);
//   const task = ref.put(file);
// }

// Display the image when user upload it
// updateImageDisplay() {
//   const input: HTMLInputElement = this.currentFile.nativeElement;
//   const curFiles = input.files;
//   if (curFiles.length === 0) {
//     console.log('no file chosed');
//   } else {
//     for (let i = 0; i < curFiles.length; i++) {
//       this.imageUrl.push(URL.createObjectURL(curFiles[i]));
//       console.log(this.imageUrl);
//     }
//   }
// }

// Sanitize the image url;
// public getSantizeUrl(url: string) {
//   return this.sanitizer.bypassSecurityTrustUrl(url);
// }
