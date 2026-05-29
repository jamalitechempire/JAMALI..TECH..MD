module.exports = {
    command: 'menu',
    function: async (ctx) {
        try {
            const { Markup } = require('telegraf');
            
            const uptime = process.uptime();
            const hours = Math.floor(uptime / 3600);
            const minutes = Math.floor((uptime % 3600) / 60);
            const uptimeStr = `${hours}h ${minutes}m`;
            
            const menuMessage = 
`⚡ *JAMALI MD - PREMIUM BOT MENU* ⚡

┌───< *BOT STATUS* >───
│ ✨ *Uptime:* ${uptimeStr}
│ 🔧 *Version:* 3.0.0
│ 📊 *Performance:* 99.9%
│ 👑 *Owner:* JAMALI TECH TZ
└──────────────────

┌───< *🔰 BASIC COMMANDS* >───
│ /start - *Start the bot*
│ /pair <number> - *Pair WhatsApp*
│ /owner - *Contact owner*
│ /menu - *Show this menu*
│ /ping - *Check latency*
│ /alive - *Bot health*
│ /status - *System status*
└──────────────────

┌───< *🎮 WHATSAPP BOT CMDS* >───
│ .menu - *All bot commands*
│ .stats - *Bot statistics*
│ .restart - *Restart bot*
│ .broadcast - *Broadcast msg*
│ .join <link> - *Join group*
│ .leave - *Leave group*
└──────────────────

┌───< *🛡️ SECURITY* >───
│ .antilink on/off - *Anti-link*
│ .anticall on/off - *Reject calls*
│ .antidelete on/off - *Anti-delete*
│ .warn @user - *Warn member*
│ .kick @user - *Kick member*
└──────────────────

┌───< *🎵 MEDIA TOOLS* >───
│ .play <song> - *Play music*
│ .ytmp3 <url> - *Download audio*
│ .ytmp4 <url> - *Download video*
│ .instagram <url> - *IG download*
│ .facebook <url> - *FB download*
│ .tiktok <url> - *TT download*
└──────────────────

┌───< *🧠 AI FEATURES* >───
│ .ai <question> - *ChatGPT*
│ .gpt <prompt> - *GPT-4*
│ .gemini <query> - *Gemini AI*
│ .dalle <prompt> - *Generate image*
└──────────────────

┌───< *🔗 SUPPORT LINKS* >───
│ 🐙 GitHub: [JAMALI-MD](${config.URLS?.GITHUB || 'https://github.com/Jamali-md/JAMALI-MD'})
│ 📱 WhatsApp: [Channel](${config.URLS?.WHATSAPP_CHANNEL || 'https://whatsapp.com/channel/0029VbC7AgJK5cD71vGIpO3h'})
│ 👥 Support: [Group](${config.URLS?.SUPPORT_GROUP || 'https://chat.whatsapp.com/GPdlJ8ip88K39E5Hok7rJh'})
│ 🤖 Try Bot: [@Jamali_MD_Bot](https://t.me/Jamali_MD_Bot)
└──────────────────

> 🔥 *Powered by JAMALI TECH TZ* 🔥
© 2026 JAMALI MD - All rights reserved.`;
            
            const buttons = Markup.inlineKeyboard([
                [
                    Markup.button.url('📢 Channel', 'https://whatsapp.com/channel/0029VbC7AgJK5cD71vGIpO3h'),
                    Markup.button.url('👥 Group', 'https://chat.whatsapp.com/GPdlJ8ip88K39E5Hok7rJh')
                ],
                [
                    Markup.button.url('⭐ GitHub', 'https://github.com/Jamali-md/JAMALI-MD'),
                    Markup.button.url('🤖 Try Bot', 'https://t.me/Jamali_MD_Bot')
                ],
                [
                    Markup.button.callback('🔧 Pair Device', 'pair_menu'),
                    Markup.button.callback('📊 Bot Status', 'check_status')
                ]
            ]);
            
            await ctx.replyWithPhoto(
                { url: 'https://files.catbox.moe/0e3rok.jpg' },
                {
                    caption: menuMessage,
                    parse_mode: 'Markdown',
                    ...buttons
                }
            );
        } catch (error) {
            // Fallback message if photo fails
            await ctx.reply(
                `⚡ *JAMALI MD - PREMIUM BOT* ⚡\n\n` +
                `*/start* - Start bot\n` +
                `*/pair <number>* - Pair WhatsApp\n` +
                `*/owner* - Contact owner\n` +
                `*/menu* - Show menu\n` +
                `*/ping* - Check latency\n` +
                `*/alive* - Bot health\n\n` +
                `> 🔥 Powered by *JAMALI TECH TZ*`,
                { parse_mode: 'Markdown' }
            );
        }
    }
};
