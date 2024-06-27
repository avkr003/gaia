#!/usr/bin/env bash

make install

rm -rf "$HOME/.gaia"

gaiad keys add test
gaiad init test --chain-id elys-1
sed -i -e 's/stake/uelys/g' "$HOME/.gaia/config/genesis.json"
sed -i -e 's/"voting_period": "172800s"/"voting_period": "60s"/g' "$HOME/.gaia/config/genesis.json"
sed -i -e 's/^minimum-gas-prices = ""/minimum-gas-prices = "0.0001uelys"/' "$HOME/.gaia/config/app.toml"
sed -i -e '/# Enable defines if the API server should be enabled./,/enable = false/s/enable = false/enable = true/' "$HOME/.gaia/config/app.toml"
gaiad genesis add-genesis-account test 1000000000000000uelys,1000000000000000uusd
gaiad genesis gentx test 100000000uelys --chain-id elys-1
gaiad genesis collect-gentxs
rm -rf "$HOME/.gaia/config/genesis.json-e"
gaiad start
