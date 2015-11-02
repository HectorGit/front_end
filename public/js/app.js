angular.module('routerApp', ['routerRoutes','ngAnimate'])

 // create the controllers
 // this will be the controller for the ENTIRE site
 .controller('mainController', function() {

	 var vm = this;

	 // create a bigMessage variable to display in our view
	 vm.bigMessage = 'Get the Best Prices at Subtext.';
 })

 // home page specific controller
 .controller('homeController', function() {

	 var vm = this;

	 vm.message = 'Look for your Books';
	 
	 
	 vm.inputData = {};
	 
	 vm.changeText = function(){
		vm.message = 'Searching for: '+' '+vm.inputData.textone;
	 };
	 
	 
	 vm.books = [
	 {bookname:'BIO 101',cost: 30, subject:'Biology', author:'Harry Potter'},
	 {bookname:'BIO 101',cost: 30, subject:'Biology', author:'Harry Potter'},
	 {bookname:'BIO 101',cost: 30, subject:'Biology', author:'Harry Potter'}
	 
	 ];
	 
	 vm.reserveBook = function(){
		//vm.message = books[1].bookname;
		vm.message = 'Book reserved';
	 }
	 
	 
	 
	 
	 /*vm.addBook() = function(){
		vm.books.push({bookname:'BIO 101',cost: 30, subject:'Biology', author:'Harry Potter'});
	 };*/
	
	 
 })

 // about page controller
 .controller('aboutController', function() {

	 var vm = this;

	 vm.message = 'Here you can see the books that are available.';
 })

 // contact page controller
 .controller('contactController', function() {
	 var vm = this;

	 vm.message = 'Here are the current reservations.';
 });