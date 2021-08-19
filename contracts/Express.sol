// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract Express is Ownable {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    address public von;
    address public xvon;
    address public burnTo = address(0);
    // address public burnTo = address("0x000000000000000000000000000000000000dead");

    address public adminAddress;
    address public receiver;

    event Deposit(address, uint256);
    event Withdraw(address, uint256);

    modifier onlyAdmin() {
        require(msg.sender == adminAddress, "admin: wut?");
        _;
    }

    constructor(
        address _VON,
        address _XVON
        // address _burnTo
    ) public {
        von = _VON;
        xvon = _XVON;
        // burnTo = _burnTo;
    }

    function adminEmergencyWithdraw(uint256 _amount) external onlyOwner {
        require(_amount > 0, "Should not be zero");

        IERC20 _XVON = IERC20(xvon);
        uint256 _balance = _XVON.balanceOf(address(this));

        require(_balance > 0, "Nothing to withdraw");
        require(_amount <= _balance, "Exceed balance");

        _XVON.transfer(msg.sender, _amount);
    }

    function deposit(uint256 _amount) external {
        require(_amount > 0, "Should not be zero");

        IERC20 _VON = IERC20(von);

        require(
            _VON.balanceOf(msg.sender) >= _amount,
            "convert: User has insufficient VON Balance"
        );

        _VON.safeTransferFrom(msg.sender, burnTo, _amount);
        
        emit Deposit(msg.sender, _amount);
    }

    function withdraw(address _receiver, uint256 _amount) external onlyAdmin {
        require(_amount > 0, "Should not be zero");

        IERC20 _XVON = IERC20(xvon);

        require(
            _XVON.balanceOf(address(this)) >= _amount,
            "convert: Contract has insufficient XVON amount"
        );

        _XVON.transfer(_receiver, _amount);

        emit Withdraw(_receiver, _amount);
    }

    function setReceiver(address _receiver) external onlyAdmin {
        receiver = _receiver;
    }

    function setAdmin(address _admin) external onlyOwner {
        adminAddress = _admin;
    }


}
