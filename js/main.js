"use strict"

// ↓↓ 訪問者カウンター ↓↓ ---------------------- 

  const visit = document.getElementById("visit");
  const v_counter = document.getElementById("v_counter");

  let visit_count = 0;

  visit.addEventListener('click',()=>{

    visit_count++;
    
    if(visit_count == 1){
      v_counter.classList.add("apear");
    }else if(visit_count == 10){
      visit_count = 0;
      v_counter.classList.remove("apear");
      v_counter.innerHTML = 1;
    }else{
      v_counter.innerHTML = visit_count;
    };
    
  });

// ↑↑ 訪問者カウンター ↑↑ ---------------------- 


// ↓↓ 訪問者カウンター ↓↓ ---------------------- 

  const messe = document.getElementById("messe");
  const m_counter = document.getElementById("m_counter");

  let messe_count = 0;

  messe.addEventListener('click',()=>{

    messe_count++;
    
    if(messe_count == 1){
      m_counter.classList.add("apear");
    }else if(messe_count == 10){
      messe_count = 0;
      m_counter.classList.remove("apear");
      m_counter.innerHTML = 1;
    }else{
      m_counter.innerHTML = messe_count;
    };
    
  });

// ↑↑ 訪問者カウンター ↑↑ ---------------------- 