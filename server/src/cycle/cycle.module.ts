import { Module } from '@nestjs/common';
import { CycleService } from './cycle.service';
import { CycleController } from './cycle.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cycle, CycleSchema } from './entities/cycle.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cycle.name, schema: CycleSchema }]),
  ],
  controllers: [CycleController],
  providers: [CycleService],
})
export class CycleModule {}
