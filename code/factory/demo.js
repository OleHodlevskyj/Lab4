import { TransportFactory, LogisticsCompany } from './factory.js';

console.log('%c\n2. FACTORY METHOD PATTERN', 'color: #e74c3c; font-weight: bold; font-size: 14px');
console.log('─────────────────────────────────────');

// Створення різних типів транспорту
console.log('\nTransportFactory Test:');

const truck = TransportFactory.createTransport('truck');
console.log(truck.deliver());
console.log('Вантажопідйомність:', truck.getCapacity());

const ship = TransportFactory.createTransport('ship');
console.log(ship.deliver());

const plane = TransportFactory.createTransport('plane');
console.log(plane.deliver());

// Використання в логістичній компанії
console.log('\nLogisticsCompany Test:');
const logistics = new LogisticsCompany('FastDelivery Inc.');

logistics.planDelivery('truck', 'Київ');
logistics.planDelivery('ship', 'Одеса');
logistics.planDelivery('plane', 'Львів');

console.log('\nЗвіт про доставки:');
logistics.getDeliveryReport().forEach(report => console.log(report));

// Перевірка доступних типів
console.log('\nДоступні типи транспорту:', TransportFactory.getAvailableTypes());
