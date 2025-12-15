// Абстрактні продукти - Кнопки
class Button {
    render() {
        throw new Error('Method render() must be implemented');
    }
}

class WindowsButton extends Button {
    render() {
        return '[ Windows Button ]';
    }
    
    onClick() {
        return 'Windows button clicked';
    }
}

class MacButton extends Button {
    render() {
        return '( Mac Button )';
    }
    
    onClick() {
        return 'Mac button clicked';
    }
}

class LinuxButton extends Button {
    render() {
        return '{ Linux Button }';
    }
    
    onClick() {
        return 'Linux button clicked';
    }
}

// Абстрактні продукти - Чекбокси
class Checkbox {
    render() {
        throw new Error('Method render() must be implemented');
    }
}

class WindowsCheckbox extends Checkbox {
    render() {
        return 'Windows Checkbox';
    }
    
    toggle() {
        return 'Windows checkbox toggled';
    }
}

class MacCheckbox extends Checkbox {
    render() {
        return 'Mac Checkbox';
    }
    
    toggle() {
        return 'Mac checkbox toggled';
    }
}

class LinuxCheckbox extends Checkbox {
    render() {
        return 'Linux Checkbox';
    }
    
    toggle() {
        return 'Linux checkbox toggled';
    }
}

// Абстрактна фабрика
class GUIFactory {
    createButton() {
        throw new Error('Method createButton() must be implemented');
    }
    
    createCheckbox() {
        throw new Error('Method createCheckbox() must be implemented');
    }
}

// Конкретні фабрики
export class WindowsFactory extends GUIFactory {
    createButton() {
        return new WindowsButton();
    }
    
    createCheckbox() {
        return new WindowsCheckbox();
    }
}

export class MacFactory extends GUIFactory {
    createButton() {
        return new MacButton();
    }
    
    createCheckbox() {
        return new MacCheckbox();
    }
}

export class LinuxFactory extends GUIFactory {
    createButton() {
        return new LinuxButton();
    }
    
    createCheckbox() {
        return new LinuxCheckbox();
    }
}

// Клієнтський код, що використовує фабрику
export class Application {
    constructor(factory) {
        this.factory = factory;
        this.button = null;
        this.checkbox = null;
    }

    createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    render() {
        if (!this.button || !this.checkbox) {
            return 'UI не створено. Викличте createUI()';
        }
        
        return {
            button: this.button.render(),
            checkbox: this.checkbox.render()
        };
    }

    interact() {
        return {
            buttonAction: this.button.onClick(),
            checkboxAction: this.checkbox.toggle()
        };
    }
}

// Фабрика фабрик - визначає яку фабрику використовувати
export class FactoryProducer {
    static getFactory(osType) {
        switch(osType.toLowerCase()) {
            case 'windows':
                return new WindowsFactory();
            case 'mac':
            case 'macos':
                return new MacFactory();
            case 'linux':
                return new LinuxFactory();
            default:
                throw new Error(`Непідтримувана ОС: ${osType}`);
        }
    }
}
