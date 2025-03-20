const invModel = require("../models/inventory-model")
const utilities = require("../utilities/")

const invCont = {}

/* ***************************
 *  Build inventory by classification view
 * ************************** */
invCont.buildByClassificationId = async function (req, res, next) {
  const classification_id = req.params.classificationId
  console.log("🔍 Debug: classification_id =", classification_id); // Check ID received
  const data = await invModel.getInventoryByClassificationId(classification_id)
  console.log("🔍 Debug: SQL Query Result =", data); // Check what is returned
  const grid = await utilities.buildClassificationGrid(data)
  let nav = await utilities.getNav()

  //Check if data exists before accessing properties
  if (!data || data.length === 0) {
    console.error("❌ Error: No data found for classification_id", classification_id);
    return res.status(404).send("No vehicles found for this classification.");
  }

  const className = data[0].classification_name
  res.render("./inventory/classification", {
    title: className + " vehicles",
    nav,
    grid,
  })
}

module.exports = invCont
