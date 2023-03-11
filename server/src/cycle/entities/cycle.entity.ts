import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type CycleDocument = HydratedDocument<Cycle>;

@Schema({ timestamps: true })
export class Cycle {
  @Prop({ required: true, type: Number })
  amount: number;

  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user: User;
}

export const CycleSchema = SchemaFactory.createForClass(Cycle);
