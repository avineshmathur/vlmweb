import { ChartsService } from './charts.service';
import { RegisterService } from './register.service';

export const services = [ChartsService,RegisterService];

export * from './charts.service';
export * from './register.service';
export const Config = {
	//API_BASE_PATH : 'https://jsonplaceholder.typicode.com/users/',
	API_BASE_PATH : 'http://10.181.177.196/:3000/',
    TIMEOUT_SECONDS: 3000000000000,
    API_OTHERS_KEY : "aHC$kykHa=aZHC#yZZkA$#HyHaCkH=k#akHkkZ$C$ZaAakHZ",
    SUBDOMAIN: "",
}
