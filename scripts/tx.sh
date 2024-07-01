#!/usr/bin/env bash

gaiad q bank balances cosmos1lph8hs7e9hdyzakmynz2d0ahcgjw6fcu7lfqwd
gaiad q bank balances cosmos1gwcphuw20l7kqwje7l6x0v0f4v6499u0l3azlg
gaiad q bank balances cosmos1wqy8e93xg706r5nl8ttnkwt08ct8haaz4puad7
gaiad q bank balances cosmos15dhand5cd7tmdrjrfcdfgls8r70dhyf7nzshdh

gaiad q amm poolShares cosmos1lph8hs7e9hdyzakmynz2d0ahcgjw6fcu7lfqwd
gaiad q amm poolShares cosmos1gwcphuw20l7kqwje7l6x0v0f4v6499u0l3azlg
gaiad q amm poolShares cosmos1wqy8e93xg706r5nl8ttnkwt08ct8haaz4puad7
gaiad q amm poolShares cosmos15dhand5cd7tmdrjrfcdfgls8r70dhyf7nzshdh

gaiad q amm pool 1
gaiad q amm pool 2

gaiad tx amm create 10000000ubtc,5000000000uusd 0.003 --chain-id elys-1 --from test --keyring-backend test --gas-prices 0.001uelys


gaiad tx amm create 5000000uusd,5000000000ueth 0.003 --chain-id elys-1 --from test --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm create 5000000uelys,5000000000uusd 0.003 --chain-id elys-1 --from test --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm swap 1 1000000ubtc --chain-id elys-1 --from test2 --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm swap 1 3000000ubtc --chain-id elys-1 --from test3 --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm swap 1 3000000uusd --chain-id elys-1 --from test3 --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm exit 1 100 --chain-id elys-1 --from test --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm exit 1 100 --withdrawAll --chain-id elys-1 --from test --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm join 1 5000000uusd,5000000000ueth --chain-id elys-1 --from test2 --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm join 1 5000000uusd --chain-id elys-1 --from test4 --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm join 1 3000000000uusd,5000000ubtc --chain-id elys-1 --from test2 --keyring-backend test --gas-prices 0.001uelys


gaiad tx amm join 1 5000000ubtc --chain-id elys-1 --from test4 --keyring-backend test --gas-prices 0.001uelys


gaiad tx amm exit 1 100 --chain-id elys-1 --from test4 --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm exit 1 100 --withdrawAll --chain-id elys-1 --from test4 --keyring-backend test --gas-prices 0.001uelys

gaiad tx amm join 1 5000000uusd,25000000ubtc --chain-id elys-1 --from test2 --keyring-backend test --gas-prices 0.001uelys
