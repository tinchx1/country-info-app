# Project Title

This project is an Express application that provides an API for retrieving information about countries.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Available Countries](#available-countries)
  - [Country Info](#country-info)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd backend
   ```

3. Install the required dependencies:
   ```
   npm install express axios
   ```

## Usage

To start the server, run the following command:
```
node index.js
```
The server will be running on `http://localhost:3000`.

## API Endpoints

### Available Countries

- **Endpoint:** `/api/available-countries`
- **Method:** `GET`
- **Description:** Retrieves a list of available countries.

### Country Info

- **Endpoint:** `/api/country-info/:countryCode`
- **Method:** `GET`
- **Description:** Retrieves detailed information about a specific country, including borders, population, and flag. Replace `:countryCode` with the desired country's code.

## License

This project is licensed under the MIT License.