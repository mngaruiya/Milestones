var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://Martha:aSlinjyK2qPOliKy@cluster.0tyuooy.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://Martha:aSlinjyK2qPOliKy@cluster.0tyuooy.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://Martha:aSlinjyK2qPOliKy@cluster.0tyuooy.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
