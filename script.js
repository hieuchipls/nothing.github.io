let noButtonClickCount = 0; 
let noButtonState = 0; 


document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {

    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';


    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';


    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = 'Tớ biết là cậu sẽ đồng ý làm người yêu tớ mà<33';


    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:

            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';


            document.getElementById('noBtn').innerHTML = 'Không!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '20px 40px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:


            document.getElementById('noBtn').innerHTML = 'Không!!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

  
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '30px 50px';
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'Tớ không đồng ý :<';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';


            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '40px 60px';
        
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = 'Khônggggggg';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

    
            document.getElementById('siBtn').style.fontSize = '70px';
            document.getElementById('siBtn').style.padding = '50px 70px';
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'không mà';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

        
            document.getElementById('siBtn').style.fontSize = '80px';
            document.getElementById('siBtn').style.padding = '60px 80px';
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('noBtn').innerHTML = 'Không chịu đâu';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';


            document.getElementById('siBtn').style.fontSize = '90px';
            document.getElementById('siBtn').style.padding = '70px 90px';

            noButtonState++;
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'KHÔNG';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

      
            document.getElementById('siBtn').style.fontSize = '100px';
            document.getElementById('siBtn').style.padding = '80px 100px';
            
            noButtonState++;
            break;
            case 7:
           
            document.getElementById('noBtn').innerHTML = 'Không';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';


            document.getElementById('siBtn').style.fontSize = '120px';
            document.getElementById('siBtn').style.padding = '120px 130px';
  
            noButtonState++;
            break; 

        case 8:
           
            document.getElementById('noBtn').innerHTML = 'Không không';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';


            document.getElementById('siBtn').style.fontSize = '160px';
            document.getElementById('siBtn').style.padding = '160px 160px';
  
            noButtonState++;
            break;
            
        case 9:

            document.getElementById('noBtn').innerHTML = 'Không không mà';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';


            document.getElementById('siBtn').style.fontSize = '200px';
            document.getElementById('siBtn').style.padding = '180px 180px';

            noButtonState++;
            break;

         case 10:
            
            document.getElementById('noBtn').innerHTML = 'Tớ thua rồi (Yêu Cậu:>) :(';
            document.getElementById('noBtn').backgroundColor = '#1330A';

            document.getElementById('siBtn').style.fontSize = '400px';
            document.getElementById('siBtn').style.padding = '420px 420px';

        
//thay cái lồn mẹ mày (Lazyios)
        default:

            break;
    }
});

