let n=1;
getPage.onclick=()=>{
   const request=new XMLHttpRequest();
   request.open('GET',  `/page${n+1}`);
   request.onreadystatechange=()=>{
       if(request.readyState===4 && request.status===200){
          const array=JSON.parse(request.response);
          array.forEach(item => {
              const li=document.createElement("li");
              li.textContent=item.id;
              xxx.appendChild(li);
          });
          n+=1;
       }
   }
   
   request.send();

}
getJSON.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET',"/5.json");
    request.onreadystatechange=()=>{
      if(request.readyState===4&&request.status===200){
        const json=JSON.parse(request.response);
        myName.textContent=json.name;
      }
    }
    request.send();
}

getXML.onclick=()=>{
  const request=new XMLHttpRequest();
  request.open('GET',"/4.xml");
  request.onreadystatechange=()=>{

      if(request.readyState===4 && request.status===200){
        debugger;
        const dom=request.responseXML;
        const text=dom.getElementsByTagName('warning')
        [0].textContent;
      console.log(text.trim());
    }
   
  }
  request.send();
}
getHTML.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET',"/3.html");
    request.onload=()=>{
        //创建div内容
        const div=document.createElement('div');
        //填写div内容
        div.innerHTML=request.response;
        //插入到身体里
        document.body.appendChild(div);
    }
    request.onerror=()=>{

    }
    request.send();
}
getJS.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET',"/2.js");
    request.onload=()=>{
      //插入到script
       const script=document.createElement('script');
       //填写script内容
       script.innerHTML=request.response;
       //插入到身体里
       document.body.appendChild(script);
    }
    request.onerror=()=>{
        console.log('失败了');
    }
    request.send();
}
getCSS.onclick=()=>{
    const request=new XMLHttpRequest();
    request.open('GET','/style.css');
    request.onload=()=>{
        console.log(request.response);
        //创建style标签
        const style=document.createElement('style');
        //填写style
        style.innerHTML=request.response;
        //插到head里面
        document.head.appendChild(style);
        console.log('成功了');
    }
    request.onerror=()=>{
    console.log('失败了');
    }
    request.send();
}
