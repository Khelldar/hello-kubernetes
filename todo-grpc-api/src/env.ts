export const ENV = {
  PORT: process.env.PORT || '3000',
  DATABASE_URL:
    process.env.DATABASE_URL ||
    'postgres://postgres:passw0rd@192.168.99.100:5432/postgres',
};
