var fs = require('fs')
var child_process = require('child_process')
console.log('hei')


fs.watch('src',(eventType,fileName)=>{
    console.log(eventType);
    try{
        child_process.execSync('/usr/local/lib/node_modules/bs-platform/bin/bsb.exe',{stdio:[0,1,2]})
    }catch(e){
        
    }

})
