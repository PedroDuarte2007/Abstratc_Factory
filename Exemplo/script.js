/** Exemplo do Gof pattern Abstract Factory */

// Fábrica abstrata
class SistemaOperacionalFactory {
    criarSistemaOperacional() {
        throw new Error("Este método deve ser implementado pelas subclasses.");
    }
}

// Subclasse concreta para Android
class AndroidFactory extends SistemaOperacionalFactory {
    criarSistemaOperacional() {
        return {
            nome: "Android",
            tipo: "O mais poderoso SO."
        };
    }
}

// Subclasse concreta para iOS
class IosFactory extends SistemaOperacionalFactory {
    criarSistemaOperacional() {
        return {
            nome: "iOS",
            tipo: "O mais seguro SO."
        };
    }
}

// Subclasse concreta para Windows
class WindowsFactory extends SistemaOperacionalFactory {
    criarSistemaOperacional() {
        return {
            nome: "Windows",
            tipo: "Cópia piorada do MAC."
        };
    }
}

// Cliente que usa a fábrica abstrata
function getFactory(tipo) {
    switch (tipo) {
        case "aberto":
            return new AndroidFactory();
        case "fechado":
            return new IosFactory();
        default:
            return new WindowsFactory();
    }
}

function getObjeto() {
    const factory = getFactory(so.value); // Obtém a fábrica com base no tipo
    const obj = factory.criarSistemaOperacional(); // Cria o objeto usando a fábrica
    resultado.innerHTML += JSON.stringify(obj);
}