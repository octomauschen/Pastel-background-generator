var generator = {
    colors: ["9", "A", "B", "C", "D", "E", "F"],
    colorSet:"",
    getAllCombinations: function(){
        for(var i = 0; i < generator.colors.length; i++) {
            for(var j = 0; j < generator.colors.length; j++) {
                for(var k = 0; k < generator.colors.length; k++){
                    if(i==j && i==k){ //Skip pure gray colors.
                        continue;
                    }else{
                    generator.colorSet = ""; /* Delete all items from the other iterations. */    generator.colorSet = "#" + generator.colors[i] + generator.colors[j] + generator.colors[k]; 
                    /* Put every combination in DOM.*/
                    generator.addColorToDOM();
                    }       
                }
            }
        }
    },
    addColorToDOM: function(){
        var paragraph = document.createElement("P");
        var text = document.createTextNode(generator.colorSet);
        paragraph.appendChild(text);
        document.body.appendChild(paragraph);
        paragraph.style.background = generator.colorSet;
    }
    
};
generator.getAllCombinations();
