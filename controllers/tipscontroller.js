
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // ---------------------------------------------------------------------------
  
    // app.get("/api/tips", function (req, res) {
    //   res.json(tipsData);
    // });
  
  
    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    //When a user submits form data:
    //calculate the tip for each person
    // ---------------------------------------------------------------------------
  
    app.post("/api/tips", function (req, res) {
      let newTip = req.body;
      let tipInfo = {
        tip: "",
        splitNum: newTip.splitTip,
        splitAmt: ""
      }
      //calculate tip amount based on dollar amount entered and percent tip
  
      let tipAmt = (newTip.billAmount * (newTip.percentTip / 100));
  
      //split the tip amount then number of ways entered
      let splitTipAmt = tipAmt / tipInfo.splitNum;
  
      //tip amounts should be rounded to 2 decimal places
      tipInfo.tip = tipAmt.toFixed(2);
      tipInfo.splitAmt = splitTipAmt.toFixed(2);
      //return tip info to client side
      res.json(tipInfo);
    });
  }
  
  // ---------------------------------------------------------------------------
  