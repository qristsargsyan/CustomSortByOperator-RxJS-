import { Component } from '@angular/core';
import { sortByPropertyName } from './customOperators/sortBy';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sorting table';

  data: any = [];
  constructor(private http: DataService) {}

  ngOnInit(): void {
    this.http.getData().subscribe((data) => {
      this.data = data;
    });
  }
  sortBy(propertyName: string) {
    this.http
      .getData()
      .pipe(sortByPropertyName(propertyName))
      .subscribe((data) => {
        this.data = data;
      });
  }
  defaultTable(){
    this.http.getData().pipe().subscribe((data) => {
      this.data = data;
    });
  }
}
