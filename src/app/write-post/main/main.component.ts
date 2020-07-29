import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  post: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.post = this.fb.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(
      `The title: ${this.post.get('title').value}, the content: ${
        this.post.get('content').value
      }`
    );
  }
}
