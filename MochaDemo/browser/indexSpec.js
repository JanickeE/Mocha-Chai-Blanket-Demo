var webdriver = require('selenium-webdriver');
var client = new webdriver.Builder().withCapabilities({
	browserName: 'chrome'
}).build();


				
var chai = require('chai');
var expect = require('chai').expect;

describe('from Homepage', function(){
	var url = 'http://localhost:8000';
	
	beforeEach(function(done){
		//console.log('Inne i beforeEach');
		client.get(url).then(function(){
			done();
		});
	});
	
	afterEach(function(done){
		//console.log('Inne i afterEach');
		client.quit().then(function(){
			done();
		});
	});
	
	it('returns the title of the page', function(done){
		client.getTitle().then(function(title){
			expect(title).to.equal('Browser testing');
			done();
		});
	})
	it('returns the h1 text on the page')
})
