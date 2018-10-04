pragma solidity ^0.4.6;

contract Conference {  // can be killed, so the owner gets sent the money in the end

	address public organizer;
	address public contractor;
	mapping (address => uint) public registrantsPaid;
	uint public numRegistrants;
	uint public quota;
	string public name;
	string public description;
	uint public reward;
	

	event Deposit(address _from, uint _amount); // so you can log the event
	event Refund(address _to, uint _amount); // so you can log the event

	constructor()public {

	}

	function createConference(string _name, string _description) public payable {
		organizer = msg.sender;		
		quota = 1;
		numRegistrants = 0;
		name = _name;
		description = _description;
		reward = msg.value;
	}

	function applyToJob() public payable{
	    if (msg.sender == organizer) { return; }
		if (numRegistrants >= quota) { 
			throw; // throw ensures funds will be returned
		}
		registrantsPaid[msg.sender] = msg.value;
		numRegistrants++;
		Deposit(msg.sender, msg.value);
		contractor = msg.sender;
	}

// extention: Spreminjanje stevila izvajalcev na projektu
	function changeQuota(uint newquota) public {  
	                                              
		if (msg.sender != organizer) { return; }
		quota = newquota;
	}
	
	// se prozi ko je narocnik zadovoljen s koncnim izdelkom
	function successfulProject() public {  
		if (msg.sender != organizer) { return; }
		selfdestruct(contractor);
	}
	

	function resignFromJob(address recipient, uint amount) public  {
		if (msg.sender == organizer) { return; }
		if (registrantsPaid[recipient] == amount) { 
			address myAddress = this;
			if (myAddress.balance >= amount) { 
				(recipient.send(amount));
				Refund(recipient, amount);
				registrantsPaid[recipient] = 0;
				numRegistrants--;
			}
		}
		return;
	}

	function destroy() public{
		if (msg.sender == organizer) { // without this funds could be locked in the contract forever!
			selfdestruct(organizer);
		}
	}
}