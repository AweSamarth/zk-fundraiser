// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18 ;

contract ZkFundraiser{

    error noBalance();

    event CampaignCreated(address _address, uint64 indexed _id, string _title, string _description );

    struct Campaign{
        address campaigner;
        string title;
        string description;
        uint64 id;
        uint256 amountNeeded;
        uint256 amountReceived;
        
    }

    uint64 counter;

    mapping(uint64=>Campaign) campaignGetter;
    mapping(address=> uint64[]) onesCampaigns;
    mapping(address=>uint256) balances;


    function createCampaign(string memory _title, string memory _description, uint128 _ethAmountNeeded) public{


        Campaign memory toBePushed = Campaign({title:_title, description:_description, campaigner:msg.sender, id:++counter, amountReceived:0, amountNeeded:_ethAmountNeeded*10**18});
        campaignGetter[counter] = toBePushed;
        onesCampaigns[msg.sender].push(counter);
        // emit CampaignCreated(msg.sender, counter, _title, _description);


    } 

    function getCampaign(uint64 _id) public view returns(Campaign memory){
        return campaignGetter[_id];


    }

    function getOnesCampaigns(address _address) public view returns(uint64[] memory){
        return onesCampaigns[_address];
        
    }

    function fundCampaign(uint64 _id)public payable {
        campaignGetter[_id].amountReceived+=msg.value;
        balances[msg.sender]+=msg.value;


    }

    function withdrawAll() public {
       if (balances[msg.sender]>0){
           uint256 tempForWithdrawing=balances[msg.sender];
           balances[msg.sender]=0;
           payable(msg.sender).transfer(tempForWithdrawing);

       }

       else{
           revert noBalance();
       }
        
    }

    function getBalance() public view returns(uint256){
        return balances[msg.sender];
    }

    function getCounter() public view returns(uint64){
        return counter;
    }



    fallback() external payable{}
    receive() external payable{}

}