module.exports = {
    name: "profile",
    filename: "profileIndex.js",
    exposes: {
        './EditAvatarPopup': './src/components/EditAvatarPopup',
        './EditProfilePopup': './src/components/EditProfilePopup',
    },
    shared: ["react", "PopupWithForm", "CurrentUserContext"]
    };
