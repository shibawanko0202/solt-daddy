"use strict"


// ↓↓ プロフ画面の✖ボタン他の表示切り替え ↓↓ ---------------

  const prof_top = document.getElementById("prof_top");
  const prof_header = document.getElementById("prof_header");

  // 位置を確認してクラスを制御
  function top_button(){
    if(prof_top.getBoundingClientRect().y < -100){
      prof_header.classList.add("gray");
    } else {
      prof_header.classList.remove("gray");
    };
  };

  // スクロールするたびに判定
  window.addEventListener("scroll",top_button);

// ↑↑ プロフ画面の✖ボタン他の表示切り替え ↑↑ ---------------


// ↓↓ ハートアニメーション ↓↓ ------------------

  const favorite = document.getElementById("favorite");
  const love = document.getElementById("love");
  const prof_img = document.getElementsByClassName("prof_mainimag");

  let love_current = false;

  function heartfull(){
    if(!love_current){
      love_current = true;
      favorite.classList.add("love");
      love.classList.add("love");
    } else {
      love_current = false;
      favorite.classList.remove("love");
      love.classList.remove("love");
    };
  };
  favorite.addEventListener('click',heartfull);
  prof_img[0].addEventListener('click',heartfull);

// ↑↑ ハートアニメーション ↑↑ ------------------