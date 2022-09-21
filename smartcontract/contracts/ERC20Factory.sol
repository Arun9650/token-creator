//SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;

import "./TokenData.sol";
import "./ContractERC20.sol";

contract ERC20Factory {
//  if a account want to genrate more than one token 
// to keeps tacks of the token make mappping;

    mapping(address => ERC20Token[]) private addressToToken;

    event Created(string _name, string _symbol, address _tokenAddress);


    function create(string memory name_, string memory symbol_ , bool isBurnable_ , bool isMintable_, uint256 totalSuppy_)
    external returns (bool)
    {
    ContractERC20  erc20 = new ContractERC20(name_, symbol_, isBurnable_, isMintable_, totalSuppy_);
    address _tokenAddress = address(erc20);

    address sender = msg.sender;
    ERC20Token[] storage tokens = addressToToken[sender];
    tokens.push(ERC20Token(name_, symbol_, isBurnable_, isMintable_, _tokenAddress));
    addressToToken[sender] = tokens;

    emit Created(name_, symbol_, _tokenAddress);
    return true;
    }


    function getAllTokens() public view returns(ERC20Token[] memory){
        address sender = msg.sender;
        ERC20Token[] memory tokens = addressToToken[sender];
        return tokens;
    }

}
