const { melolodl } = require('./helpers/scraper');
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (!req.query.url) return res.status(400).json({ success: false });
    try { res.status(200).json({ success: true, data: await melolodl(req.query.url) }); } 
    catch (e) { res.status(500).json({ success: false, message: e.message }); }
} 
