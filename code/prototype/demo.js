import { UserProfile, Document, PrototypeRegistry, createPrototypeChain } from './prototype.js';

console.log('%c\n5. PROTOTYPE PATTERN', 'color: #e74c3c; font-weight: bold; font-size: 14px');
console.log('─────────────────────────────────────');

// Клонування профілю користувача
console.log('\nUserProfile Cloning:');
const originalProfile = new UserProfile('Іван Петренко', 'ivan@example.com', {
    theme: 'dark',
    language: 'uk',
    notifications: true
});

console.log('Оригінальний профіль:');
originalProfile.displayInfo();

// Клонуємо та модифікуємо
const clonedProfile = originalProfile.clone();
clonedProfile.name = 'Марія Іваненко';
clonedProfile.email = 'maria@example.com';
clonedProfile.updateSettings({ theme: 'light', privacy: 'private' });

console.log('Клонований та модифікований профіль:');
clonedProfile.displayInfo();

console.log('Профілі різні?', originalProfile !== clonedProfile);
console.log('Налаштування незалежні?', originalProfile.settings !== clonedProfile.settings);

// Клонування документів
console.log('\nDocument Cloning:');
const originalDoc = new Document(
    'Звіт про проект',
    'Це оригінальний текст документа з важливою інформацією.',
    {
        author: 'Олександр Коваль',
        tags: ['звіт', 'проект', '2025'],
        category: 'Документація'
    }
);

console.log('Оригінальний документ:', originalDoc.getInfo());

const clonedDoc = originalDoc.clone();
clonedDoc.edit('Це відредагована версія документа з оновленою інформацією.');
clonedDoc.addTag('оновлено');

console.log('\nКлонований документ:', clonedDoc.getInfo());
console.log('Різні ID?', originalDoc.id !== clonedDoc.id);

// Використання реєстру прототипів
console.log('\nPrototype Registry:');
const registry = new PrototypeRegistry();

// Реєструємо шаблони профілів
const adminTemplate = new UserProfile('Admin', 'admin@system.com', {
    theme: 'dark',
    privacy: 'private',
    notifications: true
});

const userTemplate = new UserProfile('User', 'user@system.com', {
    theme: 'light',
    privacy: 'public',
    notifications: false
});

registry.register('admin', adminTemplate);
registry.register('user', userTemplate);

console.log('Зареєстровані прототипи:', registry.listPrototypes());

// Створюємо нових користувачів з шаблонів
const newAdmin = registry.clone('admin');
newAdmin.name = 'Головний Адміністратор';
newAdmin.email = 'chief@system.com';

const newUser = registry.clone('user');
newUser.name = 'Звичайний Користувач';
newUser.email = 'regular@system.com';

console.log('\nНовий адмін:');
newAdmin.displayInfo();

console.log('Новий користувач:');
newUser.displayInfo();

console.log('\nPrototype Chain (Object.create):');
const { vehiclePrototype, car, motorcycle } = createPrototypeChain();

console.log('Автомобіль:', car.getInfo());
console.log('Дія:', car.start());

console.log('\nМотоцикл:', motorcycle.getInfo());
console.log('Дія:', motorcycle.start());

console.log('\nПеревірка прототипу:');
console.log('car має vehiclePrototype у ланцюжку?', 
    vehiclePrototype.isPrototypeOf(car));
console.log('motorcycle має vehiclePrototype у ланцюжку?', 
    vehiclePrototype.isPrototypeOf(motorcycle));
