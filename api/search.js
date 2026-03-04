const { melolosearch } = require('./helpers/scraper');

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');

    const { q } = req.query;

    if (!q) {
        return res.status(400).json({ success: false, message: 'Query pencarian kosong' });
    }

    try {
        const data = await melolosearch(q);
        res.status(200).json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
} 
