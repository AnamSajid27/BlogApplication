import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { take } from 'lodash';
import { CommentService } from 'src/app/services/comment.service';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {

  commentForm! :FormGroup;
comments:any;
  id= this.activated.snapshot.params['id'];
  postData:any;
  constructor(private service:PostServiceService,private commentService:CommentService, private activated: ActivatedRoute,private snack:MatSnackBar , private fb:FormBuilder) { }

  ngOnInit(): void {
    console.log(this.id);
    this.getPostById();
    this.commentForm = this.fb.group({
      postedBy :['',Validators.required],
      content : ['',Validators.required]

    });
   

  }


  publishComment(){
    const postedBy = this.commentForm.get('postedBy')?.value;
    const content = this.commentForm.get('content')?.value;

    this.commentService.createComment(this.id,postedBy,content).subscribe(res=>{
      this.snack.open("comment published Successfully!!" ,"OK");
      this.getComments();
    },
  error=>{

    this.snack.open("something went wrong", "ok")
  });
  }


  getComments(){
    this.commentService.getComments(this.id).subscribe(res=>{
      this.comments=res;
      console.log(res);
    },
      error=>{
        this.snack.open("Something went wrong", "OK");
      });
  }

  getPostById(){
    this.service.getPostById(this.id).pipe().subscribe(res=>{
      this.postData= res;
      console.log(res);
      this.getComments();
    },
    error=>{
      this.snack.open("Something went wrong", "OK");
    });
  }


  likePost(){
    this.service.likePost(this.id).pipe().subscribe(res=>{
      this.snack.open("Post liked Successfully!!" , "OK");
      this.postData = res;
      this.getPostById();
    },
    error=>{
      this.snack.open("Couldn't like post!","Try Again");
    });
  }

}
