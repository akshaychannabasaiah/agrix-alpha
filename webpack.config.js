var constants = {
     'webpack.constants.GoogleMapsKey' : process.env.GMAP_KEY
};
module.exports = {
    plugins: [new webpack.DefinePlugin(constants)],    
};