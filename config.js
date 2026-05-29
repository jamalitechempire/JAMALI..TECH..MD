const config = require('./config');
const fs = require('fs');
const dotenv = require('dotenv');

if (fs.existsSync('.env')) {
    dotenv.config({ path: '.env' });
}

module.exports = {
    // ===========================================================
    // 1. BASIC CONFIGURATION (Session & Database)
    // ===========================================================
    SESSION_ID: process.env.SESSION_ID || "JAMALI-MD-V3", 
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb+srv://kxshrii:i7sgjXF6SO2cTJwU@kelumxz.zggub8h.mongodb.net/jamali_md_db',
    
    // ===========================================================
    // 2. BOT INFORMATION
    // ===========================================================
    PREFIX: process.env.PREFIX || '.',
    OWNER_NUMBER: process.env.OWNER_NUMBER || '255784062158',
    BOT_NAME: "JAMALI MD",
    BOT_FOOTER: '> 🔥 Powered by JAMALI TECH TZ',
    
    // Work mode: public, private, group, inbox
    WORK_TYPE: process.env.WORK_TYPE || "public", 
    
    // ===========================================================
    // 3. AUTOMATIC FEATURES (STATUS)
    // ===========================================================
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || 'true',
    AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || 'true',
    AUTO_LIKE_EMOJI: ['🔥', '❤️', '👍', '😎', '💫', '👑', '⭐', '🎉', '🤩'], 
    
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'false',
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || '🖥️',
    
    // ===========================================================
    // 4. CHAT & PRESENCE FEATURES
    // ===========================================================
    READ_MESSAGE: process.env.READ_MESSAGE || 'false',
    AUTO_TYPING: process.env.AUTO_TYPING || 'false',
    AUTO_RECORDING: process.env.AUTO_RECORDING || 'false',
    VIEWONCE_DETECT: process.env.VIEWONCE_DETECT || 'true',
    
    // ===========================================================
    // 5. GROUP MANAGEMENT
    // ===========================================================
    WELCOME_ENABLE: process.env.WELCOME_ENABLE || 'true',
    GOODBYE_ENABLE: process.env.GOODBYE_ENABLE || 'true',
    WELCOME_MSG: process.env.WELCOME_MSG || 'true',
    GOODBYE_MSG: process.env.GOODBYE_MSG || 'true', 
    GROUP_EVENTS: process.env.GROUP_EVENTS || 'false',
    WELCOME_IMAGE: process.env.WELCOME_IMAGE || null, 
    GOODBYE_IMAGE: process.env.GOODBYE_IMAGE || null,
    
    LINK_WARN_LIMIT: '3',
    LINK_ACTION: 'mute',
    LINK_WHITELIST: 'whatsapp.com,chat.whatsapp.com,youtube.com,youtu.be,instagram.com,facebook.com,tiktok.com',
    ANTI_DELETE: process.env.ANTI_DELETE || 'false',
    ANTI_LINK_MSG: process.env.ANTI_LINK_MSG || '❌ *ANTI-LINK ACTIVATED*\n\n@{sender}, sending links is not allowed in this group!\n\n*Group:* {group}\n*Link Type:* {linkType}\n*Action:* Message Deleted',
    
    GROUP_LINK: process.env.GROUP_LINK || 'https://chat.whatsapp.com/GPdlJ8ip88K39E5Hok7rJh',
    
    // ===========================================================
    // 6. SECURITY & ANTI-CALL
    // ===========================================================
    ANTI_CALL: process.env.ANTI_CALL || 'false',
    REJECT_MSG: process.env.REJECT_MSG || '🔒 NO CALLS ALLOWED 🔒',
    
    // ===========================================================
    // 7. IMAGES & LINKS
    // ===========================================================
    IMAGE_PATH: 'https://files.catbox.moe/0e3rok.jpg',
    CHANNEL_LINK: 'https://whatsapp.com/channel/0029VbC7AgJK5cD71vGIpO3h',
    
    // ===========================================================
    // 8. CHANNEL JID (SINGLE)
    // ===========================================================
    CHANNEL_JID: '120363425061263455@newsletter',
    
    NEWSLETTER_AUTO_FOLLOW: process.env.NEWSLETTER_AUTO_FOLLOW || 'true',
    NEWSLETTER_REACTION_EMOJIS: ['🔥', '❤️', '💫', '👑', '⚡', '🎯', '💀', '🛡️'],
    
    // ===========================================================
    // 9. AUTO-BIO SETTINGS
    // ===========================================================
    AUTO_BIO: process.env.AUTO_BIO || 'true',
    BIO_LIST: [
        "🔐 JAMALI MD BOT - Your ultimate WhatsApp bot",
        "🚀 Powered by JAMALI TECH TZ",
        "💫 Always at your service!",
        "🎯 Fast, Secure & Reliable",
        "🤖 JAMALI MD - Your digital assistant",
        "⚡ Multi-device bot with MongoDB",
        "🔒 Secure & Private Bot",
        "🌟 Version 3.0.0 - New Features!"
    ],
    
    // ===========================================================
    // 10. TELEGRAM (Optional)
    // ===========================================================
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
    TELEGRAM_CHAT_ID: process.env.TELEGRAM_CHAT_ID || '',
    
    // ===========================================================
    // 11. BUTTON & LIST MESSAGE SETTINGS
    // ===========================================================
    BUTTON_FOOTER: process.env.BUTTON_FOOTER || '> 🔥 Powered by JAMALI TECH TZ',
    LIST_TITLE: process.env.LIST_TITLE || 'JAMALI MD BOT MENU',
    LIST_BUTTON_TEXT: process.env.LIST_BUTTON_TEXT || 'SELECT OPTION',
    
    // ===========================================================
    // 12. AUTO-REPLY MESSAGES
    // ===========================================================
    AUTO_REPLY_ENABLE: process.env.AUTO_REPLY_ENABLE || 'true',
    AUTO_REPLIES: {
        'hi': '👋 Hello! How can I help you today?',
        'mambo': '💫 Poa sana! Nikusaidie kuhusu?',
        'hey': '⚡ Hey there! Use .menu for commands',
        'vip': '👑 Hello VIP! How can I assist you?',
        'mkuu': '🔥 Hey mkuu! Nikusaidie kuhusu?',
        'boss': '🎯 Yes boss! How can I help you?',
        'habari': '🌟 Nzuri sana! Habari yako?',
        'hello': '🤖 Hi there! Use .menu for commands',
        'bot': '⚙️ Yes, I am JAMALI MD BOT! How can I assist you?',
        'menu': '📜 Type .menu for all commands!',
        'owner': '👑 Contact owner using .owner',
        'thanks': '✨ You\'re welcome!',
        'thank you': '💫 Anytime! Let me know if you need help'
    }
};
