import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2'

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const connection = mysql.createConnection({
    host     : DB_HOST,
    user     : DB_USER,
    password : DB_PASSWORD,
    database : DB_NAME
});



const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        connection.connect(err => {
            if (err) {
                reject(err);
            } else {
                console.log('Connected to database');
                resolve();
            }
        });
    });
};

export default connectToDatabase;