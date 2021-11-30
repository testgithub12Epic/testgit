import { Component , OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Tour of Heroes';

  constructor(
    private http: HttpClient,
    private router: Router

  ){

  }
    

  ngOnInit() {

    //this.router.navigate(['dashboard']);
    //this.router.navigate(['heroes']);

    
  }

}
