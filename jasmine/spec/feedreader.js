/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Loops through each feed in the allFeeds 
         * object and ensures it has a URL defined 
         * and that the URL is not empty.
         */

         it('has a URL', function() {
            for(let a of allFeeds) {
                expect(a.url).toBeDefined();
                expect(a.url).not.toBe('');
            }
         }); 

        /* Loops through each feed in the allFeeds 
         * object and ensures it has a name defined
         * and that the name is not empty.
         */

          it('has a name', function() {
            for(let a of allFeeds) {
                expect(a.name).toBeDefined();
                expect(a.name).not.toBe('');
            }
         }); 
    });

    describe('The Menu', function() {

        /* Ensures the menu element is hidden by default. */

         it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* Ensures the menu changes visibility when the menu icon is clicked. */

          it('changes visibility on click', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });
    
    describe('Initial Entries', function() {

        /* Ensures when the loadFeed function is called 
         * and completes its work, there is at least
         * a single .entry element within the .feed container.
         */

         beforeEach(function(done) {
            loadFeed(0, done);
         });

         it('has at least one element', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
         });
    
    });
    
    describe('New Feed Selection', function() {

        /* Ensures when a new feed is loaded by the loadFeed 
         * function that the content actually changes.
         */

         var list;

         beforeEach(function(done) {
            loadFeed(0, function() {
                list = $('.feed').html();
                loadFeed(1, done);
            });
         });
     
        it('loaded', function() {
            expect($('.feed').html()).not.toBe(list);
        })
     });
});
 