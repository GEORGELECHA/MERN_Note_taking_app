import ratelimit from "../config/upstash.js";



const rateLimiter = async (req, res, next) => {
    try {
        // Use IP address as the rate limit key
        const key = req.ip;
        const { success } = await ratelimit.limit(key);
        if (!success) {
            return res.status(429).json({ message: "Too many requests, try again later" });
        }
        next();
    } catch (error) {
        console.log("Rate Limit error", error);
        next(error);
    }
}


export default rateLimiter;