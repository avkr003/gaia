### To Start the chain

* Run `bash ./scripts/setup.sh`
  * This setups then starts the chain
  * It creates 4 accounts all with tokens `10000000000000uelys,1000000000000000uusd,10000000000000uatom,1000000000ubtc,100000000000ueth`
  * The four accounts are:
    * `cosmos1lph8hs7e9hdyzakmynz2d0ahcgjw6fcu7lfqwd` - `glow apart find essence between already earn world stool cost left outdoor army parrot aim powder slice divert museum hotel follow middle swarm sudden`
    * `cosmos1gwcphuw20l7kqwje7l6x0v0f4v6499u0l3azlg` - `fury rail below tortoise question phrase orient interest settle old cover weather number glide begin debate advice adjust horror story calm snap already path`
    * `cosmos1wqy8e93xg706r5nl8ttnkwt08ct8haaz4puad7` - `guide acquire nation inch remain nurse save dash inch season sock general eagle jaguar embark excite good opera neglect book dawn broken face fetch`
    * `cosmos15dhand5cd7tmdrjrfcdfgls8r70dhyf7nzshdh` - `smoke zone amazing dutch speed furnace vote rebel worry figure fire join box arctic wall fly give stock pyramid slam multiply labor goddess oppose`
  * All time based governance parameters is reduced to 172800s

### To Create New Pool [TX]:

`gaiad tx amm create [token1,token2] [swapFees]`

`gaiad tx amm create 10000000ubtc,5000000000uusd 0.003 --chain-id elys-1 --from test --keyring-backend test --gas-prices 0.001uelys
` 

NOTE: Swap fees cannot be less than 0 and more than MaxSwapFee in the parameters of `amm` module

### To Add liquidity to existing pool [TX]:

`gaiad tx amm join [poolId] [token1]`

In this case, token 2 is automatically fetched from user account

`gaiad tx amm join 1 5000000uusd --chain-id elys-1 --from test4 --keyring-backend test --gas-prices 0.001uelys`

or 

`gaiad tx amm join [poolId] [token1,token2]`

In this case, if both tokens are not in required ratio then it follows same as above single token join pool with token which leads to least require amount of other token 

`gaiad tx amm join 1 3000000000uusd,5000000ubtc --chain-id elys-1 --from test4 --keyring-backend test --gas-prices 0.001uelys`


### To Swap [TX]:
`gaiad tx amm swap [poolId] [amount]`

`gaiad tx amm swap 1 1000000ubtc --chain-id elys-1 --from test2 --keyring-backend test --gas-prices 0.001uelys`

### To Exit Pool [TX]:

To withdraw a given amount of lp shares
`gaiad tx amm exit [poolId] [lpShares]`

`gaiad tx amm exit 1 100 --chain-id elys-1 --from test4 --keyring-backend test --gas-prices 0.001uelys`

To withdraw all, add flag:
`gaiad tx amm exit [poolId] [lpShares] --withdrawAll`

`gaiad tx amm exit 1 100 --withdrawAll --chain-id elys-1 --from test4 --keyring-backend test --gas-prices 0.001uelys`

### Query:

#### To query a pool:

`gaiad q amm pool [poolId]`

#### To query all pools:

`gaiad q amm pools`

#### To query account pool shares:

`gaiad q amm poolShares [address]`

`gaiad q amm poolShares cosmos15dhand5cd7tmdrjrfcdfgls8r70dhyf7nzshdh`

#### To query module params:

`gaiad q amm params`

#### To query bank balances:

`gaiad q bank balances [address]`
