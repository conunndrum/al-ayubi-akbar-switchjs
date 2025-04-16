
let nilaiMurid =
(prompt('masukan nilai kamu'))
    


switch (true){
    case(nilaiMurid >= 90):
    alert ('mendapat nilai A')
    break;

    case(nilaiMurid >= 80):
    alert ('mendapat nilai B')
    break;
    
    case(nilaiMurid >= 70):
    alert ('mendapat nilai C')
    break;

    case(nilaiMurid >= 60):
    alert ('mendapat nilai D')
    break;

    case(nilaiMurid <= 60):
    alert ('mendapat nilai E')
    break;

    default:
        console.log("lebih giat lagi nak")
        break;
}

    
