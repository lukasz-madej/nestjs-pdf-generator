import { Test, TestingModule } from '@nestjs/testing';
import { Co2Controller } from './co2.controller';

describe('Co2Controller', () => {
  let controller: Co2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Co2Controller],
    }).compile();

    controller = module.get<Co2Controller>(Co2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
