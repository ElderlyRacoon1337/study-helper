import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  UseGuards,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CycleService } from './cycle.service';
import { CreateCycleDto } from './dto/create-cycle.dto';

@Controller('cycles')
export class CycleController {
  constructor(private readonly cycleService: CycleService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Request() req, @Body() dto: CreateCycleDto) {
    return this.cycleService.create(req.user.id, dto);
  }

  @Get()
  findAll() {
    return this.cycleService.findAll();
  }

  @Get('byuser/:id')
  findAllByUser(@Param() params: any) {
    return this.cycleService.findAllByUser(params.id);
  }
}
