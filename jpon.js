// SUM
// function Sum(a,b){
//     let result=a+b
//     return result
// }
// console.log(Sum(1,2))

// MaxNumber
// function MaxNumber(a,b,c){
//     let maxx
//     if (a>b && a>c)
//     return a
//     else if (b>a && b>c)
//     return b
//     else (c>a && c>b)
//     return c
// }
// console.log(MaxNumber())


// EVEN
// function NextEvanNum(n){
//     let res
//     res=n-(n%2)+2
//     return res
// }
// console.log(NextEvanNum(9))


// SumAllNumbers
// function SumAllNumbers(a,b){
//     let res=0
//     for (let i=a; i<=b; i++)
//     {
//         res+=i
//     }
//     return res
// }
// console.log(SumAllNumbers(1,5))

// SumThreeNum
// function SumThreeNum(a){
//     let res=0
//     for (let i=a; i>=1; i/=10)
//     {
//         res+=i%10
//     }
//     return Math.floor(res)
// }
// console.log(SumThreeNum(645))

// AllEvenNumber
// function AllEvenNumber(a,b){
//     for (let i=a; i<=b; i++)
//     {
//         if (i%2==0) console.log(i)
//     }
// }
// console.log(AllEvenNumber(1,10))

// Squares
function Squares(a,b){
    for (let i=a; i<=b; i++)
    {
        if (i*i>=a && i*i<=b) console.log(i*i)
    }
}
console.log(Squares(1,16))