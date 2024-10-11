<p align="center"><b>Reisetopia Test</b> <br> 
</p>

<br>

# Quick Local Setup Guide
* To run the shortlet backend locally, follow the steps below:

* Clone repository
  ```
  git clone --depth  https://github.com/oyeyipo45/reis-back
  ```

* Go to folder
  ```
  cd reis-back/
  ```

* Install the project dependencies.
  ```
  npm run install
  ```

* In the root folder of the project, create a `.env` file and add the following values.
  ```
  PORT=4000
  USERNAME=oyeyipo45
  PASSWORD=Kolade11.
  DB_NAME=hotels
  ORIGIN=*
  CREDENTIALS=true
  NODE_ENV=development
  ```

* Build application in development mode.
  ```
  npm run build
  ```

* Start the application in development mode.
  ```
  npm run dev
  ```

* Access application on local host and check external api health
  ```
  http://localhost:4000/v1/api/health
  ```

* Access hotels endpoint
  ```
  http://localhost:4000/v1/recruiting/hotels
  ```

* Hotels endpoint filters.
  ```
  search=hotel name or letter(s) in hotel name
  minPrice=minimun hotel price
  maxPrice=maximun hotel price
  distance=distance in km
  lat=latitude
  lng=longitude
  ```