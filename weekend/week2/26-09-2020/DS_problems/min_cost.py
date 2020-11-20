def Mincost(s, cost): 
  
    # Initialize the count 
    count = 0
  
    # Maximum cost 
    mincost = 0
    i = 0
  
    # Traverse from 0 to len(s) - 2 
    while i < len(s) - 1: 
          
        # If characters are identical 
        if s[i] == s[i + 1]: 
  
            # Add cost[i] if its maximum 
            if cost[i] < cost[i + 1]: 
                mincost += cost[i] 
              
            # Add cost[i + 1] if its 
            # maximum 
            else: 
                mincost += cost[i + 1] 
                cost[i + 1] = cost[i] 
          
        # Increment i 
        i += 1
  
    # Return the final max count 
    return mincost 
  
# Driver Code 
  
# Given string s 
s = "abaac"
  
# Given cost of removal 
cost = [1, 2, 3, 4, 5] 
  
# Function Call 
print(Mincost(s, cost)) 