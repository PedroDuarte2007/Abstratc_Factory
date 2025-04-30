# Factory Method 
## Abstract Factory

O padrão Abstract Factory é um padrão de projeto criacional que fornece uma interface para criar famílias de objetos relacionados ou dependentes entre si sem especificar suas classes concretas.

## Padrão de Projeto Abstract Factory Method

O padrão Abstract Factory Method é uma variação do padrão Factory Method que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses decidam qual classe instanciar. Ele é usado quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.

## Caracteristicas do padrão Abstract Factory Method

- Cria famílias de objetos relacionados ou dependentes entre si.
- Permite que as subclasses decidam qual classe instanciar.
- Fornece uma interface para criar objetos em uma superclasse.
- É usado quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.

## Exemplo de implementação do padrão Abstract Factory Method em JavaScript

```js
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
```

## Imagem de exemplo do padrão Abstract Factory Method

![Abstract Factory Method](https://refactoring.guru/images/patterns/content/abstract-factory/abstract-factory-en-3x.png)

![Abstract Factory Method](https://refactoring.guru/images/patterns/diagrams/abstract-factory/problem-pt-br.png?id=98a0309f5f32f1636a423aa9c979595d)

## Em qual situação usar o padrão Abstract Factory Method?

- Quando um sistema deve ser independente de como seus produtos são criados, compostos e representados.
- Quando um sistema deve ser configurado com uma ou mais famílias de produtos.
- Quando você deseja fornecer uma biblioteca de classes que não precisa conhecer as classes concretas que usa.
- Quando você deseja fornecer uma interface para criar objetos em uma superclasse, mas permitir que as subclasses decidam qual classe instanciar.

## Pontos positivos do padrão Abstract Factory Method

- Permite criar famílias de objetos relacionados ou dependentes entre si.
- Facilita a adição de novos produtos sem modificar o código existente.
- Promove a consistência entre os produtos criados.
- Aumenta a flexibilidade e a reutilização do código.

## Pontos negativos do padrão Abstract Factory Method

- Pode aumentar a complexidade do código, especialmente se houver muitas classes concretas.
- Pode dificultar a compreensão do código, pois o cliente não sabe exatamente qual classe concreta está sendo instanciada.
- Pode levar a um aumento no número de classes, o que pode tornar o código mais difícil de manter.
- Pode ser mais difícil de implementar do que o padrão Factory Method simples, especialmente se houver muitas variações de produtos.


## Sua criação e evolução

O padrão Abstract Factory foi introduzido por primeira vez no livro "Design Patterns: Elements of Reusable Object-Oriented Software" de Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides, publicado em 1994. O padrão foi criado para resolver o problema de criar famílias de objetos relacionados ou dependentes entre si sem especificar suas classes concretas.
O padrão evoluiu ao longo do tempo, com a inclusão de novas variações e implementações em diferentes linguagens de programação. Ele se tornou um dos padrões de projeto mais populares e amplamente utilizados na programação orientada a objetos, especialmente em sistemas que requerem flexibilidade e extensibilidade.

## Conclusão

O padrão Abstract Factory é uma ferramenta poderosa para criar famílias de objetos relacionados ou dependentes entre si sem especificar suas classes concretas. Ele promove a flexibilidade, a reutilização do código e a consistência entre os produtos criados. No entanto, deve ser usado com cautela, pois pode aumentar a complexidade do código e dificultar a compreensão do mesmo. É importante avaliar se o uso desse padrão é apropriado para o seu projeto específico.