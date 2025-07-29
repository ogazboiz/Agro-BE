import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createPublicClient, http, createWalletClient, Hex, WalletClient, getContract, getAddress } from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import { mantleSepoliaTestnet } from 'viem/chains';

@Injectable()
export class BlockchainService {

    constructor(private readonly configService: ConfigService) { }

    getPublicClient = async () => {
        const client = createPublicClient({
            chain: mantleSepoliaTestnet,
            transport: http('https://rpc.mantle.xyz'),
        });

        return client;
    }


     getWalletClient = async(): Promise<WalletClient> =>  {
        return createWalletClient({
            chain: mantleSepoliaTestnet,
            transport: http(''),   
            account: privateKeyToAccount((
                '0x' + this.configService.get<string>('WALLET_KEY')
            ) as Hex)
        });
    }

    getContractInstance = async(contractAddress: string, contractAbi: any) => {
        return getContract({
            address: getAddress(contractAddress),
            abi: contractAbi,
            client: {
                public: await this.getPublicClient(),
                wallet: await this.getWalletClient()
            }
        });
    }
}
