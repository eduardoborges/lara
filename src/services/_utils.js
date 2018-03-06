import _ from 'underscore'


/**
 * A simple mock builder
 * 
 * @param {String} data Dado de entrada
 * @param {Number} time Tempo de retorno
 */
const mock = function(data, time) {
    return new Promise( resolve => {
        return setTimeout(() => {
            console.log('[MOCK]: ', data);
            return resolve(data);
        }, time);
    })
}

/**
 * Get an item from "database"
 * 
 * @param {String} table 
 * @returns {Array} Items list
 */
const read = function(table){
    if(localStorage.getItem(table) === null){
        localStorage.setItem(table, JSON.stringify([]) );
        return JSON.parse(localStorage.getItem(table));
    }else{
        return JSON.parse(localStorage.getItem(table));
    }   
}

const write = function(table, data){
    const json = JSON.stringify(data);
    return localStorage.setItem(table, json)
}

/**
 * Get all items from "database"
 * 
 * @param {String} table Name of table
 * @returns {Array} Items objects
 */
const all = function(table){
    const list = read(table);
}

/**
 * Get an item from "database"
 * 
 * @param {String} table Name of table
 * @param {Number} id Id of item
 * @returns {Object} Item object
 */
const get = function(table, id){
    const list = read(table);
    return list.find( item => item.id === id);
}

const add = function(table, item){
    const list = read(table);
    list.push(item);
    write(table, list);
    return item;
}

const del = function(table, id){
    const list = read(table);
    const newList = list.filter( item=> item.id !== id );
    write(table, newList);
}

function makeData() {
    return _.map(_.range(Math.max(Math.round(Math.random() * 4), 1)), d =>
        makeSeries()
    )
}
  
function makeSeries() {
    const startDate = new Date()
    // const length = Math.round(Math.random() * 30)
    const length = 8
    const max = 50
    // const max = Math.random() > 0.5 ? 100000 : 10
    // const multiplier = 10
    // const multiplier = Math.round((Math.random() * 10) + Math.round(Math.random() * 50))
    return _.map(_.range(length), d => ({
        // x: d * multiplier,
        x: new Date().setDate(startDate.getDay() + 1 * d),
        y: Math.round(Math.random() * max + Math.round(Math.random() * 50)),
        r: Math.round(Math.random() * 5)
    }))
}


export {
    mock,
    read, write,
    all, get, add, del,
    makeData, makeSeries
}