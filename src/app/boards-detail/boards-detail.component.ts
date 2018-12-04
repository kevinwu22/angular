import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-boards-detail',
  templateUrl: './boards-detail.component.html',
  styleUrls: ['./boards-detail.component.css']
})
export class BoardsDetailComponent implements OnInit {

  board = {};

  constructor(private route: ActivatedRoute, private router: Router, private fs: FirestoreService) { }

  ngOnInit() {
    this.getBoardDetails(this.route.snapshot.params['id']);
  }

  getBoardDetails(id) {
    this.fs.getBoard(id)
      .subscribe(data => {
        console.log(data);
        this.board = data;
      });
  }

  deleteBoard(id) {
    this.fs.deleteBoards(id)
      .subscribe(res => {
          this.router.navigate(['/boards']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}