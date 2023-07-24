# poc-server
 
This is a simple redirect server for Bug Bounty PoCs that allows you to perform URL redirects with various 3XX status codes :-)

# Install

1. Clone the repository to your local machine:
   `git clone https://github.com/bebiksior/poc-server.git`
3. Install the required dependencies:
   `npm install`
3. Run the server with an optional port parameter (default port is 3000):
   `node app.js --port 3001`

## Example: 301 redirect to https://example.com

```
http://localhost:3000/redir?status=301&url=https://example.com
```
