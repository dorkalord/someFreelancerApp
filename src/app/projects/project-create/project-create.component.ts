import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Web3Service } from '../../util/web3.service';

declare let require: any;
const election_artifact = require('../../../../build/contracts/Election.json');
const Web3 = require('web3');
declare let window: any;

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  //obrazec = new FormControl('');

  formGroup: FormGroup;
  private web3: any;

  constructor(private formBuilder: FormBuilder, private web3Service: Web3Service) {
    this.formGroup = this.formBuilder.group({
      'Title': [null, Validators.required],
      'Reviewer': [null, Validators.required],
      'Technology': [null, Validators.required],
      'Reward': [null, Validators.required],
      'Deadline': [null, Validators.required],
      'Description': [null, Validators.required],
    });

    if (typeof window.web3 !== 'undefined') {
      // Use Mist/MetaMask's provider
      this.web3 = new Web3(window.web3.currentProvider);
    }

  }

  ngOnInit() {
    /*this.web3Service.artifactsToContract(election_artifact)
      .then((MetaCoinAbstraction) => {
        console.log(MetaCoinAbstraction);
    });*/

    this.web3.eth.getAccounts((err, accs)=>{
      console.log("čakam račune1");
      if (err == null){
        console.log("err račune1");
        console.log(accs);
        console.log("err račune2")
      }
      console.log(err)
    })
    
    console.log("čakam račune");
    this.web3Service.accountsObservable.subscribe((accounts) => {
      console.log("accounts");
      console.log(accounts)
    }, (err) => {
      console.log(err);
    }, () => {
      console.log("done");
    });
  }

  test() {
    console.log(this.formGroup.value)
  }

}

