const http = require('http')    //Pull in a useful node package

                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port


const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            console.log("Request recieved")
            // console.log(req.url)
            // Build a fake url so we can get the search parameters using a URL object
            fake_url = "https://fake.com/path" + req.url
            const url = new URL(fake_url)
            if (req.method === 'GET') {

                const advices = ["The hard days are what make you stronger.",
                "Nothing is impossible, the word itself says I’m possible!",
                "Make each day your masterpiece.",
                "Bad decisions make good stories.",
                "Think like a proton. Always positive.",
                "Be happy – it drives people crazy."]
        
                
                let randomValue = Math.floor(Math.random() * advices.length)
                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'text/plain')
                res.write(`${advices[randomValue]}`)
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )
server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})