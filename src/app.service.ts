import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  handleOrderCreated(message: any) {
    console.log(message.text);
  }
}
