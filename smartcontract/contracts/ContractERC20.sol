
// SPDX-License-Identifier: MIT


pragma solidity  ^0.8.0;


import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract ContractERC20 is ERC20 , Ownable {

    // token properties
    string private _name;
    string private _symbol;
    bool private _isMintable;
    bool private _isBurnable;
    uint private _totalsupply;


    constructor(string memory name_ , string memory symbol_, bool isBurnable_, bool isMintable_, uint initailSupply_  )ERC20(name_, symbol_){
        _name = name_;
        _symbol = symbol_;
        _isBurnable = isBurnable_;
        isMintable_ = isMintable_;
        _totalsupply = initailSupply_;


    address origin = tx.origin;
    ERC20._mint(origin, initailSupply_ * 10**18);
    transferOwnership(origin );


    }



    function mint(address account, uint256 amount) public onlyOwner  {
        require(_isMintable, "token is not Mintable");
        ERC20._mint(account, amount);

    }

    function burn(address account, uint256 amount) public {
        require(_isBurnable, "Token is not Burnable");
        ERC20._burn(account, amount);
    }

    
}





