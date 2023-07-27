# TOKOPEDIA PLAY CLONE

## PROJECT DESCRIPTION

This project is a clone of [Tokopedia Play](https://www.tokopedia.com/play/channels) to fulfill the mid semester assignment from the Gigih Generation. In this mid-semester project, it only consists of the back end side.

### FEATURES

This server-side app supoprts:

1. Videos:
   - user can post new video
   - user can read all the videos from database
2. Comments:
   - user can post comment for the video
   - user can read comments on the video
3. Products:
   - user can post a new produt for the spesific video
   - user check products based on spesific video

## DATABASE STRUCTURE

In this project, I am using MongoDB as the database to store the data. I use Mongoose package while creating the database. This database consists of three collections: videos, products, and comments.

1. Videos Collection
   This collections store information on videoID and the url image thumbnail. Each document in videos collection has the following fields:

   - "\_id": The unique identifier for video which is generated automatically
   - "url_image": The URL source for thumbnail picture
   - "\_\_v": The version number of the data (how many times it has been updated). It is automatically generate by mongoDB
     Example document in videos collection:

   ```json
   {
     "_id": {
       "$oid": "64bfe413ee4bde190d579878"
     },
     "url_image": "iniGambar.com",
     "__v": 0
   }
   ```

2. Products collection
   This collections store information on product. Each document in products collection has the following fields:

   - "\_id": The unique identifier for product which is generated automatically
   - "videoID": The identifier, taken from "\_id" from each video. So a product is "related" to each video.
   - "name": The name of the product itself
   - "link": The URL source of the product
   - "\_\_v": The version number of the data (how many times it has been updated). It is automatically generate by mongoDB
     Example document in products collection:

   ```json
   {
     "_id": {
       "$oid": "64bfe4a4ee4bde190d57987b"
     },
     "videoID": "64bfe413ee4bde190d579878",
     "name": "kaktus",
     "link": "https://kaktus.com",
     "price": 3000,
     "__v": 0
   }
   ```

3. Comments collectio
   This collections store information on comments. Each document in comments collection has the following fields:

   - "\_id": The unique identifier for product which is generated automatically
   - "videoID": The identifier, taken from "\_id" from each video. So a comments is based on video.
   - "username": The name of user who input the comment
   - "comment": The content of the comment
   - "created_at": The timestamp/time the comment is posted
   - "\_\_v": The version number of the data (how many times it has been updated). It is automatically generate by mongoDB
     Example document in comments collection:

   ```json
   {
     "_id": {
       "$oid": "64bfe633ee4bde190d57987f"
     },
     "videoID": "64bfe413ee4bde190d579878",
     "username": "654",
     "comment": "dummyComment",
     "created_at": {
       "$date": "2023-07-25T15:11:47.590Z"
     },
     "__v": 0
   }
   ```

## API STRUCTURE

The API in this project is built based on RESTful API. This is what happens when user hit the HTTP Request: {HTPP Request --> --> Routes --> Model (if adding any data for database)--> response receive --> routes --> response send to user}

## LIST API REQUEST AND RESPONSE

The API in this project has been built using Node.js with the Express.js. It follows a RESTful architecture to handle different resources, including videos, products, and comments.
The following ruotes are used in this project:

### Videos

#### GET/api

Return all video in the sytem.

- URL Params
  none
- Data params
  none
- Headers
  Content-Type: application/json
- Success Response: Code (200). Content:

```
[
  {
    "_id": "string",
    "url_image": "string",
    "__v": 0
  }
]
```

#### POST/api

Create a new video document in database and return the new object.

- URL Params
  none
- Data params
  ```
  {
    "url_image": "string"
  }
  ```
- Headers
  Content-Type: application/json
- Success Response: Code (200).
  Content:

```
[
  {
    "url_image": "string",
    "_id": "ObjectID",
    "__v": 0
  }
]
```

- Error response (Code: 400):

```
[
  {
    "message": "Failed to add video"
  }
]
```

### Product

#### POST/api/products

Create a new product document in database and return the new object.

- URL Params
  none
- Data params
  ```
  {
   {
     "videoID": "string",
     "name": "string",
     "link": "string",
     "price": "number",
   }
  }
  ```
- Headers
  Content-Type: application/json
- Success Response: Code (200).
  Content:

```
[
  {
    "_id": "ObjectID",
    "videoID": "string",
    "name": "string",
    "link": "string",
    "price": "number",
    "__v": 0
  }
]
```

- Error response (Code: 400):

```
[
  {
    "message": "error message"
  }
]
```

#### GET/api/products/list

Return products based on videoID.

- URL Params
  none
- Query params

```
[
  {
    "videoID": "string"
  }
]
```

- Headers
  Content-Type: application/json
- Success Response: Code (200). Content:

```
  [
   {<product_object>},
   {<product_object>},
   {<product_object>},
  ]
```

- Error response (Code: 400). Content:

```
   {error: error.message}
```

### Comments

#### POST/api/comments

Create a new product document in database and return the new object.

- URL Params
  none
- Body params
  ```
  {
   {
     "videoID": "string",
     "username": "string",
     "comment": "number",
   }
  }
  ```
- Headers
  Content-Type: application/json
- Success Response: Code (200).
  Content:

```
[
  {comment_object}
]
```

- Error response (Code: 400):

```
[
  {
    "message": "error.message"
  }
]
```

#### GET/api/products/list

Return products based on videoID.

- URL Params
  none
- Query params

```
[
  {
    "videoID": "string"
  }
]
```

- Headers
  Content-Type: application/json
- Success Response: Code (200). Content:

```
  [
   {<comment_object>},
   {<comment_object>},
   {<comment_object>},
  ]
```

- Error response (Code: 400):

```
[
  {
    "message": error.message
  }
]
```

## HOW TO RUN THIS PROJECT

This project used yarn package manager during the development. Moreover, these instructions are based on yarn package manager. You can adapt these intructions if you are using other package manager.However, if you want to follow exactly as written here, please install the yarn package manager in your local environment.

Pre-requirement
Please clone this repository into your local enviroment.
Please install MongoDB first. I suggest you also install MongoDB Compas for convenience.
Please also prepare postman. You can install postman desktop or simply using the postman on its web.

1. To run this project, kindly, intall this packages in the project's directory.
   {yarn add express body-parser mongoose nodemon dotenv}
   Check package.json file to see if you have installed these packages or not.
2. On pacakge.json file, add these following code:

```{ "scripts": {
   "start": "nodemon app.js"
   }}
```

3. Create the database needed for this project via MongoDB compass or terminal. This name will be used in this project.
4. Activate your database by clicking connet button if you use MongoDB Compass. On the other hand, you can activate your database from terminal via MongoShell.
5. Create new file ".env" in this project folder that contains the port and URL database link. For instance (Make sure use a port which is not active or currently used. ):

```
{
   PORT=your_port
   DB_URL = "mongodb://127.0.0.1:27017/your_database_name"
   // Or DB_URL = "mongodb://localhost:27017/your_database_name"
   }

```

6. Run this project via terminal by executing these following code

```
{
yarn start
}
```

Please make sure your database is connected where you can find these following command in your terminal :

```
{
Server is running on your_port
Database Connected
}
```

7. Then, we post a new video first to the database. So, that we can use the videoID that generated automatically.
8. Go to postmann web service or desktop postman App. Create a new request with POST action with this link {localhost:your_port/api/}. On the "Body Params", fill it with following code example:

```
   {
   "url_image": "dummyGambar.com"
   }

```

8. If your program run smoothly, it should show the video data as a result. After that, copy videoID, which is generated automatically, to add new comment. Create new request in your postman {localhost:9999/api/products} with POST action. Fill the body params with required data. For example:

```
{
    "videoID": "64c081d0fc64f01cf7423e56",
    "username": "siapa hayo",
    "comment": "mayanlah"
}
```

9. After that, send that request. It should show the products data as response. 9. For comment documentation, also copy the video ID from video documentation. Create new request with POST action with this URL {localhost:9999/api/comments}. Fill the body params with the nessacary data, for example:

```
{
    "videoID": "64c081d0fc64f01cf7423e56",
    "username": "siapa hayo",
    "comment": "mayanlah"
}

```

This should also show the posted comment as response.

10. Congratulations! You have added video, products and comments. To read the data, you can hit these following URL (please remember, to look into product and comment data, these URL must be followed by query params, so please fill the key and value). For example:
    To read all comments based on a video

```
localhost:9999/api/comments?videoID=your_videoID

```

To read all products based on a video

```
localhost:9999/api/products/list?videoID=your_videoID
```
