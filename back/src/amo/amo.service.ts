import { Injectable } from '@nestjs/common';
import { CreateAmoDto } from './dto/create-amo.dto';
import { UpdateAmoDto } from './dto/update-amo.dto';

@Injectable()
export class AmoService {
  getToken() {
    return 'This action adds a new amo';
  }
}
