import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { UserDocument } from 'src/user/entities/user.entity';
import { CreateCycleDto } from './dto/create-cycle.dto';
import { Cycle } from './entities/cycle.entity';

@Injectable()
export class CycleService {
  constructor(
    @InjectModel(Cycle.name) private cycleModel: Model<UserDocument>,
  ) {}

  async create(userId: string, dto: CreateCycleDto) {
    const cycle = await this.cycleModel.create({
      amount: dto.amount,
      user: userId,
    });
    return await cycle.populate('user');
  }

  findAll() {
    return `This action returns all cycle`;
  }

  async findAllByUser(id: string) {
    if (mongoose.Types.ObjectId.isValid(id)) {
      const cycles = await this.cycleModel.find({ user: id });
      return cycles;
    } else throw new NotFoundException();
  }
}
