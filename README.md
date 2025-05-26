
---

## 📘 `README.md` for `node-checkpoint`

```markdown
# 🚀 Node.js Beginner Checkpoint Project

This project introduces key concepts of **Node.js** through a series of beginner-friendly tasks. It covers:

- ✅ Console logging
- 🌐 Creating an HTTP server
- 📁 File system operations
- 🔐 Generating secure passwords
- 📧 Sending emails using Nodemailer

---

## 📂 Project Structure

```

node-checkpoint/
├── hello-world.js            # Task 1: Print to console
├── server.js                 # Task 2: Simple HTTP server
├── fileSystem.js            # Task 3: File operations
├── passwordGenerator.js     # Task 4: Random password generation
├── emailSender.js           # Task 5: Send email via Node
├── welcome.txt               # Created by fileSystem.js
├── hello.txt                 # Manually created or included for Task 3
├── package.json              # Project metadata and scripts
└── README.md                 # You're here Right Now, Haha...Not Funny though

````

---

## 🛠️ Setup Instructions

### 1. **Install Node.js**

Download and install Node.js from [https://nodejs.org](https://nodejs.org)  
Make sure `node -v` and `npm -v` return versions in your terminal.

### 2. **Clone This Repository**

```bash
git clone https://github.com/yourusername/node-checkpoint.git
cd node-checkpoint
````

### 3. **Install Dependencies**

```bash
npm install
```

---

## 🧪 Tasks and How to Run Them

### 🖨️ Task 1: Hello World

**File**: `hello-world.js`

Prints `HELLO WORLD` to the console.

```bash
npm start
```

---

### 🌐 Task 2: Simple HTTP Server

**File**: `server.js`

Starts a web server on [http://localhost:3000](http://localhost:3000)
Displays: `<h1>Hello Node!!!!</h1>`

```bash
npm run server
```

---

### 📂 Task 3: File System Operations

**File**: `file-system.js`

* Creates a file named `welcome.txt` with the content "Hello Node"
* Reads from `hello.txt` and prints the content to the console

> ⚠️ Ensure `hello.txt` exists with some content in the same directory.

```bash
npm run file
```

---

### 🔐 Task 4: Password Generator

**File**: `password-generator.js`

Generates a secure random password using the `generate-password` package.

```bash
npm run password
```

---

### 📧 Task 5: Email Sender

**File**: `email-sender.js`

Sends a test email using the `nodemailer` package.

#### 🔐 Setup Required:

Update the following fields in the file:

```js
auth: {
  user: 'your_email@gmail.com',
  pass: 'your_app_password'
}
```

> ✅ Use an **App Password** for Gmail: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
> ⚠️ Do **NOT** use your normal Gmail password.

```bash
npm run email
```

---

## 📦 Scripts Summary

| Command            | Description                         |
| ------------------ | ----------------------------------- |
| `npm start`        | Run Hello World script              |
| `npm run server`   | Start a basic Node.js HTTP server   |
| `npm run file`     | Create & read files using fs module |
| `npm run password` | Generate random secure password     |
| `npm run email`    | Send an email using Nodemailer      |

---

## 🧠 Learnings

This mini-project helps you understand:

* How Node.js works with core modules like `fs` and `http`
* How to use third-party modules via `npm`
* Basic usage of Node.js for scripting and back-end tasks

---

## 📚 Useful Resources

* [Node.js Docs](https://nodejs.org/en/docs/)
* [Nodemailer Guide](https://www.w3schools.com/nodejs/nodejs_email.asp)
* [generate-password Package](https://www.npmjs.com/package/generate-password)

---

## 👨‍💻 Author
📧 [oloostephen22@gmail.com](oloostephen22@gmail.com)
🌐 [LinkedIn](https://www.linkedin.com/in/stephenoloolegacyio)

---

## 📝 License

This project is licensed under the MIT License - feel free to use and modify it as you learn.

```

---


```
