# technical-test

A technical test to demonstrate both hard and soft skills for a company evaluation.

Cloning the repository

1.1 ssh

```bash
git clone git@github.com:nandovx/technical-test.git
```

1.2 https

```bash
git clone https://github.com/nandovx/technical-test.git
```

## Part 1 - Logic

I choose the first question because I believe this is the most challenging.

> 🔸 1. Números únicos
>
> Escreva uma função que receba uma lista de números e retorne apenas os que não se repetem.
>
> Exemplo: Entrada: [1, 2, 2, 3, 4, 4, 5] → Saída: [1, 3, 5]

### 🛠 Requirements

- .NET SDK 8.0+ installed

  Check installation with:

  ```bash
  dotnet --version
  ```

### 🚀 How to Run

1. Navigate to the project folder

   ```bash
   cd technical-test
   cd Part1-Logic/uniqueNumber
   ```

2. Run the program

   ```bash
   dotnet run -- "1,2,3,3,4,4,5,6"
   ```

## Part 2 - Technical Communication

This folder contain a video and a image used to explain about Binary Search

### 📂 Folder structure

- `video-binary-search.mp4`  
   An explanatory video demonstrating binary search.

- `image-binary-search.png`  
   An illustrative image relevant to explanation.

## Part 3 - Technical Communication

In this Part I will develop a simple page using Angular.

### 📂 Folder structure

src/
└── app/
├── core/
│ └── services/
│ └── event.service.ts
│
├── features/
│ └── event/
│ ├── components/
│ │ ├── event-details/
│ │ │ ├── event-detail.component.html
│ │ │ └── event-detail.component.ts
│ │ │
│ │ └── registration-modal/
│ │ ├── registration-modal.component.html
│ │ └── registration-modal.component.ts
│ │
│ ├── pages/
│ │ └── event-page.component.ts
│ │
│ └── event.module.ts
│
├── shared/
│ └── components/
│ ├── footer/
│ │ ├── footer.component.html
│ │ ├── footer.component.scss
│ │ └── footer.component.ts
│ │
│ └── header/
│ ├── header.component.html
│ ├── header.component.scss
│ └── header.component.ts
│
├── app.component.html
├── app.component.scss
├── app.component.spec.ts
├── app.component.ts
├── app.config.server.ts
├── app.config.ts
├── app.routes.ts
│
├── index.html
├── main.server.ts
├── main.ts
├── server.ts
└── styles.scss
