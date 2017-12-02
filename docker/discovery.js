var registry = require('./data/registry/registry-0.json');

function discoverService(json, intent) {
    var service = json.services.find(item => item.intentions.find(function(value,index) {
      return (value.predicate == intent.predicate && value.object == intent.object);
    }));
    return service;
}
module.exports = {
    discover: function(intent) {
        var service = discoverService(registry, intent);
        return service;        
    }
}