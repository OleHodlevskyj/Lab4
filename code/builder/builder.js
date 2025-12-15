class Computer {
    constructor() {
        this.cpu = null;
        this.ram = null;
        this.storage = null;
        this.gpu = null;
        this.powerSupply = null;
        this.case = null;
        this.cooling = null;
    }

    getSpecifications() {
        return {
            'Процесор': this.cpu || 'Не вказано',
            'Оперативна пам\'ять': this.ram || 'Не вказано',
            'Накопичувач': this.storage || 'Не вказано',
            'Відеокарта': this.gpu || 'Не вказано',
            'Блок живлення': this.powerSupply || 'Не вказано',
            'Корпус': this.case || 'Не вказано',
            'Охолодження': this.cooling || 'Не вказано'
        };
    }

    displaySpecs() {
        console.log('\nХарактеристики комп\'ютера:');
        const specs = this.getSpecifications();
        Object.entries(specs).forEach(([key, value]) => {
            console.log(`  ${key}: ${value}`);
        });
    }

    getPrice() {
        // розрахунок ціни
        let price = 0;
        if (this.cpu) price += 5000;
        if (this.ram) price += 2000;
        if (this.storage) price += 1500;
        if (this.gpu) price += 8000;
        if (this.powerSupply) price += 1000;
        if (this.case) price += 1500;
        if (this.cooling) price += 1000;
        return price;
    }
}

// Будівельник
export class ComputerBuilder {
    constructor() {
        this.reset();
    }

    reset() {
        this.computer = new Computer();
        return this;
    }

    setCPU(cpu) {
        this.computer.cpu = cpu;
        return this;
    }

    setRAM(ram) {
        this.computer.ram = ram;
        return this;
    }

    setStorage(storage) {
        this.computer.storage = storage;
        return this;
    }

    setGPU(gpu) {
        this.computer.gpu = gpu;
        return this;
    }

    setPowerSupply(powerSupply) {
        this.computer.powerSupply = powerSupply;
        return this;
    }

    setCase(caseType) {
        this.computer.case = caseType;
        return this;
    }

    setCooling(cooling) {
        this.computer.cooling = cooling;
        return this;
    }

    build() {
        const result = this.computer;
        this.reset();
        return result;
    }
}

// Директор - знає як будувати конкретні конфігурації
export class ComputerDirector {
    constructor(builder) {
        this.builder = builder;
    }

    buildGamingPC() {
        return this.builder
            .setCPU('Intel Core i9-13900K')
            .setRAM('32GB DDR5')
            .setStorage('2TB NVMe SSD')
            .setGPU('NVIDIA RTX 4090')
            .setPowerSupply('1000W 80+ Gold')
            .setCase('NZXT H710i')
            .setCooling('Liquid Cooling 360mm')
            .build();
    }

    buildOfficePC() {
        return this.builder
            .setCPU('Intel Core i5-13400')
            .setRAM('16GB DDR4')
            .setStorage('512GB SSD')
            .setPowerSupply('500W 80+ Bronze')
            .setCase('Fractal Design Define Mini')
            .setCooling('Stock Air Cooling')
            .build();
    }

    buildWorkstationPC() {
        return this.builder
            .setCPU('AMD Ryzen 9 7950X')
            .setRAM('64GB DDR5')
            .setStorage('4TB NVMe SSD')
            .setGPU('NVIDIA RTX 4080')
            .setPowerSupply('850W 80+ Platinum')
            .setCase('Corsair 5000D')
            .setCooling('Liquid Cooling 280mm')
            .build();
    }

    buildBudgetPC() {
        return this.builder
            .setCPU('AMD Ryzen 5 5600')
            .setRAM('16GB DDR4')
            .setStorage('512GB SSD')
            .setGPU('NVIDIA GTX 1660 Super')
            .setPowerSupply('550W 80+ Bronze')
            .setCase('Basic ATX Case')
            .setCooling('Stock Air Cooling')
            .build();
    }
}
