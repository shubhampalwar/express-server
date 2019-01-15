# Client-Server Model

## Introduction

A common way of organizing software to run on distributed systems is to separate functions into two parts: **clients** and **servers**.

* A **client** is a program that uses services that other programs provide.
* The programs that provide the services are called **servers**.

The client makes a request for a service, and a server performs that service. Server functions often require some _resource management_, in which a server synchronizes and manages access to the resource, and responds to client requests with either data or status information.
Client programs typically handle _user interactions_ and often request data or initiate some data modification on behalf of a user.

_For example_,
a client can provide a form onto which a user (a person working at a data entry terminal, for example) can enter orders for a product. The client sends this order information to the server, which checks the product database and performs tasks that are needed for billing and shipping. Typically, multiple clients use a single server. For example, dozens or hundreds of clients can interact with a few servers that control database access.
The client is isolated from the need to know anything about the actual resource manager. If you change the database that you are using, the server possibly needs to be modified, but the client does not need to be modified. Because usually fewer copies exist of the server than of the client, and because the servers are often in locations that are easier to update (for example, on central machines instead of on PCs that are running on users' desks), the update procedure is also simplified. Also, this approach provides additional security. Only the servers, not the clients, need access to the data that the resource manager controls.

## How Client-Server request-response is served

A client and a server are two computers separated by miles but connected by **Web (Internet)**. However, important point to note here is that it is not necessary that Client and a Server should be miles apart, it could be that Client and Server programs are running as two processes on the same computer.

The Clients and Servers on the Web we have to come up with _two things:_

* A medium for communication, specifically a protocol for two systems to interact. Also called **HTTP communication protocol**.
* A protocol to ask for the required details from the server. This could be in any form of formatted data. Most commonly used formats are XML and Json.
* Server responds by sending a Response in any form of formatted data, here also it could be XML or JSON.

A Client and a Server establishes a connection using HTTP protocol. Once the connection is established, Client sends across the request to the Server in the form of XML or JSON which both entities (Client and Server) understand. After understanding the request Server responds with appropriate data by sending back a Response.

### Request/Response Cycle

#### Step 1: Parsing the URL

* A _URL_ is typed into the address bar of a web browser.
  * **Url** is a human readable alias for an IP [_Internet Protocol_]address. Its matching IP address is a unique number sequence identifying a target server called **Host**.
* The browser checks for the IP in its browser cache. If not found, it send a request to DNS.
  * **DNS** [_Domain Name System/Service/Servers_]: It is a comprehensive directory network translating domain names into its unique IP sequence.
* The browser parses the URL to find: the •protocol type, •host, •port, and •request-URI path.
  * "[protocol]: //[host]/[request-URI]"
  * **Protocol**: e.g. **HTTP** informs the server how to respond to a resource request.
  * **Host** [_'host machine’ or ‘network host'_]: tells the browser which server to contact.
  * **Request-URI** [_Universal Resource Identifier_]: used by the server to identify the resource location.
* The browser forms a HTTP request:
  * e.g. • "GET /URI HTTP/1.1" • Host: www.google.com
  * GET: A token indicating the method to perform on the resource identified from the Request-URI.
  * Host header: it is included with the request incase the server is hosting multiple sites, that way it will identify which one to serve back.

#### Step 2: Sending the request

* A socket connection is opened from our user’s computer to the IP address.
* HTTP request is sent to the host & the machine waits to get a response back.
* Web server receives the request.

#### Step 3: The server response

* Our host checks for more information to process the request: • headers, • GET, POST, PUT,... methods.
  * For static requests:
    * The server locates the html filename & sends that file back over the internet.
  * for dynamic requests:
    * .php, .asp, .aspx, .jsp files, are processed by a separate engine. These will be partially complete, containing changeable sections depending on variable values given to the page on the server end. The dynamic data & the requested file will be combined into a long string of text ( HTML, txt, XML) before its output is sent back over the internet.
* If successful, the server returns a 200 status code (as the resource was found), response headers, and the requested data back to the browser.
* If the server fails to process or complete the request, it returns an 404 error message instead.

#### Step 4: Browser rendering

* The browser receives the response with a html document to parse into a DOM [Document Object Model]. For this, it translates html elements & attributes into nodes with the "Document Object" set as the root of the tree.
* When external script, image, style sheets are parsed, new requests are made to the server.
* When stylesheets are parsed, each applicable styles gets attached to the matching node in the DOM tree.
* Javascript files are parsed & executed.
  * HTML5 adds an option to mark the script as asynchronous so these will be parsed & executed by a different thread.
  * This way the page rendering is not halted.
  * DOM nodes are updated.
  * Note: Firefox innately blocks scripts rendering while stylesheets remain un-loaded.
* In parallel to the DOM tree being constructed, the browser constructs a "render tree" of "frames" or "render objects". This is the visual representation of the node elements.
* The browser renders the page. The page is viewable & interact-able.

#### Step 5. HTTP persistent connection

* 'Connection: Keep-Alive' header.
  * This initiates a single **TCP** [_Transmission Control Protocol_]connection for sending & receiving multiple HTTP requests / responses, instead of opening a new connection for every single request / response pair.
  * It is set from the initial browser request header, and informs the server to not drop this connection. When the client sends another request, it uses the same connection. This will continue until either the client or the server decides to drop the connection.
