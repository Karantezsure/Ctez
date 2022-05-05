const request = require("graphql-request").request;
const fs = require("fs");
const config = require("../../config/config");
const queryOvenData = require("../queries/Ovens_queries/Ovens")

module.exports = function startOvenDataHandler() {

    request(`${config.GRAPHQL_API}/v1/graphql`, queryOvenData).then(
        async (data) => {
        //   console.log(data.tvlData[0].tvl);
        data = formatData(data);
        // console.log(data);
          fs.writeFileSync(config.Oven_DATA, JSON.stringify(data));
        }
      ).catch((err) => {
        console.log(err);
      });

      function formatData(data){
          return{
              total_ovens:data.ovendata.length,
              created_ovens:data.ovendata.length,
              liquidated_ovens:data.ovensLiquidated.length,
              TVL: data.tvlData[0].tvl,
              total_supply:data.tezOven[0].totalSupply,
              collateral_supply:data.tezOven[0].collateralSupply
          }
          
      }

}