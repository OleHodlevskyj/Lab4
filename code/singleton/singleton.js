export class ConfigManager {
    constructor() {
        // Перевіряємо чи вже існує екземпляр
        if (ConfigManager.instance) {
            return ConfigManager.instance;
        }

        // Ініціалізація налаштувань
        this.config = {
            appName: 'Patterns Demo',
            version: '1.0.0',
            theme: 'light',
            language: 'uk'
        };

        // Зберігаємо екземпляр
        ConfigManager.instance = this;
    }

    getConfig(key) {
        return this.config[key];
    }

    setConfig(key, value) {
        this.config[key] = value;
    }

    getAllConfig() {
        return { ...this.config };
    }
}

export const DatabaseConnection = (function() {
    let instance;

    function createConnection() {
        const connection = {
            host: 'localhost',
            port: 5432,
            database: 'patterns_db',
            connected: true,
            
            query(sql) {
                return `Executing query: ${sql}`;
            },
            
            close() {
                this.connected = false;
                return 'Connection closed';
            }
        };
        
        return connection;
    }

    return {
        getInstance() {
            if (!instance) {
                instance = createConnection();
            }
            return instance;
        }
    };
})();
