import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BlockchainService } from '../../blockchain/blockchain.service';

@Injectable()
export class BountiesService {
    constructor( private readonly configService: ConfigService, private readonly blockchainService: BlockchainService) {}
}
