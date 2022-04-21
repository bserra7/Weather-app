import V_N from '../img/V_N.png';
import V_E from '../img/V_E.png';
import V_S from '../img/V_S.png';
import V_O from '../img/V_O.png';
import V_NE from '../img/V_NE.png';
import V_SE from '../img/V_SE.png';
import V_SO from '../img/V_SO.png'
import V_NO from '../img/V_NO.png';

export function metersToKm(meters){
    let number = (meters/1000).toFixed(1);
    return number
  }
export function windDirection(degree){
    let direction = []
    if(degree === 0 || degree === 360 || degree < 5 || degree > 355) return direction = ["Norte",V_N] ;
    if(degree > 85 && degree < 95) return direction = ["Este", V_E];
    if(degree > 175 && degree < 185) return direction = ["Sur", V_S] ;
    if(degree > 265 && degree < 275) return direction = ["Oeste", V_O] ;
    if(degree > 5 && degree < 85) return direction = ["Noreste", V_NE] ;
    if(degree > 95 && degree < 175) return direction = ["Sudeste", V_SE] ;
    if(degree > 185 && degree < 265) return direction = ["Sudoeste", V_SO] 
    if(degree > 275 && degree < 355) return direction = ["Noroeste",V_NO] ;
  }