const getIndexPage = (req, res) => {
    res.render("index", {
        link: "index"
    })
}

const getTicketPage = (req, res) => {
    res.render("ticket", {
        link: "ticket"
    })
}

module.exports = {
    getIndexPage,
    getTicketPage
};