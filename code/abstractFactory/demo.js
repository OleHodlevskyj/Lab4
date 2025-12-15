import { WindowsFactory, MacFactory, LinuxFactory, Application, FactoryProducer } from './abstractFactory.js';

console.log('%c\n3. ABSTRACT FACTORY PATTERN', 'color: #e74c3c; font-weight: bold; font-size: 14px');
console.log('─────────────────────────────────────');

// Створення UI для різних операційних систем
console.log('\nWindows Application:');
const windowsFactory = new WindowsFactory();
const windowsApp = new Application(windowsFactory);
windowsApp.createUI();
console.log('UI:', windowsApp.render());
console.log('Interactions:', windowsApp.interact());

console.log('\nMac Application:');
const macFactory = new MacFactory();
const macApp = new Application(macFactory);
macApp.createUI();
console.log('UI:', macApp.render());
console.log('Interactions:', macApp.interact());

console.log('\nLinux Application:');
const linuxFactory = new LinuxFactory();
const linuxApp = new Application(linuxFactory);
linuxApp.createUI();
console.log('UI:', linuxApp.render());
console.log('Interactions:', linuxApp.interact());

// Використання FactoryProducer
console.log('\nUsing FactoryProducer:');
const userOS = 'mac';
const factory = FactoryProducer.getFactory(userOS);
const app = new Application(factory);
app.createUI();
console.log(`${userOS.toUpperCase()} UI:`, app.render());
