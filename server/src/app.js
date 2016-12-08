import Express from 'express';
import GraphHTTP from 'express-graphql';
import dotenv from 'dotenv';
import Schema from './schema';
import cors from 'cors';

dotenv.config({ silent: true });

const app = Express();

app.use(cors({ origin: process.env.CONSUMER_HOST }));
app.use('/api', new GraphHTTP({
    schema: Schema,
    pretty: true,
    graphiql: true
}));

app.get('/_internal_/health', function(req, res){
    res.send('OK');
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});