
import {wordCounter, getTitle, randomColor, setWorld, setTitle, setCont, setcolors}from "./funcoes"
const dataInicial = {
    labels: [],
    datasets:[{
        label: 'contador de palavras',
        data:[],
        backgroundColor:[],
    }]
}
function reducer(state, action){
    switch(action.type){
        case 'graphAtt':
            return {...state,     
                labels: setWorld(),
                datasets: [ {label: setTitle(), data: setCont() , backgroundColor:setcolors(), hoverBackgroundColor:randomColor() }],
            }
        case 'empty':
            return {...state,     
                labels: [],
                datasets: [ {data: [], backgroundColor:[]}] ,
            }
        default:
            console.log(state)
            return state
    }
}
function addcont(dispatch, txt, title, ignoreWord, swichChoose){
    
    if(txt !== ""){
        wordCounter(txt, ignoreWord, swichChoose)
        getTitle(title)
        dispatch({type: 'graphAtt'})
    }else{
        dispatch({type: 'empty'})
    }
}

export {
    dataInicial,
    reducer,
    addcont,
}