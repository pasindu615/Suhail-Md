const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,94725029033";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,94725029033";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "94725029033,94725029033";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_01_18_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA2MixcbiAgICAgICAgMjM2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjksXG4gICAgICAgIDUzLFxuICAgICAgICA5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTksXG4gICAgICAgIDU4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExMixcbiAgICAgICAgODcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAzMixcbiAgICAgICAgMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMwLFxuICAgICAgICAzOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjExLFxuICAgICAgICAyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICA2OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDY5LFxuICAgICAgICAzMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxODAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgMjIzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU3LFxuICAgICAgICA0LFxuICAgICAgICAyMixcbiAgICAgICAgMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDc4LFxuICAgICAgICA5MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDU3LFxuICAgICAgICAzOCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTAzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjksXG4gICAgICAgIDg1LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA1MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3MDNBSHZINXJGSjlvZ0tYVVhFQWVhbk9HOXE2OVdvMWNoa2ZRd1p5YkQ0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0Nzg5NDc5NTAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NzU5NjAyRjQ3RERBODEwRTFFMjczMDZDQzk3NTQ2RlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjIyMTU5MzBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTmV5bmpZdE9TTzJfVUdMS1kzWjhWQVwiLFxuICBcInBob25lSWRcIjogXCIzZTgyOTEwMS02YTViLTQ5NDAtOWRiYS1iMjAxM2UzNDlkOWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI2LFxuICAgICAgMTMsXG4gICAgICAxOTMsXG4gICAgICAxNDksXG4gICAgICAxODMsXG4gICAgICA0NSxcbiAgICAgIDEzMixcbiAgICAgIDE3NyxcbiAgICAgIDE5NixcbiAgICAgIDc2LFxuICAgICAgMCxcbiAgICAgIDg3LFxuICAgICAgMjQ2LFxuICAgICAgMTU4LFxuICAgICAgMTQ0LFxuICAgICAgMTEsXG4gICAgICAyNyxcbiAgICAgIDY2LFxuICAgICAgMjEwLFxuICAgICAgNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUsXG4gICAgICAxNTgsXG4gICAgICA1NixcbiAgICAgIDE0OSxcbiAgICAgIDEyMixcbiAgICAgIDI0MSxcbiAgICAgIDE3MyxcbiAgICAgIDIxOCxcbiAgICAgIDIyNSxcbiAgICAgIDExNyxcbiAgICAgIDE5NyxcbiAgICAgIDIxOCxcbiAgICAgIDE5MCxcbiAgICAgIDIyNCxcbiAgICAgIDIwMSxcbiAgICAgIDU5LFxuICAgICAgNDksXG4gICAgICAzNyxcbiAgICAgIDM4LFxuICAgICAgMjAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVHR1dFUkcxXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4OTQ3OTUwMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI4MjgwMzE0NDMyMzIwNTo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0l1czBmWUJFUERibTdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidE04N2lHcmFVd0RPSW5TM3NoWDhsM1g1TXFqeWdvcWNnZGJkVWRGRzduVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvL2Y4T0pQZ1Y1a2tBQ2JZQjdoTW5pa2ZoU3RGQnhYZys1RHNxZUhhWDRmVlBxZXpNTm5xOVFwTU9ISEwwWGM4WCszUVYvd2NKT1NmcjFSb2luSGRBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJNT3RlTWVwYkVabVplZVl5QlliVTN6Ty9PWXVDeEcxYjc4dm5DbXA3T0J0bE44eGVuM2szMWJVM1dlcTdsb3lENlVVSnprb1cxeDZHK2RiU000TXZDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4OTQ3OTUwMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjE1OTIzXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
