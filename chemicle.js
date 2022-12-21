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

    
    if( ChemiName == "ALKOTHRIN") {
        message = ChemiQut * 1 + " ml";
        One_lr_mrp = "₹1200";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "₹5900";
        tenlr_mrp = "-";
        onelr_cp= "₹580";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "₹2875";
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
    else if( ChemiName == "KOHIBAN-50(CLORO)") {
        message = ChemiQut * 1 + " ml";
        One_lr_mrp = "₹1000";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "₹4950";
        tenlr_mrp = "-";
        onelr_cp= "₹725";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "₹3470";
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
    else if( ChemiName == "CYCLONE") {
        message = ChemiQut * 1 + " ml";
        One_lr_mrp = "₹1800";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "₹8975";
        tenlr_mrp = "-";
        onelr_cp= "₹760";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "₹3750";
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
    else if( ChemiName == "SCORPIO(LAMADA)") {
        message = ChemiQut * 1 + " ml";
        One_lr_mrp = "₹1000";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹560";
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
    else if( ChemiName == "FILIKA") {
        message = ChemiQut * 0.5 + " ml";
        One_lr_mrp = "₹3300";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹1800";
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
    else if( ChemiName == "FILJYOTI") {
        message = ChemiQut * 2 + " ml";
        One_lr_mrp = "₹2050";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹1100";
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
    else if( ChemiName == "IMIDA SUPER(MIDA)") {
        message = ChemiQut * 35 / 100 + " ml";
        One_lr_mrp = "₹2500";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹1465";
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
    else if( ChemiName == "KASTIN(BAVISTIN)") {
        message = ChemiQut * 1 + " gm";
        One_lr_mrp = "₹1480";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹650";
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
    else if( ChemiName == "KOHINOOR(MANCHOZEB)") {
        message = ChemiQut * 1 + " gm";
        One_lr_mrp = "₹700";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹410";
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
    else if( ChemiName == "KOHIPHOS") {
        message = ChemiQut * 4 + " gm";
        One_lr_mrp = "₹1200";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹650";
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
    else if( ChemiName == "RUBIGUN(SCOR)") {
        message = ChemiQut * 40 / 100 + " ml";
        One_lr_mrp = "₹5000";
        fiveHundrade_ml_mrp = "₹2525";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹2800";
        fiveHundrade_ml_cp = "₹1450";
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
    else if( ChemiName == "SUPERVIT(SULPHAR)") {
        message = ChemiQut * 1 + " gm";
        One_lr_mrp = "₹250";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "₹1225";
        tenlr_mrp = "-";
        onelr_cp= "₹160";
        fiveHundrade_ml_cp = "-";
        five_lr_cp = "₹700";
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
    
    else if( ChemiName == "ENVIL") {
        message = ChemiQut * 1 + " ml";
        One_lr_mrp = "₹750";
        fiveHundrade_ml_mrp = "-";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "₹400";
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
    else if( ChemiName == "FILAZO") {
        message = ChemiQut * 35 / 100 + " ml";
        One_lr_mrp = "-";
        fiveHundrade_ml_mrp = "3875";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "-";
        fiveHundrade_ml_cp = "1900";
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
    else if( ChemiName == "FIL-CM") {
        message = ChemiQut * 150 / 100 + " gm";
        mrp = "500 MRP";
        CP = "325";
        One_lr_mrp = "-";
        fiveHundrade_ml_mrp = "₹500";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "-";
        fiveHundrade_ml_cp = "₹325";
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

    else if( ChemiName == "GRAPPLE") {
        message = ChemiQut * 1 + " gm";
        mrp = "1100 MRP";
        CP = "710";
        One_lr_mrp = "-";
        fiveHundrade_ml_mrp = "₹1100";
        five_lr_mrp = "-";
        tenlr_mrp = "-";
        onelr_cp= "-";
        fiveHundrade_ml_cp = "710";
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

