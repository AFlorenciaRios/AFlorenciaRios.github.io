const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        if(DATO > 30){
          let  SuperficieCorporal = ( (DATO * 4) + 7) / (DATO + 90)
            let r1 = SuperficieCorporal*1500
            let r2 = SuperficieCorporal*2000
            
            FLU.innerText = "Resultado 1: "+r1+ " Resultado 2: " +r2;
            FLU.style.display = 'block';
        }
        else {
            let pt = 0
                if (DATO>20){
                let pe = DATO-20
                let p1 = 10*100
                let p2 = 10*50
                let p3 = pe *20
                 pt =  p1+p2+p3
                
            }else if (DATO>10){
                let pe = DATO-10
                let p1 = 10*100
                let p2 = pe*50
                pt =  p1+p2
                
            }else {
                pt= DATO*100;
                
            }
            let mantenimiento = Math.round(pt/24)
            let medio = mantenimiento*1.5
            FLU.innerHTML = "Resultado  "+ pt + " cc" +  "<br> Mantenimiento " + mantenimiento+ " cc/hr" + "<br>Medio "+ medio + " cc/hr" ;
            FLU.style.display = 'block';
        }
        
        
    } else {
        ERROR.style.display = 'block';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})