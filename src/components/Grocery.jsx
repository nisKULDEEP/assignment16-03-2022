import React from 'react';
import GroceryInput from './GroceryInput';
import GroceryList from './GroceryList';
import { v4 as uuid } from 'uuid';

function Grocery(){

    let [list, setList] = React.useState([]);
    
    function addItem(itemText){
        console.log("CLICKED")

        var itemObj = {
            text: itemText,
            status: false,
            id: uuid()
        }

        setList( old => [...old, itemObj]);
    }

    function deleteItem(id){
        var newArr = list.filter(element => element.id !== id);
        setList(newArr);
    }

    function changeStatus(id){
        var newArr1 = list.map(l => {
           return l.id === id ? {...l, status : !l.status} : l
        })
        // console.log(newArr1)
        setList(newArr1);
    }
  
        return (
            <div>
                <h2 className='app-title'>Grocery List App</h2>
                <GroceryInput addItem={addItem}/>
                <GroceryList list= {list} deleteItem={deleteItem} changeStatus={changeStatus}/>
            </div>
          
        )
    
}
 
export default Grocery;