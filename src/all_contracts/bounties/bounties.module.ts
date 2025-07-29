import { Module } from '@nestjs/common';
import { BountiesService } from './bounties.service';
import { BlockchainModule } from '../../blockchain/blockchain.module';

@Module({
  imports: [BlockchainModule],
  providers: [BountiesService]
})
export class BountiesModule {}
