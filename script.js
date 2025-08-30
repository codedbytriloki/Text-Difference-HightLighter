document.getElementById("compareText").addEventListener('click', () => {
  const text1 = document.getElementById("text1").value.trim();
  const text2 = document.getElementById("text2").value.trim();
  const result = document.getElementById("result");

  if(text1 === "" || text2 === ""){
    return;
  }

  result.style.display = "block";

  const word1 = text1.split(/\s+/);
  const word2 = text2.split(/\s+/);
  const maxLenght = Math.max(word1.length, word2.length);
  console.log(maxLenght);
  
  let final = "";

  for(let i = 0; i < maxLenght; i++ ){
    if(word1[i] === word2[i]){
      final += `<span class="match">${word1[i] || ""}</span>`
    }
    else{
      const w1 = word1[i] ? `<span class="mismatch">${word1[i]}</span>`: "";
      const w2 = word2[i] ? `<span class="mismatch">${word2[i]}</span>`: "";
      final += `${w1} ${w2}`
    }
  }

  result.innerHTML = final.trim();
})