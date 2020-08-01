import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/core/models/post';
import { AllPost } from 'src/app/core/data/all-post';
import { GetUserMetadataService } from 'src/app/core/services/get-user-metadata.service';
import { Info } from 'src/app/core/models/info';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  allPost: Post[] = [];
  imageUrl: string[] = [];
  userEmail: string = '';
  userPhotoUrl: string = '';
  userMetadata: Info[] = [];
  userPhotoStyle: Object = {};
  userName: string = '';
  userBio: string = '';

  constructor(private _getMetadata: GetUserMetadataService) {
    this.allPost = AllPost;
    this.allPost.forEach((post) => {
      this.imageUrl.push(post.imagePath);
    });
  }

  ngOnInit(): void {
    var $metadata = this._getMetadata.getMetadata();
    $metadata.then(
      (user) => {
        this.userEmail = user.email;
        this.userPhotoUrl = user.photoURL;
        // this.userPhotoStyle = { src: user.photoURL };
        const result = this._getMetadata.sendGetReques(this.userEmail);
        result.subscribe(
          (m) => {
            const data: any = m[0];
            this.userMetadata.push({
              name: 'firstName',
              value: data.first_name,
            });
            this.userMetadata.push({ name: 'lastName', value: data.last_name });
            this.userMetadata.push({ name: 'gender', value: data.user_gender });
            this.userMetadata.push({ name: 'birth', value: data.user_birth });
            this.userMetadata.push({ name: 'bio', value: data.user_bio });
            this.userName =
              this.userMetadata.find((e) => e.name === 'firstName').value +
              this.userMetadata.find((e) => e.name === 'lastName').value;
            this.userBio = this.userMetadata.find(
              (e) => e.name === 'bio'
            ).value;
            console.log(this.userMetadata);
          },
          (err) => console.log(err)
        );
      },
      (reason) => console.log(reason)
    );
  }
}
