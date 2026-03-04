const { melolohome } = require('./helpers/scraper');
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    try { res.status(200).json({ success: true, data: await melolohome() }); } 
    catch (e) { res.status(500).json({ success: false, message: e.message }); }
}
