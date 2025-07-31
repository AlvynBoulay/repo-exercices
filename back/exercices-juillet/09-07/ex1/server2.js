const http = require('http');
const asciiArt = `                    
 _____ _____ _____ ____  
|_   _| ____/ ___|_   _|
  | | |  _| \___ \ | |  
  | | | |___ ___) || |                             
  |_| |_____|____/ |_|

   

   |\/\/\/|
   |      |  
   | (o)(o)
   C      _)              
   |  ___| 
   |   /  
  /____\  
 /      \


   (o)(o)
 __________

`

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  if (req.url === '/') {
    res.end('vous vous trouvez sur votre serveur node');
  } else if (req.url === '/afec') {
    res.end('vous vous trouvez sur la page afec');
  } else if (req.url === '/ascii') {
    res.end(asciiArt);
  }
});

server.listen(3001, () => {
  console.log('Serveur lancé http://localhost:3001/');
});
