import { Component, OnInit,inject,ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {has,pull,find} from 'lodash';
import { PostServiceService } from 'src/app/services/post-service.service';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreatePostComponent implements OnInit {
  @ViewChild('tagInput') tagInputRef!: ElementRef ;
  postForm!: FormGroup ;
post: any;
form: any;
tags:String[]= ['explore', 'blog'];


  constructor(private fb :FormBuilder,private router:Router,private snack :MatSnackBar, private service :PostServiceService) { }

  ngOnInit(): void {
    this.postForm = this.fb.group({
      name: ['',Validators.required],
      content: ['', Validators.compose([Validators.required,Validators.maxLength(5000)])],
      image: ['',Validators.required],
      postedBy: ['',Validators.required],
      tag: [undefined],
    }
    )}


    get f() {
      return this.postForm.controls;
   }
      focusTagInput(): void {
    this.tagInputRef.nativeElement.focus();
  }

  remove(tag: any): void {
    if (!!tag) {
      pull(this.tags, tag);
    } else {
      this.tags.splice(-1);
    }
  }
  
  onKeyUp(event: KeyboardEvent): void {
    const inputValue: string = this.postForm.controls['tag'].value;
    if (event.code === 'Backspace' && !inputValue) {
      this.remove(inputValue);
      return;
    } else {
      if (event.code === 'Comma' || event.code === 'Space') {
        this.addTag(inputValue);
        this.postForm.controls['tag'].setValue('');
      }
    }
  }
  addTag(tag: string): void {
    if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
      tag = tag.slice(0, -1);
    }
    if (tag.length > 0 && !find(this.tags, tag)) {
      this.tags.push(tag);
    }
  }    


  createPost(){
    const data = this.postForm.value;
    data.tags= this.tags
    console.log(data);
    localStorage.setItem('userInfo', JSON.stringify(data));
    this.service.createPost(data).subscribe(res =>{
      console.log(res);
       this.snack.open("Post Created Successfully!!","OK");
       this.router.navigateByUrl("/");

    },
    error=>{

      this.snack.open("Something went wrong", "ok");
      console.log(error.response.data)
    })
  }


}

