import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Web3Service } from '../../util/web3.service';

declare let require: any;
const election_artifact = require('../../../../build/contracts/Conference.json');

@Component({
  selector: 'app-project-create',
  templateUrl: './project-create.component.html',
  styleUrls: ['./project-create.component.css']
})
export class ProjectCreateComponent implements OnInit {

  formGroup: FormGroup;
  pogodba: any;
  racun;

  constructor(private formBuilder: FormBuilder, private web3Service: Web3Service) {
    this.formGroup = this.formBuilder.group({
      'Title': [null, Validators.required],
      'Reviewer': [null, Validators.required],
      'Technology': [null, Validators.required],
      'Reward': [null, Validators.required],
      'Deadline': [null, Validators.required],
      'Description': [null, Validators.required],
    });
    this.racun = "";
  }

  ngOnInit() {
    this.web3Service.artifactsToContract(election_artifact)
      .then((AbstrakcijaPogodbe) => {
        console.log(AbstrakcijaPogodbe);
        this.pogodba = AbstrakcijaPogodbe;

        this.web3Service.accountsObservable.subscribe((accounts) => {
          console.log(accounts);
          this.racun = accounts[0];
        }, (err) => {
          console.log(err);
        }, () => {
          console.log("done");
        });
        
      });

    
    
  }

  async createWork(){
    try {
      console.log("deploy");
      const deployedPogodba = await this.pogodba.deployed();

      console.log("create");
      const transaction = await deployedPogodba.createConference.sendTransaction("lala", "neki", {from: this.racun})
    } catch (error) {
      console.log("napaka");
      console.log(error);
    }
  }

  test() {
    console.log(this.formGroup.value)
    this.createWork();
  }

}

