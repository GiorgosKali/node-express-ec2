import winston from 'winston';

export const logger = winston.createLogger({
	level: 'silly',
	format: winston.format.json(),
	defaultMeta: { service: 'user-service' },
	transports: [new winston.transports.File({ filename: 'combined.log' })],
});
