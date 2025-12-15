import { ConfigManager, DatabaseConnection } from './singleton.js';

console.log('%c\n1. SINGLETON PATTERN', 'color: #e74c3c; font-weight: bold; font-size: 14px');
console.log('─────────────────────────────────────');

// Тест ConfigManager
console.log('\nConfigManager Test:');
const config1 = new ConfigManager();
const config2 = new ConfigManager();

console.log('config1 === config2:', config1 === config2);
console.log('App Name:', config1.getConfig('appName'));

config1.setConfig('theme', 'dark');
console.log('Theme від config1:', config1.getConfig('theme'));
console.log('Theme від config2:', config2.getConfig('theme'));

// Тест DatabaseConnection
console.log('\nDatabaseConnection Test:');
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

console.log('db1 === db2:', db1 === db2);
console.log('Database:', db1.database);
console.log('Query result:', db1.query('SELECT * FROM users'));
