import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, @Inject('ORDER_SERVICE') private readonly client: ClientProxy) {}

  @EventPattern('order_created')
  async handleMessagePrinted(data: Record<string, unknown>) {
    console.log(data);

    if (parseInt((data.id).toString()) % 2 > 0)
      this.client.emit<any>('order_created_rejected', data);
  }
}
