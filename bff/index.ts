import express from 'express';
import handler from './handler';
import cors from 'cors';

export const app = express();
const port = parseInt(process.env.BFF_PORT || "8081");

app.use(cors());
app.get('/', handler);

app.listen(port, () => {
    console.log(`BFF is now listening on port ${port}`);
});