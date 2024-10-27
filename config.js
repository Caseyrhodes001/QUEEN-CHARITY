//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "palvinkibet46@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Caseyrhodes001/QUEEN-CHARITY";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakUEfb4o7qVdkwPk83E";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "254112192119";
global.sudo = process.env.SUDO || "254112192119";
global.owner = process.env.OWNER_NUMBER || "254112192119";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VCTDAwb2ZmTTA5ME5lOGkwTWU0eDNmRXhYYUlDNzROMXRXVWlBNHgyUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSDVuUk1RZ0QrS0dSQXJmbkpYQjJkQmlDRkt0SitIYzhnUTZSM3U5dUwwaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSEViNGM2RzNScXkvaStZWXJ6NVg4eTJ5VWloejhYWXZGN3JsUGEwam1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwczBjNkQ3WjZEVHVxZFBSVmNpS0p0VkJtWTFoLzRSRjJJaVg0VkxJSmlBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVFVENzb1BtV0lvZVVTYjJ3TXNUdFNZaHUvNzZhNkgzb3R1S1pxOWhzbVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhxdTJSZVc0SUg2UUtYQWVKbm1pZjJUdjJOT2E1Ym5EL1YxbWRlMTdFRzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUkwZ1c5U2dONldZUVZpaVp1TXJEOXhTTnZNaFRjTk4wL2oxUW9XelJtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmNnL0ZlMGlZdXFtU2RpdXl5Y2w0aHBqcEd6TEx3akdaNEcyQjE5VElIWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhQMGlFM1BFVlNBWVBGZk9nU3I5VmFDVWZIU2k2V2VZaFpRV3lYYVp6ZW14NjV2ZUZ5NURkYUFYUDJEQ24vT2wrMW9mbDlMOE8vK3NZa1o5NGJFekJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAzLCJhZHZTZWNyZXRLZXkiOiJ6M0l1TStBS2NIOHZoUk5jbEE2MWhXK2Q5OW5DNHhBOWN0YUJDYXMzcjJFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4NzE1QjYwNkVDRTY4NUI0RkQ1ODQ3RjQ3NUZFRUYwMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwMDYxNTMwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTIxOTIxMTlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMTYwQ0Y1NTQ5OUU3RDg3RUZBQjE3REYwNjUxNDJBOTQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMDA2MTUzMH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTEyMTkyMTE5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZCNkE2NkY3QTQ3NTU5QjEyOTA5QUQ5RDRCQTU4OUU3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzAwNjE1MzF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjE5MjExOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1Q0M3RjA4QTY3OEE3MzdDRjc0M0UyNjgxNzBFMTE5NyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMwMDYxNTMxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0SERpUFpoNlRFbW5qRkllaGRlbWF3IiwicGhvbmVJZCI6IjhiMGQ4ZjhjLWUyZTgtNDBiYy1iYWI4LTY3ZGNlNGMzZjQ4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMT05pMHh4TklUN3hpK0ZLUzA3alBLclR0ZGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVlSYSsvRnZ3Y2N3TEFJVVR2aTFZYXVhRjhNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktBTkRWSDc2IiwibWUiOnsiaWQiOiIyNTQxMTIxOTIxMTk6NzBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ0FTRVlSSE9ERVMg8J+MnyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUtXcXI4QkVNdkorcmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSGh5ZnNPUUdJVjJNWXJXOVlLREhTUWo1aXBTM0lRZDFhNDRwcEU3QUhCND0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSVVlaWMrZDJFdzJ5SXRKVmJBV01tLzVtamdubmtFWFEwenh1WWV0NFg0Z0xiS2JrTi9Ld09Cc0hOaHFoeFBOb090T21Pbks3aHNOaWJGcFpreCt1Q3c9PSIsImRldmljZVNpZ25hdHVyZSI6ImUycDlFWFFZWWp4VXpiek85WWk5RmVnbWswVk14NnJMbVhkb0J0VEtIbjVjL2tDZ0cvck5UbjFDWDU4ZDVOUHhCTzJHMHNIcFJ6M2dzS1NiY0FSMkFBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyMTkyMTE5OjcwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlI0Y243RGtCaUZkakdLMXZXQ2d4MGtJK1lxVXR5RUhkV3VPS2FST3dCd2UifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzAwNjE1MjgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQkdWIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`𝐐𝐔𝐄𝐄𝐍 𝐂𝐇𝐀𝐑𝐈𝐓𝐘`",
  author: process.env.PACK_AUTHER || "𝐐𝐔𝐄𝐄𝐍 𝐂𝐇𝐀𝐑𝐈𝐓𝐘",
  packname: process.env.PACK_NAME || "𝐂𝐇𝐀𝐑𝐈𝐓𝐘",
  botname: process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐂𝐇𝐀𝐑𝐈𝐓𝐘",
  ownername: process.env.OWNER_NAME || "CASEYRHODES",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "𝐂𝐇𝐀𝐑𝐈𝐓𝐘").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
