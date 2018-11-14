This is the frontend side of my tickets app, where users can buy and sell their tickets for upcoming events as well as comment on them. It was build with JavaScript libraries React & Redux, and styled using plain CSS. It was bootstrapped with the 'Create-React-App'-boilerplate. User-passwords are stored and authenticated through JWT-tokens. To create, edit or delete any data from the server via this client you need to be authorised as a signed-in user.

Data is fetched from the backend through the user interface designed in seperate components. This data is saved in the Redux store, making API calls through actions and reducers whenever a request is made by the frontend client.

The backend-side of this app can be found in this repo: http://github.com/mivd7/ticket2ride-server
