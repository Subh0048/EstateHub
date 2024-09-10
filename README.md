# EstateHub

EstateHub is a web application where users can buy or rent houses based on their price range and location. Users can also chat with homeowners in real-time to discuss property details.

## Features

- **Browse Properties**: Search for houses to buy or rent using filters such as price range, location, and more.
- **User Authentication**: Secure user login and registration for both buyers and homeowners.
- **Property Search**: Filter homes based on price, location, and other preferences.
- **Real-Time Chat**: Communicate directly with homeowners through real-time messaging.
- **Map Integration**: View property locations using map services like Google Maps.
- **Responsive Design**: Fully responsive interface, accessible on mobile, tablet, and desktop devices.

## Technologies Used

- **Frontend**: React.js, Redux, Chakra UI
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Real-Time Communication**: Socket.IO
- **Maps Integration**: React Leaflet
- **Deployment**:  Vercel (coming soon )

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/EstateHub.git
    cd EstateHub
    ```

2. Install dependencies for both client and server:
    ```bash
    # For frontend
    cd client
    npm install

    # For backend
    cd ../api
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in both `client` and `api` directories and add necessary environment variables like API keys, database URLs, etc.

4. Run the application:
    ```bash
    # Run frontend
    cd client
    npm start

    # Run backend
    cd ../api
    npm start
    ```

## Usage

1. Navigate to the homepage to browse properties.
2. Register or log in to access full features.
3. Use the search feature to filter properties by location or price.
4. Start a chat with the homeowner directly from the property page.

## Contributing

Feel free to submit issues or feature requests. Pull requests are welcome! For major changes, please open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

