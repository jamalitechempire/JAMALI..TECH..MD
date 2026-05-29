module.exports = {
    command: 'owner',
    function: async (ctx) {
        try {
            const { Markup } = require('telegraf');
            
            const ownerInfo = 
`👑 *JAMALI TECH TZ - OWNER INFO* 👑

┌───< *📋 PERSONAL DETAILS* >───
│ 📛 *Name:* JAMALI TECH TZ
│ 📞 *Phone:* +255 784 062 158
│ 🌍 *Country:* Tanzania
│ 👑 *Role:* Founder & Developer
└────────────────────────

┌───< *🔗 OFFICIAL LINKS* >───
│ 🐙 *GitHub:* [JAMALI-MD](https://github.com/Jamali-md/JAMALI-MD)
│ 📱 *WhatsApp:* [Channel](https://whatsapp.com/channel/0029VbC7AgJK5cD71vGIpO3h)
│ 👥 *Support:* [Group](https://chat.whatsapp.com/GPdlJ8ip88K39E5Hok7rJh)
│ 🤖 *Bot:* [@Jamali_MD_Bot](https://t.me/Jamali_MD_Bot)
└────────────────────────

┌───< *💡 SUPPORT & INFO* >───
│ ✅ Bug reports? Contact owner.
│ ✅ Feature requests? Open an issue.
│ ✅ Partnership? DM on WhatsApp.
│ ✅ Payment & premium? Ask owner.
└────────────────────────

> 🔥 *Powered by JAMALI TECH TZ* 🔥
© 2026 JAMALI MD - All rights reserved.`;
            
            const buttons = Markup.inlineKeyboard([
                [
                    Markup.button.url('📱 WhatsApp', 'https://wa.me/255784062158'),
                    Markup.button.url('📢 Channel', 'https://whatsapp.com/channel/0029VbC7AgJK5cD71vGIpO3h')
                ],
                [
                    Markup.button.url('👥 Group', 'https://chat.whatsapp.com/GPdlJ8ip88K39E5Hok7rJh'),
                    Markup.button.url('⭐ GitHub', 'https://github.com/Jamali-md/JAMALI-MD')
                ],
                [
                    Markup.button.callback('🔧 Bot Menu', 'main_menu'),
                    Markup.button.callback('📊 Status', 'check_status')
                ]
            ]);
            
            await ctx.replyWithPhoto(
                { url: 'https://files.catbox.moe/0e3rok.jpg' },
                {
                    caption: ownerInfo,
                    parse_mode: 'Markdown',
                    ...buttons
                }
            );
        } catch (error) {
            // Fallback simple message
            await ctx.reply(
                `👑 *JAMALI TECH TZ* 👑\n\n` +
                `📛 *Name:* JAMALI TECH TZ\n` +
                `📞 *Phone:* +255 784 062 158\n` +
                `🌍 *Country:* Tanzania\n\n` +
                `📱 *WhatsApp:* wa.me/255784062158\n` +
                `📢 *Channel:* https://whatsapp.com/channel/0029VbC7AgJK5cD71vGIpO3h\n\n` +
                `> 🔥 Powered by JAMALI TECH TZ`,
                { parse_mode: 'Markdown' }
            );
        }
    }
};
