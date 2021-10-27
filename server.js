import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
var app = express();
import http from 'http'
const server = http.createServer(app);
const PORT = 5800;
import apiRouter from './routes/api.js';
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static("dist"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
app.use('/api',apiRouter)
server.listen(PORT, ()=>console.log(`Parcel is listening on port ${PORT}`))