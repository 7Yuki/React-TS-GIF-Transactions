//SPDX-License-Identifier: Unlicensed
pragma solidity ^0.8.0;

contract Transactions {
    uint256 transactionCount;

    struct TransactionStruct {
        address from;
        address to;
        uint256 amount;
    }
    struct TransferStruct {
        TransactionStruct transaction;
        string message;
        uint256 timestamp;
        string keyword;
    }

    event Transfer(TransferStruct transferObject);

    TransferStruct[] transactions;

    function pushToBlockchain(address payable receiver, uint256 amount, string memory message, string memory keyword) public {
        transactionCount += 1;
        TransferStruct memory transfer = TransferStruct({
            transaction: TransactionStruct({
                from: msg.sender,
                to: receiver,
                amount: amount
            }),
            message: message,
            timestamp: block.timestamp,
            keyword: keyword
        });
        transactions.push(transfer);
        emit Transfer(transfer);
    }

    function getAllTransactions()
        public
        view
        returns (TransferStruct[] memory)
    {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
