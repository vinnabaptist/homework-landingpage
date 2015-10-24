$(document).ready(function() {
});

function expandPara1(){
	$('.hiddenText').slideDown();
	$('#readMore1').hide();
	$('#readLess1').show();
}

function contractPara1(){
	$('.hiddenText').slideUp();
	$('#readLess1').hide();
	$('#readMore1').show();
}

function learnMore(){
	$('#learnMoretext').slideDown();
	$('#learn_link').hide();
}


$('.hiddenText').addClass('hide');

$('#readLess1').addClass('hide');

$('#readMore1').click(expandPara1);

$('#readLess1').click(contractPara1);

$('#learn_link').click(learnMore);

$('#learnMoretext').addClass('hide');


