function Qut_for_ltr(){
    var ChemiName = document.getElementById("chemicle_product").value ;
    var ChemiQut = document.getElementById("chemi_qut").value ;
    var message = "";
    var One_lr_mrp = "";
    var fiveHundrade_ml_mrp = "";
    var five_lr_mrp = "";
    var tenlr_mrp = "";
    var onelr_cp= "";
    var fiveHundrade_ml_cp = "";
    var five_lr_cp = "";
    var ten_lr_cp = "";
    var qut1 = "";
    var qut2 = "";
    var qut3 = "";
    var qut4 = "";
    var qut5 = "";
    var qut6 = "";
    var qut7 = "";
    var qut8 = "";

    
    if( ChemiName == "Derish") {
        message = ChemiQut * 1.5 + " ml";
        One_lr_mrp = "₹2950";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹1700";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "-";
        ten_lr_cp = "-";
        qut1 = "1lr";
        qut2 = "500ml";
        qut3 = "5lr";
        qut4 = "10lr";
        qut5 = "1lr";
        qut6 = "500ml";
        qut7 = "5lr";
        qut8 = "10lr";
    }
    else if( ChemiName == "Ecoda") {
        message = ChemiQut * 1.5 + " ml";
        One_lr_mrp = "₹970";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "₹4500";
        tenlr_mrp = "₹8800";
        onelr_cp= "₹650";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "-";
        ten_lr_cp = "₹6250";
        qut1 = "1lr";
        qut2 = "500ml";
        qut3 = "5lr";
        qut4 = "10lr";
        qut5 = "1lr";
        qut6 = "500ml";
        qut7 = "5lr";
        qut8 = "10lr";
    }
    else if( ChemiName == "Ucosil") {
        message = ChemiQut * 1 + " gm";
        One_lr_mrp = "₹1860";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹930";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "-";
        ten_lr_cp = "-";
        qut1 = "1kg";
        qut2 = "500gm";
        qut3 = "5kg";
        qut4 = "25kg";
        qut5 = "1kg";
        qut6 = "500gm";
        qut7 = "5kg";
        qut8 = "25kg";
    }
    else if( ChemiName == "Boost") {
        message = ChemiQut * 0.17 + " ml";
        One_lr_mrp = "₹11195";
        fiveHundrade_ml_mrp = "₹5892";
        five_lr_mrp = "₹3500";
        tenlr_mrp = "₹1242";
        onelr_cp= "₹6500";
        fiveHundrade_ml_cp = "₹3500";
        five_lr_cp = "₹1800";
        ten_lr_cp = "₹850";
        qut1 = "1lr";
        qut2 = "500ml";
        qut3 = "250ml";
        qut4 = "100ml";
        qut5 = "1lr";
        qut6 = "500ml";
        qut7 = "250ml";
        qut8 = "100ml";
    }
    else if( ChemiName == "Bioplus") {
        message = ChemiQut * 1 + " ml";
        One_lr_mrp = "₹2065";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹1300";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "-";
        ten_lr_cp = "-";
        qut1 = "1lr";
        qut2 = "500ml";
        qut3 = "5lr";
        qut4 = "10lr";
        qut5 = "1lr";
        qut6 = "500ml";
        qut7 = "5lr";
        qut8 = "10lr";

    }
    else if( ChemiName == "Bachat") {
        message = ChemiQut * 0.25 + " ml";
        One_lr_mrp = "₹1500";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹900";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "-";
        ten_lr_cp = "-";
        qut1 = "1lr";
        qut2 = "500ml";
        qut3 = "5lr";
        qut4 = "10lr";
        qut5 = "1lr";
        qut6 = "500ml";
        qut7 = "5lr";
        qut8 = "10lr";
    }
    else if( ChemiName == "Ruby") {
        message = ChemiQut * 1 + " ml";
        One_lr_mrp = "₹1200";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹1050";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "-";
        ten_lr_cp = "-";
        qut1 = "1lr";
        qut2 = "500ml";
        qut3 = "5lr";
        qut4 = "10lr";
        qut5 = "1lr";
        qut6 = "500ml";
        qut7 = "5lr";
        qut8 = "10lr";
    }
    else if( ChemiName == "Nutraspred") {
        message = ChemiQut * 0.25 + " ml";
        One_lr_mrp = "₹1480";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹-";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "-";
        ten_lr_cp = "-";
        qut1 = "1lr";
        qut2 = "500ml";
        qut3 = "5lr";
        qut4 = "10lr";
        qut5 = "1lr";
        qut6 = "500ml";
        qut7 = "5lr";
        qut8 = "10lr";
    }
    else {
    message = "-"
    }
    document.getElementById("chemi_ans").textContent = message;
    document.getElementById("1lr_mrp").textContent = One_lr_mrp;
    document.getElementById("500ml_mrp").textContent = fiveHundrade_ml_mrp;
    document.getElementById("5lr_mrp").textContent = five_lr_mrp;
    document.getElementById("10lr_mrp").textContent = tenlr_mrp;
    document.getElementById("1lr_cp").textContent = onelr_cp;
    document.getElementById("500ml_cp").textContent = fiveHundrade_ml_cp;
    document.getElementById("5lr_cp").textContent = five_lr_cp;
    document.getElementById("10lr_cp").textContent = ten_lr_cp;

    document.getElementById("qut_1").textContent = qut1;
    document.getElementById("qut_2").textContent = qut2;
    document.getElementById("qut_3").textContent = qut3;
    document.getElementById("qut_4").textContent = qut4;
    document.getElementById("qut_5").textContent = qut5;
    document.getElementById("qut_6").textContent = qut6;
    document.getElementById("qut_7").textContent = qut7;
    document.getElementById("qut_8").textContent = qut8;
}

