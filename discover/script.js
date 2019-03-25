//clock

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = //node
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }
// footer

  const node= document.querySelector('body')
  const item1= document.createElement('section')
  item1.className= "text-muted footer d-flex justify-content-center flex-column"
  item1.id="footer"
  node.appendChild(item1)

  const contactme= document.querySelector('#footer')
  const item2=document.createElement('p')
  item2.className=" font-weight-bolder "
  const item3=document.createElement('p')
  item2.innerHTML="Contact me"
  item3.innerHTML= "vanessamontesb@gmail.com/vanessa.montes@udea.edu.co"
  contactme.appendChild(item2)
  contactme.appendChild(item3)
