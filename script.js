	var tree = function(value){
    	this.value = value;
    	this.leftChild = null;
    	this.rightChild = null;
	};

    //Walking the tree function
    tree.prototype.walker = function(result, fn){
        fn(result, this.value);
        if(this.leftChild!==null){
            this.leftChild.walker(result, fn);
        }
        if(this.rightChild!==null){
            this.rightChild.walker(result, fn);
        }
    };

    //Get sum method
    tree.prototype.sum = function(){
        var result = {
            sum: 0
        };
        this.walker(result, sum);
        return result.sum;
    };
    var sum = function(result, value){
        result.sum += value;
    };

    //Get average value method
    tree.prototype.avg = function(){
        var result = {
            sum: 0,
            count: 0
        };
        this.walker(result, sumCount);
        return result.sum/result.count;
    };
    var sumCount = function(result, value){
        result.sum += value;
        result.count++;
    };

    //Get median method
    tree.prototype.median = function(){
        var arr = [];
        this.walker(arr, toArray);
        arr.sort();
        console.log("Array from which median is taken", arr);
        if(arr.length%2==1){
            return arr[Math.floor(arr.length/2)];
        }
        else{
            return (arr[arr.length/2] + arr[arr.length/2 - 1])/2;
        }
    };
    var toArray = function(result, value){
        result.push(value);
    };

    //Initialize tree with random values
	var Tree = new tree(Math.floor(Math.random()*10));
	Tree.leftChild = new tree(Math.floor(Math.random()*10));
	Tree.rightChild = new tree(Math.floor(Math.random()*10));
	Tree.leftChild.leftChild = new tree(Math.floor(Math.random()*10));
	Tree.leftChild.rightChild = new tree(Math.floor(Math.random()*10));
	Tree.rightChild.leftChild = new tree(Math.floor(Math.random()*10));
	Tree.rightChild.rightChild = new tree(Math.floor(Math.random()*10));
	Tree.leftChild.leftChild.leftChild = new tree(Math.floor(Math.random()*10));

    //Tests
    console.log("Tree obj : ",Tree);
    console.log("Tree sum : ",Tree.sum());
    console.log("Tree avg : ",Tree.avg());
    console.log("Tree median : ",Tree.median());
    console.log("Tree leftChild obj : ",Tree.leftChild);
    console.log("Tree leftChild sum : ",Tree.leftChild.sum());
    console.log("Tree leftChild avg : ",Tree.leftChild.avg());
    console.log("Tree leftChild median : ",Tree.leftChild.median());
    console.log("Tree rightChild obj : ",Tree.rightChild);
    console.log("Tree rightChild sum : ",Tree.rightChild.sum());
    console.log("Tree rightChild avg : ",Tree.rightChild.avg());
    console.log("Tree rightChild median : ",Tree.rightChild.median());