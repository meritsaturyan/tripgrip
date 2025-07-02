// src/utils/basePath.js
const isProd = import.meta.env.MODE === 'production';
export const basePath = isProd ? '/tripgrip/' : '';

