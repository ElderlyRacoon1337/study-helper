import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async create(dto: CreateUserDto) {
    const existingUser = await this.userModel.findOne({ email: dto.email });
    if (existingUser) {
      throw new ForbiddenException('User whith this email allready exists');
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(dto.password, salt);
    const user = await this.userModel.create({
      fullName: dto.fullName,
      email: dto.email,
      passwordHash: hash,
    });

    // @ts-ignore
    const { passwordHash, ...userData } = user._doc;

    return {
      ...userData,
      access_token: this.jwtService.sign({ id: userData._id }),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email });
    if (!user) {
      throw new ForbiddenException('Email or password is incorrect');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);
    if (isPasswordCorrect) {
      const { passwordHash, ...result } = user;
      return result;
    }
  }

  async login(user: UserDocument) {
    // @ts-ignore
    const userId = user._doc._id;
    // @ts-ignore
    const { passwordHash, ...userData } = user._doc;

    return {
      ...userData,
      access_token: this.jwtService.sign({ id: userId }),
    };
  }

  async findOne(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }

  async getMe(userId: string) {
    const user = await this.userModel.findById(userId);

    return user;
  }
}
