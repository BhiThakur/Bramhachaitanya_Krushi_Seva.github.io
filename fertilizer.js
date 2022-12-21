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

    
   if( ChemiName == "00:52:34" && ChemiQut < 200) {
        message = ChemiQut * 1 / 200 * 1000 + " gm";
        One_lr_mrp = "₹2950";
        fiveHundrade_ml_mrp = "-";
        onelr_cp= "₹1700";
        fiveHundrade_ml_cp = "-";

        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹1700";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "-";
        ten_lr_cp = "-";

        qut1 = "1kg";
        qut2 = "5kg";
        qut3 = "15kg";
        qut4 = "25kg";
        qut5 = "1kg";
        qut6 = "5kg";
        qut7 = "15kg";
        qut8 = "25kg";
    }
    
    else if( ChemiName == "00:52:34" && ChemiQut >= 200) {
        message = ChemiQut * 1 / 200 + " kg";
        One_lr_mrp = "₹2950";
        fiveHundrade_ml_mrp = "-";
        onelr_cp= "₹1700";
        fiveHundrade_ml_cp = "-";

        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹1700";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "-";
        ten_lr_cp = "-";

        qut1 = "1kg";
        qut2 = "5kg";
        qut3 = "15kg";
        qut4 = "25kg";
        qut5 = "1kg";
        qut6 = "5kg";
        qut7 = "15kg";
        qut8 = "25kg";
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

