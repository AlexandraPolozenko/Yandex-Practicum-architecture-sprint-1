module.exports = {
    name: "cards",
    filename: "cardsIndex.js",
    exposes: {
        './Card': './src/components/Card',
        './AddPlacePopup': './src/components/AddPlacePopup',
    },
    shared: ["react"]
    };
