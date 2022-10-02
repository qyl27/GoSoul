import dotenv from "dotenv";

export class Config {
    public port: number;

    constructor() {
        dotenv.config({path: '.env'});
        dotenv.config({path: '.env.local', override: true});

        this.port = +(process.env.GOSOUL_PORT || 3000);
    }
}

const config = new Config();

export default config;
