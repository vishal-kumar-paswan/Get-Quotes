const cheerio = require("cheerio")
const axios = require("axios")

// Fetch quotes using web-scrapping
exports.fetchQuotes = async (req, res) => {

    try {
        // downloading the target web page by performing an HTTP GET request in Axios
        const axiosResponse = await axios.request({
            method: "GET",
            url: "https://quotes.toscrape.com/",
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
            }
        });

        const $ = cheerio.load(axiosResponse.data);

        let quoteArray = [];

        $(".col-md-8>div")
            .each((index, quoteData) => {
                const quote = $(quoteData).find(".text").text();
                const author = $(quoteData).find(".author").text();
                quoteArray.push({ quote: quote, author: author });
            });

        return res.status(200).json(quoteArray);
    } catch (error) {
        return res.status(400).json({ error: "Failed to load data" });
    }
}