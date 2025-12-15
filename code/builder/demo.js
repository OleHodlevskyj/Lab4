import { ComputerBuilder, ComputerDirector } from './builder.js';

console.log('%c\n4. BUILDER PATTERN', 'color: #e74c3c; font-weight: bold; font-size: 14px');
console.log('─────────────────────────────────────');

// Ручна побудова комп'ютера
console.log('\nManual Build (Ланцюговий виклик):');
const builder = new ComputerBuilder();
const customPC = builder
    .setCPU('AMD Ryzen 7 7800X3D')
    .setRAM('32GB DDR5')
    .setStorage('1TB NVMe SSD')
    .setGPU('AMD RX 7900 XTX')
    .setPowerSupply('750W 80+ Gold')
    .setCase('Lian Li O11 Dynamic')
    .setCooling('AIO 240mm')
    .build();

customPC.displaySpecs();
console.log('Ціна:', customPC.getPrice(), 'грн');

// Використання директора для стандартних конфігурацій
console.log('\nGaming PC (через Director):');
const director = new ComputerDirector(builder);
const gamingPC = director.buildGamingPC();
gamingPC.displaySpecs();
console.log('Ціна:', gamingPC.getPrice(), 'грн');

console.log('\nOffice PC:');
const officePC = director.buildOfficePC();
officePC.displaySpecs();
console.log('Ціна:', officePC.getPrice(), 'грн');

console.log('\nWorkstation PC:');
const workstationPC = director.buildWorkstationPC();
workstationPC.displaySpecs();
console.log('Ціна:', workstationPC.getPrice(), 'грн');

console.log('\nBudget PC:');
const budgetPC = director.buildBudgetPC();
budgetPC.displaySpecs();
console.log('Ціна:', budgetPC.getPrice(), 'грн');

// Мінімальна конфігурація
console.log('\nMinimal Build:');
const minimalPC = new ComputerBuilder()
    .setCPU('Intel Pentium')
    .setRAM('8GB DDR4')
    .build();
minimalPC.displaySpecs();
