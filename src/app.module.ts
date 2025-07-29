import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlockchainModule } from './blockchain/blockchain.module';
import { ConfigModule } from '@nestjs/config';
import { FarmDaoModule } from './all_contracts/farm_dao/farm_dao.module';
import { FarmTokenModule } from './all_contracts/farm_token/farm_token.module';
import { BountiesModule } from './all_contracts/bounties/bounties.module';

@Module({
  imports: [BlockchainModule, ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true,
  }), FarmDaoModule, FarmTokenModule, BountiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
