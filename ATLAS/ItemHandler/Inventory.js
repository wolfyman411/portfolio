var Inventory = [];
var lineInventory = "";

function textNodeCreate(item) { // this helper determines how text nodes look. use this to change the look of text nodes across your code.
  return document.createTextNode(item[1]+" - "+item[0]);
}

function clearDocList() { // use this when you want to clear the html list rendered on the page.
  while (document.getElementById("InventoryList").firstChild) { // clear the doc list
    document.getElementById("InventoryList").removeChild(document.getElementById("InventoryList").firstChild);
  }
}

function renderList() { // this helper renders the list on the document based on the Inventory array.
  var ul = document.getElementById("InventoryList");
  clearDocList();
  for (var each of Inventory) {
    // var textnode = document.createTextNode(each[1]+" - "+each[0]);
    var textnode = textNodeCreate(each);
    var node=document.createElement("li");
    node.appendChild(textnode);
    ul.appendChild(node);
  }
}



function addItemInventory() // overhauled this, and also remove
{
    const itemName = document.getElementById("itemName").value
    var itemAmount = document.getElementById("itemAmount").value
    if (itemName.trim().length===0) { // bro forgot the text. try again.
      return;
    }
    if (itemAmount == "")
    {
        itemAmount = 1
    }

    var itemArray;
    var index = Inventory.findIndex(element => element[0] === itemName); // find the index of the item in Inventory array, or -1.
    //console.log("Index found: "+index);

    if (index!=-1) {
      var amount = parseInt(itemAmount)+parseInt(Inventory[index][1]); // a temp var to store the total.
      Inventory[index][1] = amount; // change the amount in the Inventory array.
    } else {
      itemArray=[itemName,itemAmount]; // the array stored in the Inventory array.
      Inventory.push(itemArray); // push the itemArray to the Inventory array.
    }
    renderList();
    stringInventory();
}

function removeItemInventory() { // overhauled, based on add
  const itemName = document.getElementById("itemName").value
  var itemAmount = document.getElementById("itemAmount").value
  if (itemName.trim().length===0) { // bro please just put stuff in the box
    return;
  }
  if (itemAmount == "")
  {
      itemAmount = 1
  }

  var itemArray;
  var index = Inventory.findIndex(element => element[0] === itemName); // find the index of the item in Inventory array, or -1.
  //console.log("Index found: "+index);

  if (index!=-1) {
    var amount = parseInt(Inventory[index][1])-parseInt(itemAmount); // a temp var to store the total.
    if (amount>0) {
      Inventory[index][1] = amount; // change the amount in the Inventory array.
    } else {
      Inventory.splice(index, 1); // remove the array from Inventory[] at the index.
    }
  } else {
    itemArray=[itemName,itemAmount]; // the array stored in the Inventory array.
    Inventory.push(itemArray); // push the itemArray to the Inventory array.
  }
  renderList();
  stringInventory();
}

function stringInventory() { // streamlined this function, converting it to use arrays in string form. 
  lineInventory = JSON.stringify(Inventory); // this function creates a string out of arrays. it's real handy
  console.log(Inventory);
  console.log("Inventory String: "+lineInventory);
}

function clearInventory() // just streamlined the middle section, since I made a helper for it.
{
    Inventory = [];
    clearDocList();
    stringInventory();
}

function loadInventory() { // revamped this. (You're welcome)
  lineInventory = "";
  const fInventory = searchParams.get('fInventory');
  var holdingString = "";

  if (!fInventory || fInventory.length === 0) {
    return;
  }

  Inventory = JSON.parse(fInventory);
  renderList();

  updatePage();
  stringInventory();
}
