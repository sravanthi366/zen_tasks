def reverse(k):
    # Create an empty character array stack 
    s = [] 
    token = k.split()
    print (token)
     
    # Push words into the stack 
    for word in token :
        s.append(word)
         
    while (len(s)) :
        # Get the words in reverse order 
        print(s.pop(), end = " ")
     
 
# Driver code 
if __name__ == "__main__" : 
 
    k = "code i love"
    reverse(k); 
     