import { AlertService } from '@app/core/services';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSort, MatTableDataSource } from '@angular/material';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user/user.service';
import { JsonConvert } from 'json2typescript';
import { Constants } from '@app/shared';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit, AfterViewInit {

  options = [
    {value: '0', text: 'Search by Name'},
    {value: '1', text: 'Search by Username'},
    {value: '2', text: 'Search by Email'}
  ]

  submitted = false;
	jsonConvert: JsonConvert;
	users: User[] = [];
	isNotFound = false;
	isShowResult = false;
	maxLengthSearch = Constants.MAX_LENGTH_SEARCH;
	displayedColumns = [ 'name', 'username', 'email', 'company', 'location', 'bio' ];
	dataSource = new MatTableDataSource<User>(this.users);
  dataColumn: { displayedColumns: any[]; columnsConfig: any[] } = {
    displayedColumns: ['name', 'username', 'email', 'company', 'location', 'bio'],
    columnsConfig: [
      {key: 'name', name: 'Name'},
      {key: 'username', name: 'Username'},
      {key: 'email',  name: 'Email'},
      {key: 'company', name: 'Company'},
      {key: 'location', name: 'Location'},
      {key: 'bio', name: 'Bio'}
    ]
  }

  loading: boolean = false
  searchForm: FormGroup
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private alertService: AlertService
    ) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      method: [this.options[0].value],
      keyword: ['', [Validators.required]]
    })
  }

  get formControls(){
    return this.searchForm.controls
  }

  onMethodChanged(value: string){
    this.formControls.method.setValue(value)
  }

  onSubmit() {
		this.submitted = true;
		if (this.searchForm.invalid) {
			this.isShowResult = false;
			return;
		}

		const keyValue = this.formControls.keyword.value;
    const searchMethod = this.formControls.method.value;

		if (keyValue) {
			this.userService.search(searchMethod, this.processSearchInput(keyValue)).subscribe(
				(users) => {
					this.users = users;
					this.dataSource.data = users;
					this.dataSource.sort = this.sort;
					this.isShowResult = true;
					this.isNotFound = this.users.length === 0;
				},
				(error) => {
					this.alertService.error(error);
					this.submitted = false;
					this.isShowResult = false;
				}
			);
		}
	}

	processSearchInput(keyValue: string): string {
		let searchKeyword = keyValue;

		if (searchKeyword.length > this.maxLengthSearch) {
			searchKeyword = searchKeyword.substr(0, this.maxLengthSearch);
			this.formControls.keyword.setValue(searchKeyword);
		}

		searchKeyword = encodeURIComponent(searchKeyword);

		return searchKeyword;
	}

	ngAfterViewInit() {
		this.dataSource.sort = this.sort;
	}
}
