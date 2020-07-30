import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProcessPostService } from 'src/app/core/services/process-post.service';
import { Post } from 'src/app/core/models/post';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
import { AllPost } from 'src/app/core/data/all-post';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  allPost: Post[] = [];
  profileUrl: Observable<string | null>;
  @ViewChild('file') currentFile: ElementRef;
  imageUrl: string[] = [];

  constructor(
    private _processPost: ProcessPostService,
    private storage: AngularFireStorage,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.allPost = AllPost; // init the post data;

    const ref = this.storage.ref('images/8hro4MH.jpg');
    this.profileUrl = ref.getDownloadURL();
  }

  // The firebase storage simple example to upload image;
  // uploadFile(event) {
  //   const file = event.target.files[0];
  //   const filePath = 'name-your-file-path-here';
  //   const ref = this.storage.ref(filePath);
  //   const task = ref.put(file);
  // }

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
}

// Fetch the post from server side;
// getAllPost() {
//   const result = this._processPost.getAllPost();
//   result.subscribe((m) => console.log(m));
//   result.subscribe((m) => {
//     this.allPost = m;
//   });
// }

// {
// This part should put in the ngOnInit method;

// this.getAllPost(); // Fetch the post form server;
// Fetch the image from firebase;
// const ref = this.storage.ref('images/8hro4MH.jpg');
// this.profileUrl = ref.getDownloadURL();
// }
