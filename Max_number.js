// 7.Find the maximum out of three numbers.
// Take three numbers and print the largest number among them if all of three are same print −1.

const Max_out_of_three = (A,B,C) => {
    
    if((A > B) && (A > C)){
      return A;
    }
    else if((B > A) && (B > C)){
      return B;
    }
    else if((C > A) && (C > B)){
      return C;
    }
    else if((A == B && B == C && C == A)){
      return -1;
    }
    };