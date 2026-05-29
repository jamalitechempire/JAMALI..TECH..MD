module.exports = {
    command: 'ping',
    function: async (ctx) => {
        const startTime = Date.now();
        
        try {
            await ctx.replyWithPhoto(
                { url: 'https://files.catbox.moe/0e3rok.jpg' },
                {
                    caption: `🏓 *PING!*\n\n🔄 Status: \`Calculating...\`\n⏱️ Latency: \`-- ms\`\n📡 Bot: \`JAMALI MD\`\n\n> 🔥 Powered by JAMALI TECH TZ`,
                    parse_mode: 'Markdown'
                }
            ).then(async (sentMessage) => {
                const endTime = Date.now();
                const latency = endTime - startTime;
                
                await ctx.telegram.editMessageCaption(
                    ctx.chat.id,
                    sentMessage.message_id,
                    null,
                    `🏓 *PONG!* 🏓\n\n🔄 Status: \`Connected\`\n⏱️ Latency: \`${latency} ms\`\n📡 Bot: \`JAMALI MD\`\n📊 Uptime: \`${Math.floor(process.uptime())}s\`\n\n> 🔥 Powered by JAMALI TECH TZ`,
                    { parse_mode: 'Markdown' }
                );
            });
        } catch (error) {
            // Fallback if photo fails
            await ctx.reply(
                `🏓 *PONG!* 🏓\n\n` +
                `🔄 Status: Active\n` +
                `⏱️ Latency: \`${Date.now() - startTime} ms\`\n` +
                `📡 Bot: JAMALI MD\n` +
                `\n> 🔥 Powered by JAMALI TECH TZ`,
                { parse_mode: 'Markdown' }
            );
        }
    }
};
