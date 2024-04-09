import setText, {appendText, showWaiting, hideWaiting} from "./results.mjs";

//To avoid the async. we are using promises
export function get() {
    axios.get("http://local:3000/orders/1") //axios library
    .then(({data}) => { //promises
        setText(JSON.stringify(data)); //giving data
    })
}

export function getCatch() {
}

export function chain() {
}

export function chainCatch() {
}

export function final() {
}