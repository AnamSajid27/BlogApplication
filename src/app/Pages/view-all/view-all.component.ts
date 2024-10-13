import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.scss']
})
export class ViewAllComponent implements OnInit {
  allPost: any;

  constructor(private service :PostServiceService,private snack : MatSnackBar) { }

  ngOnInit(): void {
 
  this.getAllPost();
 
 
  }


  getAllPost(){
    this.service.getAllPost().subscribe(res=>{
      console.log(res);
      this.allPost = res;
    },
    error =>{
      console.log(error.res);
      this.snack.open("Something went wrong", "Close!!");
    });
  }




}
