//KALO MAU NGERENAME PAKE CREDIT GUA YTIM PIATU
require("./Databases/module.js")

//========== Setting Owner ==========//
global.no = "6285117112274"
global.owner = "bagashz"
global.bot = "Black Angel"
global.v = "3.0"
global.welcome = false
global.autoread = false
global.anticall = false
// true = nyala | false = mati

//========= Setting Url Foto =========//
global.image = "https://files.catbox.moe/eysdej.jpg"

global.msg = {
"error": "Maaf Adanya Sistem Error Pada Fitur Ini!!",
"done": "Berhasil🕊", 
"wait": "Wait To Proses🕊", 
"owner": "`You Now Owner`", 
"developer": "`You Now Development`"
}
global.own = "NatzxXZyy"
global.log = "⇝"
global.ch = "https://whatsapp.com/channel/0029VawBYrPEquiJrHqmG73M"
global.bot = "Black Angel"
global.ver = "3.0"
global.wa = "https://wa.me/6285117112274"
global.logo = "https://files.catbox.moe/4lwch7.png"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})