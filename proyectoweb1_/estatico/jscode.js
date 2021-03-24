function readFile(){
    jQuery.get('result.txt', function(data){
        var split = data.split("/")
        data1 =split[0] 
        data2 =split[1]
        data3 =split[2]
        console.log(data)
        $('#output1').text(data1)
        $('#output2').text(data2)
        $('#output3').text(data3)
        
        
         
        

    })

}setInterval(readFile,2500);
