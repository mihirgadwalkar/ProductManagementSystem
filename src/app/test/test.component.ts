import { Component,OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit,OnDestroy {

  mySubscription:Subscription;
  myPosts:Post[]=[]
  users;

  //inject fakedata service data
  constructor(private fsObj:FakedataService) { }

  ngOnInit(): void {
    this.mySubscription=this.fsObj.getUsers().subscribe(
      userData=>{
        //assign posts
        this.users=userData
      },
      err=>{
        console.log("err in getting users data",err)
      }
    )
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }

}
