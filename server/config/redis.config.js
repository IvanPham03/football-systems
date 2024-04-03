import { createClient } from "redis";

const redisClient = createClient(
    {
        port: 6379,
        host: '127.0.0.1'
    }
)

redisClient.on('error', err=>{
    console.log('Could not establish a connection with redis. ' + err)
})

redisClient.on('connect', function (err) {
    console.log('Connected to redis successfully');
});
await redisClient.connect();



export default redisClient
