

function evl(str) {
    // ''.replaceAll()
    str = str.replaceAll(' ','');
    str

    let stackOperands = Stack();
    let stackOperator = Stack();

    let memo = new Map();
    memo.set('+', 1);
    memo.set('-', 1);
    memo.set('*', 2);
    memo.set('/', 2);
    memo.set('(',0);

    function eval_internal(oper1, oper2, operator) {
        let res = 0;
        switch(operator) {
            case '+': res = Number(oper1) + Number(oper2); break;
            case '-': res = Number(oper1) - Number(oper2); break;
            case '*': res = Number(oper1) * Number(oper2); break;
            case '/': res = Number(oper1) / Number(oper2); break;
        }
        return Math.floor(res);
    }

    
    var isOperator = (c) => ['+', '-', '*', '/', '(', ')'].includes(c);
    var canAddOperatorOnStack = (op) => {
       
        if((memo.get(stackOperator.stackTop()) || 2) >= memo.get(op) ) {
            return true;
        }
        return false;
    }

    let res = 0;
    let ch= '';
// str = '2+2+3*4*3+2';
// str = '1+(2+3)';
    for(let i=0;i<str.length;i++) {
        ch = str[i];
        if(ch =='') continue;
        if(isOperator(ch)) {
            if(ch ==')') {
                while(stackOperator.stackTop() != '(') {
                    let op = stackOperator.pop();
                    op
                    oper2 = stackOperands.pop();
                    oper1 = stackOperands.pop();
                    oper1
                    oper2

                    res = eval_internal(oper1, oper2, op);
                    stackOperands.push(res);
                }
                stackOperator.pop();

            } 
            else if(canAddOperatorOnStack(ch) || ch == '(') {
                stackOperator.push(ch);
                
            } 
            else {
                //pop operand
                let op1 = (stackOperands.pop());
                let op2 = str[++i] ; // next

                op1
                op2
                ch
                res = eval_internal(op1, op2, ch);
                // push res to stack
                stackOperands.push(res);
            }
            // continue; 
        } else {
            // operand
            // will pop operand if operator is * /
            stackOperands.push(ch);
            // stackOperands.
        }
        // i++;
    }

    res
    x = stackOperands.print();
    x

    y = stackOperator.print();
    y

    if(stackOperator.isEmpty()) {
        return stackOperands.pop();
    }

    while(!stackOperator.isEmpty()) {
        let op = stackOperator.pop();
        op
        oper2 = stackOperands.pop();
        oper1 = stackOperands.pop();
        oper1
        oper2

        res = eval_internal(oper1, oper2, op);
        stackOperands.push(res);
    }
    res
    x = stackOperands.print();
    x

    y = stackOperator.print();
    y
    return res;
}

v = Math.floor(5/2)
v

str = "(2 + 3)";
a = evl(str)
a

function Stack() {
    let list = [];
    function push(ch) {
        list.push(ch);
    }
    function pop() {
        let ch = list[list.length-1];
        list.splice(list.length - 1, 1);
        return ch;
    }
    function stackTop() {
        return list[list.length-1];
    }

    function print() {
        return list;
    }

    function isEmpty() {
        return list.length ==0;
    }

    return {
        print,
        push,
        pop,
        stackTop,
        isEmpty,
    };
}

