// JavaScript Document

	PrintButton1 = new Image

	PrintButton2 = new Image

	logo1 = new Image

	logo2 = new Image

if (document.images) {

	PrintButton1.src = "images/print11.jpg"

	PrintButton2.src = "images/print22.jpg"

	logo1.src = "images/logo11.jpg"

	logo2.src = "images/logo22.jpg"

}





		var imgArray = new Array(

			'image1lg.jpg',

			'image2lg.jpg',

			'image3lg.jpg',

			'image4lg.jpg'

			



		);





		var titleArray = new Array(

			'Bow hunting',

			'Two Dogs',

			'Dog and Two Boys Portrait',

			'Woman and Dog'

			

		);

			

		var imgPath = "Images/Fullsize/";

		

		function swapImage(imgID) {



			var theImage = document.getElementById('theImage');

			var textDiv = document.getElementById('bottomText');



			var newImg;

			var textTitle;



			newImg = imgArray[imgID];

			theImage.src = imgPath + newImg;



			textTitle=titleArray[imgID];



      			textDiv.innerHTML = textTitle;

		}

			

		function preloadImages() {		

			for(var i = 0; i < imgArray.length; i++) {

				var tmpImg = new Image;

				tmpImg.src = imgPath + imgArray[i];

			}

		}

		

