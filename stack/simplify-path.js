// 

let path = '/home/.../user/Documents//../Pictures';
path = '/.../a/../b/c/../d/./';
path='/../'

path ="/home//foo/"
// path='//..//'
a =path.split('/');
a
b = a.filter(x => x!='')
b
b=b.join('/');
b


var simplifyPath = function(path) {
    // split
    let a =path.split('/');
    a
    let b = a.filter(x => x!='');
    b

    let stack = [];

    for(let p of b) {
        if(p == '.') continue;
        if(p == '..') 
            stack.pop();
        else 
            stack.push(p);
        
    }
    b= '/'+ stack.join('/');
    b


    
};

simplifyPath(path);

