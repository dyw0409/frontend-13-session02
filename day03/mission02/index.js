const btn = document.querySelector("#box");



btn.addEventListener('mousedown', (e) => {
    e.preventDefault();
 });

 btn.addEventListener('mousedown', (e) => {
    e.preventDefault();

    if(e.button ===0){
      btn.textContent="왼쪽버튼";
    }else if (e.button ===2){
      btn.textContent="오쪽버튼";
    }
 });

 btn.addEventListener('mouseup', ()=> {
  btn.textContent="클랙해보세요.";
 });
