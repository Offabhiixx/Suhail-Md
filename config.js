const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://abhiiprajusha92:abhiiprajusha92@abhii.0j30iy8.mongodb.net/?retryWrites=true&w=majority&appName=abhii"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://abhii_user:pcj38L2MxW6kbHRQdDj5sOyO6NOz0HtC@dpg-coj2i7tjm4es73a1afpg-a.oregon-postgres.render.com/abhii"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "916238969695" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "916238969695,918089228037";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "916238969695";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "916238969695";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_00_04_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3MCxcbiAgICAgICAgODMsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk5LFxuICAgICAgICA5OSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDUzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODIsXG4gICAgICAgIDkwLFxuICAgICAgICA2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzMsXG4gICAgICAgIDExLFxuICAgICAgICA4NyxcbiAgICAgICAgNDgsXG4gICAgICAgIDY2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTczLFxuICAgICAgICA2NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE4LFxuICAgICAgICA0MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDI5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDgxLFxuICAgICAgICA4OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDc5LFxuICAgICAgICAxOCxcbiAgICAgICAgMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDcG9qWHh2SjREcGZGMFJsUGRhTzh4ZXRMRW5WVkZDbmJ6UFJmWWtlUklNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJWODIzN3pvdVM3Q1psS1UweEJNMVZBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg3OWRiMDA5LWE1YjQtNDI0Ny05NjdmLWMwMTgxNGM4OGI4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTUsXG4gICAgICAxNDcsXG4gICAgICAxMTksXG4gICAgICAyMDUsXG4gICAgICAyOSxcbiAgICAgIDI1MixcbiAgICAgIDEwNyxcbiAgICAgIDI0MSxcbiAgICAgIDMyLFxuICAgICAgODQsXG4gICAgICA4NixcbiAgICAgIDQ4LFxuICAgICAgNTIsXG4gICAgICAyMDIsXG4gICAgICAxNDQsXG4gICAgICAxMjIsXG4gICAgICAxNTYsXG4gICAgICAxMyxcbiAgICAgIDY0LFxuICAgICAgMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgNzYsXG4gICAgICAxODEsXG4gICAgICAxOTAsXG4gICAgICAxOTUsXG4gICAgICAxNzUsXG4gICAgICAyMTEsXG4gICAgICAyNTIsXG4gICAgICAxOTYsXG4gICAgICA2MixcbiAgICAgIDQ5LFxuICAgICAgMTE3LFxuICAgICAgMTU1LFxuICAgICAgMjEzLFxuICAgICAgMTE4LFxuICAgICAgMTQ3LFxuICAgICAgMTU3LFxuICAgICAgOTYsXG4gICAgICAzMyxcbiAgICAgIDIwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaUThZNFkyQlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE2MjM4OTY5Njk1OjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0MDE5NjU5ODk0Mzc3OToxOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJhYmhpaX7wn5KXXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTWZBalBFR0VOdll1TEVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIyNkNySkNqYzRpbW5vbEVvaWJ3UTluTnZqdHRGS29DUGd1K3g4TTMwUGpRPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdSeVM5M011dC9NZExPd2piaStBUXZRaVIwemRtcWplYVpTcU9saE5tUzl2YkpudmRwUkQyNVZqd0QrQzVoR0VvVVVSQ3BPay9VSUF2T0lvZC9RUkNBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1IUGhXaWgyQ0ltYmFHOXN4Wk55c21ia25LU0dGbWgvdGphcnBITldwaXQyYlkzS1VxRTBNR3BvR3BKSEdYUm5hai8wenNuVy9tQXRsME5vU1lENGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkxNjIzODk2OTY5NToxOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA1MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE0MzAyMDQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3FZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDcVkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwbVBEaytqSStnZENtNkVYWmNJNTVseHRLMzFQaFcxL2c2S3dUMzlDRVdvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4NDc3OTU3ODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNDMwMjA1MzA5MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "2", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©ᴀʙʜɪɪxxɴ-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀʙʜɪɪxxɴ-ᴍᴅ 』```", //*『ғᴏʟʟᴏᴡ ɪɢ • ᴀʙʜɪɪxxɴ』*\n instagram.com/abhiixxn"),
 
  author : process.env.PACK_AUTHER|| "ᴀʙʜɪɪxxɴ;
      » [song name] «
 0:00 ─〇───── 0:00
     ⇄   ◃◃   ⅠⅠ   ▹▹   ↻
  ",
  packname: process.env.PACK_NAME || "ᴀʙʜɪɪxxɴ👄🍓💦",
  botname : process.env.BOT_NAME  || "ᴀʙʜɪɪxxɴ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x ᴀʙʜɪɪɪ",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "VEKz4WCifN62S7v3Wb7dC5dc",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "57d716d7a1694eb20cb48219c49780cc";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
