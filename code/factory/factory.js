// Базовий клас для транспорту
class Transport {
    deliver() {
        throw new Error('Method deliver() must be implemented');
    }
}

// Конкретні типи транспорту
class Truck extends Transport {
    deliver() {
        return 'Доставка вантажівкою по землі';
    }

    getCapacity() {
        return '10 тонн';
    }
}

class Ship extends Transport {
    deliver() {
        return 'Доставка кораблем по морю';
    }

    getCapacity() {
        return '1000 тонн';
    }
}

class Plane extends Transport {
    deliver() {
        return 'Доставка літаком по повітрю';
    }

    getCapacity() {
        return '50 тонн';
    }
}

class Train extends Transport {
    deliver() {
        return 'Доставка поїздом по залізниці';
    }

    getCapacity() {
        return '500 тонн';
    }
}

// Фабрика для створення транспорту
export class TransportFactory {
    /**
     * Створює транспорт на основі типу
     * @param {string} type - тип транспорту
     * @returns {Transport} - екземпляр транспорту
     */
    static createTransport(type) {
        switch(type.toLowerCase()) {
            case 'truck':
            case 'вантажівка':
                return new Truck();
            
            case 'ship':
            case 'корабель':
                return new Ship();
            
            case 'plane':
            case 'літак':
                return new Plane();
            
            case 'train':
            case 'поїзд':
                return new Train();
            
            default:
                throw new Error(`Невідомий тип транспорту: ${type}`);
        }
    }

    /**
     * Отримує список доступних типів транспорту
     */
    static getAvailableTypes() {
        return ['truck', 'ship', 'plane', 'train'];
    }
}

// Логістична компанія, що використовує фабрику
export class LogisticsCompany {
    constructor(name) {
        this.name = name;
        this.deliveries = [];
    }

    planDelivery(transportType, destination) {
        const transport = TransportFactory.createTransport(transportType);
        const delivery = {
            transport: transport,
            destination: destination,
            method: transport.deliver(),
            capacity: transport.getCapacity()
        };
        
        this.deliveries.push(delivery);
        return delivery;
    }

    getDeliveryReport() {
        return this.deliveries.map((d, index) => 
            `${index + 1}. ${d.destination}: ${d.method} (Вантажопідйомність: ${d.capacity})`
        );
    }
}
