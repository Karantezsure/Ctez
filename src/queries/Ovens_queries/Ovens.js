const gql = require("graphql-request").gql;

module.exports = queryOvenData = gql`
{
    ovendata {
        id
      }
      tezOven(distinct_on: timestamp, order_by: {timestamp: desc}, limit: 1) {
        id
        totalSupply
        collateralSupply
        timestamp
      }
      ovensLiquidated {
        id
      }
      tvlData(distinct_on: timestamp, order_by: {timestamp: desc}, limit: 1) {
        tvl
        timestamp
      }
}`