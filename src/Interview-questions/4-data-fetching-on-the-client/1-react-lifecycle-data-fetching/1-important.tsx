/*
  The Big Reason:
    All of components, only rendered and therefore execute any lifecycle methods
    when they are visible in actual render tree.
    
    In other words, when they are returned from the component function.
  
    Until then, it just sits there idly as an object and does nothing.
*/

/* 
BROWSER LIMITATIONS
  The limit is usually 6 requests per domain. 
  This means that if you have more than 6 requests to the same domain, 
  the browser will queue the requests and send them one by one as the previous ones finish.

*/
