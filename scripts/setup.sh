#!/bin/env bash

go mod tidy

make install

rm -rf "$HOME/.gaia"

echo "glow apart find essence between already earn world stool cost left outdoor army parrot aim powder slice divert museum hotel follow middle swarm sudden" | gaiad keys add test --keyring-backend test --recover
echo "fury rail below tortoise question phrase orient interest settle old cover weather number glide begin debate advice adjust horror story calm snap already path" | gaiad keys add test2 --keyring-backend test --recover
echo "guide acquire nation inch remain nurse save dash inch season sock general eagle jaguar embark excite good opera neglect book dawn broken face fetch" | gaiad keys add test3 --keyring-backend test --recover
echo "smoke zone amazing dutch speed furnace vote rebel worry figure fire join box arctic wall fly give stock pyramid slam multiply labor goddess oppose" | gaiad keys add test4 --keyring-backend test --recover
gaiad init test --chain-id elys-1
sed -i -e 's/stake/uelys/g' "$HOME/.gaia/config/genesis.json"
sed -i -e 's/"voting_period": "172800s"/"voting_period": "60s"/g' "$HOME/.gaia/config/genesis.json"
sed -i -e 's/^minimum-gas-prices = ""/minimum-gas-prices = "0.0001uelys"/' "$HOME/.gaia/config/app.toml"
sed -i -e '/# Enable defines if the API server should be enabled./,/enable = false/s/enable = false/enable = true/' "$HOME/.gaia/config/app.toml"
gaiad genesis add-genesis-account test 10000000000000uelys,1000000000000000uusd,10000000000000uatom,1000000000ubtc,100000000000ueth --keyring-backend test
gaiad genesis add-genesis-account test2 10000000000000uelys,1000000000000000uusd,10000000000000uatom,1000000000ubtc,100000000000ueth --keyring-backend test
gaiad genesis add-genesis-account test3 10000000000000uelys,1000000000000000uusd,10000000000000uatom,1000000000ubtc,100000000000ueth --keyring-backend test
gaiad genesis add-genesis-account test4 10000000000000uelys,1000000000000000uusd,10000000000000uatom,1000000000ubtc,100000000000ueth --keyring-backend test
gaiad genesis gentx test 100000000uelys --chain-id elys-1 --keyring-backend test
gaiad genesis collect-gentxs
rm -rf "$HOME/.gaia/config/genesis.json-e"
gaiad start
