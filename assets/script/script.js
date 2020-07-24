const cacheKey = "NUMBER";
if (typeof(Storage) !== "undefined") {
     if (localStorage.getItem(cacheKey) === "undefined") {
        localStorage.setItem(cacheKey, 0);
    } 
    const button = document.querySelector("#download");
    const count = document.querySelector("#count");
    button.addEventListener('click', function(event) {
      let number = localStorage.getItem(cacheKey);
      number++;
      localStorage.setItem(cacheKey, number);
      count.innerText = localStorage.getItem(cacheKey);
    });
}else {
   alert("Browser tidak mendukung Web Storage");
}

function showCount($data){
	if($data == null){
		let countDownload = document.querySelector("#count");
		countDownload.innerText  = "0";	
	}else{
		let countDownload = document.querySelector("#count");
		countDownload.innerText  = $data;
	}

}
showCount(localStorage.getItem(cacheKey));