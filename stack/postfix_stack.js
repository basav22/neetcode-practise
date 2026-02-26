// Input: tokens = ["1","2","+","3","*","4","-"]

// Output: 5

// Explanation: ((1 + 2) * 3) - 4 = 5

// 9 4
// -

let tokns =  ["8","3", "/"]
res = evalRPN(tokns);
res

    function evalRPN(tokens) {
        let stackList = [];
        var isOperator = (t) => ['+', '-', '*', '/'].includes(t);
        function evl(token, oper1, oper2) {
            // token
            // oper1
            // oper2
            let res =0;
            switch(token) {
                case '+': res = Number(oper1) + Number(oper2); break;
                case '-': res = Number(oper1) - Number(oper2);break;
                case '*': res = Number(oper1) * Number(oper2);break;
                case '/': res = Math.trunc(Number(oper1) / Number(oper2));break;
            }
            // a = Math.trunc(-0.8)
            // a
            // res
            return  res;
        }
        for(let token of tokens) {
            if(isOperator(token)) {
                // pop last 2 opers
                let oper2 = stackList.pop();
                let oper1 = stackList.pop();
                stackList.push(evl(token, oper1,oper2));
            }else{
                stackList.push(token);
            }
        }
        return stackList.pop();
    }

    
