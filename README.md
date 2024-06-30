# Smart Text Edit

Smart Text edit  is a Progressive Web App (PWA) that runs in the browser. This single-page application meets features a number of data persistence techniques to ensure functionality even when offline. The app uses IndexedDB to store and retrieve data. This PWA is live using Render.com at

https://smarttextedit.onrender.com

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)


## Installation

To get started with the Smart Text Edit app, follow these steps:

1. Clone the repository:
   
-  git clone https://github.com/yourusername/smart-text-edit.git


2. Install the dependencies:

- npm install

3. Build the application

- npm run build

4. Start the application:

- npm start

## Usage

After starting the application, it will be available at http://localhost:3000 in your web browser. You can use the text editor to write, save, and retrieve text even when you are offline.

## Features

Offline Functionality: The app works offline using service workers and IndexedDB.
Data Persistence: Text data is stored in IndexedDB, ensuring it is retained between sessions.
PWA: The app can be installed on your device and used as a native application.

## Technologies Used

Webpack: to bundle JavaScript files for usage in a browser.
Babel: A JavaScript compiler.
idb: A lightweight wrapper around the IndexedDB API.
Workbox: A set of libraries to simplify service worker development.

## Credits and Contributions

This PWA was created from the source code provided here https://github.com/coding-boot-camp/cautious-meme

Deployed with Render.com

Developed with the assistance of OSU bootcamp instruction and tutors

Troubleshooting errors and bug fixes with ChatGPT.com and Tabnine.com

## Contributing

Contributions are welcome! If you have suggestions or bug fixes, please open an issue or a pull request.

Fork the repository.
Create your feature branch (git checkout -b feature/your-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.