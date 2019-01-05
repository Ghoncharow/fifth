const http = require("http");
const fs = require("fs");
 
http.createServer(function(request, response){
     
if(request.url=="/"){

    fs.readFile("./index4.html", "utf8", function(error, data){
                 
        let message = "Это обычное веб-приложение написанное на Node.js"; 
        let message1 = "Вызов обычного диалогового окна"; 

        let header = "Демонстрация спецэффектов библиотеки jQuery";
        data = data.replace("{header}", header).replace("{message}", message).replace("{message1}", message1);
        response.end(data);

    })

} else {  if(request.url=="/some.doc"){
            response.writeHead(200, {"Content-Type" : "application/msword"});
            fs.createReadStream("some.doc").pipe(response);
         }
         else{

            response.end("Happy end!");
         }
       }
    

}).listen(3000);
