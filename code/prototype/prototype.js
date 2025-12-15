// Базовий прототип
export class UserProfile {
    constructor(name, email, settings = {}) {
        this.name = name;
        this.email = email;
        this.settings = {
            theme: settings.theme || 'light',
            language: settings.language || 'uk',
            notifications: settings.notifications || true,
            privacy: settings.privacy || 'public'
        };
        this.createdAt = new Date();
    }

    // Метод клонування
    clone() {
        return new UserProfile(
            this.name,
            this.email,
            { ...this.settings }
        );
    }

    updateSettings(newSettings) {
        this.settings = { ...this.settings, ...newSettings };
    }

    displayInfo() {
        console.log(`
Користувач: ${this.name}
Email: ${this.email}
Налаштування:
   - Тема: ${this.settings.theme}
   - Мова: ${this.settings.language}
   - Сповіщення: ${this.settings.notifications ? 'Увімкнено' : 'Вимкнено'}
   - Приватність: ${this.settings.privacy}
Створено: ${this.createdAt.toLocaleString('uk-UA')}
        `);
    }
}

export class Document {
    constructor(title, content, metadata = {}) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.title = title;
        this.content = content;
        this.metadata = {
            author: metadata.author || 'Anonymous',
            tags: metadata.tags || [],
            category: metadata.category || 'General',
            version: metadata.version || 1
        };
        this.createdAt = new Date();
        this.modifiedAt = new Date();
    }

    clone() {
        const cloned = new Document(
            this.title + ' (Copy)',
            this.content,
            {
                author: this.metadata.author,
                tags: [...this.metadata.tags],
                category: this.metadata.category,
                version: this.metadata.version + 1
            }
        );
        return cloned;
    }

    edit(newContent) {
        this.content = newContent;
        this.modifiedAt = new Date();
        this.metadata.version++;
    }

    addTag(tag) {
        if (!this.metadata.tags.includes(tag)) {
            this.metadata.tags.push(tag);
        }
    }

    getInfo() {
        return {
            id: this.id,
            title: this.title,
            author: this.metadata.author,
            tags: this.metadata.tags,
            category: this.metadata.category,
            version: this.metadata.version,
            contentLength: this.content.length,
            created: this.createdAt.toLocaleString('uk-UA'),
            modified: this.modifiedAt.toLocaleString('uk-UA')
        };
    }
}

// Реєстр прототипів
export class PrototypeRegistry {
    constructor() {
        this.prototypes = new Map();
    }

    register(key, prototype) {
        this.prototypes.set(key, prototype);
    }

    unregister(key) {
        this.prototypes.delete(key);
    }

    clone(key) {
        const prototype = this.prototypes.get(key);
        if (!prototype) {
            throw new Error(`Прототип з ключем "${key}" не знайдено`);
        }
        return prototype.clone();
    }

    listPrototypes() {
        return Array.from(this.prototypes.keys());
    }
}

export function createPrototypeChain() {
    // Базовий прототип
    const vehiclePrototype = {
        start() {
            return `${this.type} запущено`;
        },
        stop() {
            return `${this.type} зупинено`;
        },
        getInfo() {
            return `Тип: ${this.type}, Швидкість: ${this.maxSpeed} км/год`;
        }
    };

    // Створення об'єктів через Object.create()
    const car = Object.create(vehiclePrototype);
    car.type = 'Автомобіль';
    car.maxSpeed = 200;
    car.wheels = 4;

    const motorcycle = Object.create(vehiclePrototype);
    motorcycle.type = 'Мотоцикл';
    motorcycle.maxSpeed = 180;
    motorcycle.wheels = 2;

    return { vehiclePrototype, car, motorcycle };
}
