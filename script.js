document.getElementById("new-quote").addEventListener('click',generateQuote);
document.getElementById("share-twitter").addEventListener('click',shareontwitter);
document.getElementById("share-instagram").addEventListener('click',shareoninstagram);
document.getElementById("share-whatsapp").addEventListener('click',shareonwhatsapp);
async function generateQuote(){
   const response = await fetch("https://api.kanye.rest");
   const data = await response.json();
   console.log('data..',data);
   document.getElementById('quote').textContent = data.quote;
}
   
function shareontwitter(){
   const quoteText = document.getElementById('quote').textContent;
   const twitterURL = 'https://twitter.com/intent/tweet?text=$(encodeURIComponent(quoteText)}';
   window.open(twitterURL,'_blank');
}
function shareoninstagram(){
   const quoteText = document.getElementById('quote').textContent;
   navigator.clipboard.writeText(quoteText).then(()=>{ 
      alert('Quote copied,proceed to post on instagram.');
      window.open('https://www.instagram.com/','_blank');
   },()=>{
      alert('failed to copy the quote');
   });
}
function shareonwhatsapp(){
   const quoteText = document.getElementById('quote').textContent;
   const whatsappURL ='https://api.whatsapp.com/send?text=$(encodeURIComponenet(quoteText)}';
   window.open(whatsappURL,'_blank');
}
generateQuote();


    
