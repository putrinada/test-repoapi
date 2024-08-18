const newman = require("newman");

newman.run({
    collection: "json-collection/putri.postman_collection.json",
    environment: "json-env/putri-env.postman_environment.json",  
    reporters: ["cli", "htmlextra"] 
}, function (err) {
    if (err) {
        throw err;
    }
    console.log("Collection run complete!");
});