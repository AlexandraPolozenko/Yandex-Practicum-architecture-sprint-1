module.exports = {
    name: "App",
    remotes: {
        "cards": "cards@http://mesto.com/cards/cardsIndex.js",
        "profile": "profile@http://mesto.com/profile/profileIndex.js",
        "auth": "auth@http://mesto.com/auth/authIndex.js",
    },
    shared: ["react", "react-router-dom", "PopupWithForm", "CurrentUserContext"]
    };    
