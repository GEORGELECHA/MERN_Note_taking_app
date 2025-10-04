
import {Ratelimit} from "@upstash/ratelimit";
import {Redis} from "@upstash/redis";

import dotenv from "dotenv";
dotenv.config();


//create a rate limiter that allows 5 requests per 10 secs
const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(10,"20 s"), // 100 requests per 60 seconds
});


export default ratelimit;