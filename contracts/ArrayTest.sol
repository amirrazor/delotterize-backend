// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract ArrayTest {
    address[] public customers;

    function pay() public payable {
        customers.push(msg.sender);
    }

    function getCustomers() public view returns (address[] memory) {
        return customers;
    }
}
