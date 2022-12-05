function e(){
    var nuoc=document.getElementById("nuoc").value;
    var sln=document.getElementById("sln").value;
    var v;

    var trai_cay=document.getElementById("trai_cay").value;
    var sltc=document.getElementById("sltc").value;
    var d;
    
    var tien=document.getElementById("tien").value;
    var c="";

    
    if(sln > 0){
        switch(nuoc){
        case "nuoc_suoi":
            v=+(15000*sln);
            c+=(sln)+" chai nuoc suoi";
            break;
        
        case "coca_cola":
            v=17000*sln;
            c+=(sln)+" chai coca cola";
            break;
        
        case "7_up":
            v=17000*sln;
            c+=(sln)+" chai 7 up";
            break;

        case "pessi":
            v=17000*sln;
            c+=(sln)+" chai pessi";
            break;

        case "cam_ep":
            v=17000*sln;
            c+=(sln)+" chai cam ep";
            break;

        case "sting":
            v=17000*sln;
            c+=(sln)+" chai sting";
            break;

        case "bo_huc":
            v=20000*sln;
            c+=(sln)+" chai bo huc";
            break;      
        };
    }else{
        v=0;
    }
    

    if(sltc >0){
        switch(trai_cay){
        case "trai_cay_nho":
            d=99000*sltc;
            c+=" "+(sltc)+" trai cay nho";
            break;
        
        case "trai_cay_lon":
            d=129000*sltc;
            c+=" "+(sltc)+" trai cay lon";
            break;
        
        case "buoi":
            d=189000*sltc;
            c+=" "+(sltc)+" buoi";
            break;
        }
    }else{
        d=0;
    } ;



    if(tien>=(d+v)){
        c+=" "+ "va con lai " +(tien-(d+v))+" vnd";
    }else{
        c="ban khong du tien nen khong the mua thu gi duoc";
    }

    document.getElementById("a").innerHTML=c;
    document.getElementById("sln").value="";
    document.getElementById("sltc").value="";
    document.getElementById("tien").value="";
    document.getElementById("gia").innerHTML="";
    document.getElementById("giatc").innerHTML="";
    };

    function sln(){
        var nuoc=document.getElementById("nuoc").value;
        var sln=document.getElementById("sln").value;

        switch(nuoc){
        case "nuoc_suoi":
            document.getElementById("gia").innerHTML= (15000*sln);
            break;
        
        case "coca_cola":
            document.getElementById("gia").innerHTML= (17000*sln);
            break;
        
        case "7_up":
            document.getElementById("gia").innerHTML= (17000*sln);
            break;

        case "pessi":
            document.getElementById("gia").innerHTML= (17000*sln);
            break;

        case "cam_ep":
            document.getElementById("gia").innerHTML= (17000*sln);
            break;

        case "sting":
            document.getElementById("gia").innerHTML= (17000*sln);
            break;

        case "bo_huc":
            document.getElementById("gia").innerHTML= (20000*sln);

            break;      
        };
    };


    function sltc(){
        var trai_cay=document.getElementById("trai_cay").value;
        var sltc=document.getElementById("sltc").value;

        switch(trai_cay){
        case "trai_cay_nho":
            document.getElementById("giatc").innerHTML= (99000*sltc);
            break;
        
        case "trai_cay_lon":
            document.getElementById("giatc").innerHTML= (129000*sltc);
            break;
        
        case "buoi":
            document.getElementById("giatc").innerHTML= (189000*sltc);
            break;

        };
    }


