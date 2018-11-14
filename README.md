This is the frontend side of my tickets app, where users can buy and sell their tickets for upcoming events as well as comment on them. It was build with JavaScript libraries React & Redux, and styled using plain CSS. Users are authenticated through JWT-tokens. To create, edit or delete any data via this client you need to be authorised as a signed-in user.

Data is fetched from the backend through the user interface in the components, using actions and reducers to store this fetched data in the redux state when a request is made by the frontend client.

The server-side of this app can be found in this repo: https://github.com/mivd7/ticket2ride-server
