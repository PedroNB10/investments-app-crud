import { Module } from '@nestjs/common';

import { DatabaseService } from './database/database.service';
import { InvestmentsModule } from './investments/investments.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:
        process.env.NODE_ENV === 'development'
          ? '.env.development'
          : '.env.production',
      isGlobal: true,
    }),
    DatabaseModule,
    InvestmentsModule,
  ],
  providers: [DatabaseService],
})
export class AppModule {}
