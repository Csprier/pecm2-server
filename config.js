'use strict';

exports.PORT = process.env.PORT || 8080;
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000';
exports.MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/pecm';
exports.TEST_MONGODB_URI = process.env.TEST_MONGODB_URI || 'mongodb://localhost/pecm-test';

exports.JWT_SECRET = process.env.JWT_SECRET || 'testing-secret';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';