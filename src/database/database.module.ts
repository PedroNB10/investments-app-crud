import { Global, Module } from '@nestjs/common';

import { DatabaseService } from './database.service';

@Global() // global module, imported once in the root module does not need to be imported in other modules
@Module({
  providers: [DatabaseService],
  exports: [DatabaseService], // exported or injected in other modules
})
export class DatabaseModule {}
