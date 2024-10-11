import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AmoService } from './amo.service';
import { CreateAmoDto } from './dto/create-amo.dto';
import { UpdateAmoDto } from './dto/update-amo.dto';

@Controller('amo')
export class AmoController {
  constructor(private readonly amoService: AmoService) {}
 @Get()
  getToken(){
    this.amoService.getToken()
 }
  // @Post()
  // create(@Body() createAmoDto: CreateAmoDto) {
  //   return this.amoService.create(createAmoDto);
  // }
  //
  // @Get()
  // findAll() {
  //   return this.amoService.findAll();
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.amoService.findOne(+id);
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAmoDto: UpdateAmoDto) {
  //   return this.amoService.update(+id, updateAmoDto);
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.amoService.remove(+id);
  // }
}
