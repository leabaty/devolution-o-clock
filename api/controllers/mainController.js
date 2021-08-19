

const mainController = {
homePage : (req, res) => {
    res.json({"Project": "Dévolution",
    "version":"0.1",
    "Product Owner" : "Léa-B",
    "Lead-Dev Front" : "Mickael-B",
    "Git Master" : "Jonathan-D ",
    "Lead-Dev Back" : "Badara-S"})
}
};

module.exports=mainController
