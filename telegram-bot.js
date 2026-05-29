// telegram-bot.js
const { Telegraf, Markup, Scenes, session } = require('telegraf');
const LocalSession = require('telegraf-session-local');
const config = require('./telegram-config');
const { activeSockets, getConnectionStatus } = require('./index'); // Adjust path as needed

class TelegramBot {
    constructor() {
        this.bot = new Telegraf(config.TELEGRAM_BOT_TOKEN);
        this.setupMiddlewares();
        this.setupCommands();
        this.setupHandlers();
    }

    setupMiddlewares() {
        // Local session storage
        this.bot.use((new LocalSession({ database: 'telegram-sessions.json' })).middleware());
        
        // Error handling middleware
        this.bot.catch((err, ctx) => {
            console.error('Telegram bot error:', err);
            ctx.reply('❌ An error occurred. Please try again later.');
        });
    }

    setupCommands() {
        // Set bot commands
        this.bot.telegram.setMyCommands(config.COMMANDS);
    }

    setupHandlers() {
        // Start command
        this.bot.start((ctx) => {
            const welcomeMessage = `${config.MESSAGES.WELCOME}\n\n🔗 *SUPPORT LINKS:*\n• GitHub: ${config.URLS.GITHUB}\n• Telegram Channel: ${config.URLS.TELEGRAM_CHANNEL}\n• WhatsApp Channel: ${config.URLS.WHATSAPP_CHANNEL}`;
            
            const buttons = Markup.inlineKeyboard([
                [
                    Markup.button.url('📢 Channel', config.URLS.TELEGRAM_CHANNEL),
                    Markup.button.url('👥 Group', config.URLS.TELEGRAM_GROUP)
                ],
                [
                    Markup.button.url('⭐ GitHub', config.URLS.GITHUB),
                    Markup.button.url('📱 WhatsApp', config.URLS.WHATSAPP_CHANNEL)
                ],
                [
                    Markup.button.callback('🔧 Pair Bot', 'pair_menu'),
                    Markup.button.callback('📊 Status', 'check_status')
                ]
            ]);
            
            ctx.replyWithMarkdown(welcomeMessage, buttons);
        });

        // Pair command
        this.bot.command('pair', async (ctx) => {
            const args = ctx.message.text.split(' ');
            
            if (args.length < 2) {
                return ctx.replyWithMarkdown('❌ *Usage:* `/pair <number>`\n*Example:* `/pair 255784062158`');
            }
            
            const number = args[1];
            const sanitizedNumber = number.replace(/[^0-9]/g, '');
            
            if (sanitizedNumber.length < 9) {
                return ctx.replyWithMarkdown('❌ Invalid phone number. Please enter a valid number with country code.');
            }
            
            await this.handlePairing(ctx, sanitizedNumber);
        });

        // Owner command
        this.bot.command('owner', (ctx) => {
            ctx.replyWithMarkdown(config.MESSAGES.OWNER);
        });

        // Menu command
        this.bot.command('menu', (ctx) => {
            ctx.replyWithMarkdown(config.MESSAGES.HELP);
        });

        // Status command
        this.bot.command('status', async (ctx) => {
            await this.handleStatus(ctx);
        });

        // Help command
        this.bot.command('help', (ctx) => {
            ctx.replyWithMarkdown(config.MESSAGES.HELP);
        });

        // Callback query handlers
        this.bot.action('pair_menu', (ctx) => {
            ctx.replyWithMarkdown('📱 *PAIR YOUR BOT*\n\nUse the command:\n`/pair <your-number>`\n\n*Example:* `/pair 255784062158`');
        });

        this.bot.action('check_status', async (ctx) => {
            await this.handleStatus(ctx);
        });
    }

    async handlePairing(ctx, number) {
        try {
            // Send initial message
            await ctx.replyWithMarkdown(`⏳ *Pairing in progress...*\n\n📱 Number: +${number}\n🔗 Status: Initiating connection...`);
            
            // Here you would call your startBot function
            // This is where you integrate with your WhatsApp bot pairing system
            // For now, we'll simulate the response
            
            const pairingCode = Math.floor(100000 + Math.random() * 900000);
            
            setTimeout(() => {
                ctx.replyWithMarkdown(`✅ *PAIRING CODE GENERATED!*\n\n📱 Number: +${number}\n🔑 Code: *${pairingCode}*\n\n📋 *How to use:*\n1️⃣ Open WhatsApp on your phone\n2️⃣ Go to Linked Devices\n3️⃣ Add a new device\n4️⃣ Enter the code: *${pairingCode}*\n5️⃣ Wait for connection confirmation\n\n⚠️ *Note:* This code is valid for 20 seconds only!`);
            }, 2000);
            
        } catch (error) {
            console.error('Pairing error:', error);
            ctx.replyWithMarkdown(`❌ *PAIRING ERROR*\n\nError: ${error.message}\n\nPlease try again or contact the owner.`);
        }
    }

    async handleStatus(ctx) {
        try {
            let statusMessage = `📊 *BOT STATUS*\n\n`;
            
            // Get active connections from main bot
            if (global.activeSockets && global.activeSockets.size > 0) {
                const activeCount = global.activeSockets.size;
                statusMessage += `✅ *Active Bots:* ${activeCount}\n\n`;
                
                // Get first few active numbers
                const activeNumbers = Array.from(global.activeSockets.keys()).slice(0, 5);
                activeNumbers.forEach((num, index) => {
                    statusMessage += `${index + 1}. +${num}\n`;
                });
                
                if (activeCount > 5) {
                    statusMessage += `... and ${activeCount - 5} more\n`;
                }
            } else {
                statusMessage += `❌ *No active bots*\n\nNo WhatsApp bots are currently running.`;
            }
            
            statusMessage += `\n\n🤖 *Telegram Bot:* ✅ Active\n🕒 Uptime: Running...\n\n> 🔥 Powered by JAMALI TECH TZ`;
            
            ctx.replyWithMarkdown(statusMessage);
            
        } catch (error) {
            console.error('Status error:', error);
            ctx.replyWithMarkdown('❌ *ERROR*\n\nFailed to fetch bot status. Please try again later.');
        }
    }

    start() {
        this.bot.launch().then(() => {
            console.log('🤖 JAMALI MD Telegram bot started successfully!');
            
            // Enable graceful stop
            process.once('SIGINT', () => this.bot.stop('SIGINT'));
            process.once('SIGTERM', () => this.bot.stop('SIGTERM'));
            
        }).catch(error => {
            console.error('❌ Failed to start Telegram bot:', error);
        });
    }
}

// Export for use in main file
module.exports = TelegramBot;

// Start bot if this file is run directly
if (require.main === module) {
    const telegramBot = new TelegramBot();
    telegramBot.start();
}
