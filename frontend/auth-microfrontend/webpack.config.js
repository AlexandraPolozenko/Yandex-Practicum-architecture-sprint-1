module.exports = {
    name: "auth",
    filename: "authIndex.js",
    exposes: {
        './Login': './src/components/Login',
        './Register': './src/components/Register',
    },
    shared: ["react", "react-router-dom"]
    };
