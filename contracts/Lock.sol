// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    string public hello = "hello wold";

    function changeHello(string memory name) public {
        hello = name;
    }


    function returnHello() public view returns (string memory) {
        return hello;
    }
}
