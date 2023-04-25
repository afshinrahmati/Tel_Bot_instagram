import { Injectable, Logger } from '@nestjs/common';
import Tel = require('node-telegram-bot-api');
const TELEGRAM_TOKEN = '6025493105:AAH8CYpkbEfTZ-uBXN3HpGgY_xoRIdFFUKc';
@Injectable()
export class TelegramService {
  private bot: any;
  private logger = new Logger(TelegramService.name);

  constructor() {
    this.bot = new Tel(TELEGRAM_TOKEN, { polling: true });
    this.bot.on('message', this.onReceiveMessage);
  }
  onReceiveMessage = (msg: any) => {
    this.logger.debug(msg);
    this.bot.sendMessage(190985799, 'سلام دلبر');
  };
}
