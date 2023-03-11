import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { CycleModule } from './cycle/cycle.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:1488@cluster0.nu6j1es.mongodb.net/study?retryWrites=true&w=majority',
    ),
    UserModule,
    CycleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
