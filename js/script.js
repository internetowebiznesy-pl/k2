$(document).ready(function(){
const burger = document.querySelector('.burger');
const exit = document.querySelector('.exit');
const pup = document.querySelector('.pup');

const nav = document.querySelector('.nav');
const $nav = $(nav);

const $navH = $nav.outerHeight();

function wyzwalacz(){
	burger.addEventListener('click',function(){
		burger.classList.remove('show');
		exit.classList.add('show');
		pup.classList.add('show');
	});

	exit.addEventListener('click',function(){
		exit.classList.remove('show');
		burger.classList.add('show');
		pup.classList.remove('show');
	});
};

$('.a1').on('click',function(){
	$('body, html').animate({
		scrollTop: $('.s1').offset().top - $navH
	},500);
	exit.classList.remove('show');
	burger.classList.add('show');
	pup.classList.remove('show');
	
});

$('.a2').on('click',function(){
	$('body, html').animate({
		scrollTop: $('.s2').offset().top - $navH
	},500);
	exit.classList.remove('show');
	burger.classList.add('show');
	pup.classList.remove('show');
});

$('.a3').on('click',function(){
	$('body, html').animate({
		scrollTop: $('.s3').offset().top - $navH
	},500);
	exit.classList.remove('show');
	burger.classList.add('show');
	pup.classList.remove('show');
});

$('.a4').on('click',function(){
	$('body, html').animate({
		scrollTop: $('.s4').offset().top - $navH
	},500);
	exit.classList.remove('show');
	burger.classList.add('show');
	pup.classList.remove('show');
});
$('.logoType').on('click',function(){
	$('body,html').animate({
		scrollTop: 0
	},500);
});
wyzwalacz();


function scrollS(){
	// WSPOLNE
	const whereScroll = $(this).scrollTop(); // pobieram wysokość scrolla
	const heightDocument = $(window).height(); // pobieram wysokość 100vh, które nie jest scrollowane at start
	
	//DLA I
	const $arrow = $('.arrows'); // pobieram I elementFromPoint
	const $arrowWrap = $('.wrapArrows');
	
	const $nav = $('.nav');
	const $navHeight = $nav.outerHeight();
	
	const $header = $('.header');
	const $headerHeight = $header.outerHeight();
	
	const $arrowStart = $arrow.offset().top; //jak daleko od top
	
	const $arrowHeight = $arrow.outerHeight(); // pobiera bez marginesu wysokość elementu
	
	if(whereScroll > $arrowStart - $navHeight - $headerHeight/3){
		$arrowWrap.addClass('show');
	};
};
$(document).on('scroll',scrollS);
});