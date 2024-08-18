newman.run({
    collection: "json-collection/putri.postman_collection.json",
    environment: "json-env/putri-env.postman_environment.json",
    reporters: ["cli", "htmlextra"]
});
